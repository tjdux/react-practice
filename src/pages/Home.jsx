import Header from "../components/Header/Header"
import { HomeWrapper, BackgroundGradient } from "./styles"
import ThisDay from "../components/ThisDay/ThisDay"

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundGradient>
        <Header/>
        <ThisDay/>
      </BackgroundGradient>
    </HomeWrapper>
  )
}

export default Home