import openWeather from "./openWeather";
import { useQuery } from "@tanstack/react-query";

// useQuery를 사용하면 default가 비동기이므로 async 키워드 쓸 필요 없음
const getWeather = () => {
  const weather = openWeather.getCurrentWeatherByCityName({
    cityName: "Seoul",
    countryCode: "KR",
    units: "metrics",
  });

  return weather;
};

const useWeather = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    // 캐시 및 refetch 기준 키
    queryKey: ["weather", city],
    // 데이터를 가져올 비동기 함수
    queryFn: () => getWeather(city),
    // 데이터를 유지할 시간 (ms)
    // setTime: 1000 * 60 * 5,
  });

  return {
    ...rest,
    data,
  };
};

export default useWeather;
