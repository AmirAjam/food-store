import Input from "../../components/Ui/Input/Input";
import RestaurantMenu from "./RestaurantMenu/RestaurantMenu";
import IntroSection from "./IntroSection/IntroSection";
import Slider from "./Slider/Slider";
import Header from '../../components/Header/Header'
import icons from "@/icons";

const {Search} = icons

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="container mt-8 md:hidden">
        <Input placeHolder="جستجو">  <Search className="text-lg"/> </Input>
      </div>
      <RestaurantMenu />
      <IntroSection />
    </>
  )
}