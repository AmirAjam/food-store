import Input from "../../components/Ui/Input/Input";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import IntroSection from "./components/IntroSection/IntroSection";
import Slider from "./components/Slider/Slider";
import Header from '../../components/Header/Header'
import icons from "@/icons";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import Branches from "./components/Branches/Branches";
import Footer from "@/components/Footer/Footer";

const { Search } = icons

export default function Home() {

  return (
    <>
      <Header />
      <Slider />
      <div className="container mt-8 md:hidden">
        <Input placeHolder="جستجو">  <Search className="text-lg" /> </Input>
      </div>
      <RestaurantMenu />
      <IntroSection />
      <Branches />
      <Footer />
    </>
  )
}