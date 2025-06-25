import { ThisDayWrapper, Top, Bottom } from "./styles"
import { useState } from "react"
import CurrentTime from "./CurrentTime"

const ThisDay = () => {
  const imageSrc = './images/weatherIcons/'
  const [temperature, setTemperature] = useState(21);
  const [imgSrc, setImgSrc] = useState(imageSrc + "/rain.svg")

  return(
    <ThisDayWrapper>
      <Top>
        <div>
          <h2>{temperature}°</h2>
          <h3>Now</h3>
        </div>
        <img src={imgSrc} alt=""/>
      </Top>
      <Bottom>
        <CurrentTime/>
        <div>
          Seoul - KR
        </div>
      </Bottom>
    </ThisDayWrapper>
  )
}

export default ThisDay