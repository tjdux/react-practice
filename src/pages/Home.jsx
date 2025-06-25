import Header from "../components/Header/Header"
import { HomeWrapper, BackgroundGradient } from "./styles"

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundGradient>
        <Header/>
      </BackgroundGradient>
    </HomeWrapper>
  )
}

export default Home