import { ThisDayWrapper, Top, Bottom } from "./styles"

const ThisDay = () => {
  const imageSrc = './images/weatherIcons/rain.svg'

  return(
    <ThisDayWrapper>
      <Top>
        <div>
          <h2>100°</h2>
          <h3>Now</h3>
        </div>
        <img src={imageSrc} alt=""/>
      </Top>
      <Bottom>
        <div>오후 16:03</div>
        <div>
          Seoul - KR
        </div>
      </Bottom>
    </ThisDayWrapper>
  )
}

export default ThisDay