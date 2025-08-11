import { BiSearch } from "react-icons/bi";

import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider"
import Input from "../components/Ui/Input/Input";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu";
import IntroSection from "../components/IntroSection/IntroSection";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="container mt-8 md:hidden">
        <Input placeHolder="جستجو">  <BiSearch className="text-lg"/> </Input>
      </div>
      <RestaurantMenu />
      <IntroSection />
    </>
  )
}