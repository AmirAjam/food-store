import RestaurantMenuItem from "./RestaurantMenuItem"
import SectionTitle from "../../../components/Ui/SectionTitle"
const RestaurantMenu = ({data}) => {
    return(
        <section className="mt-10">
            <SectionTitle>منوی رستوران</SectionTitle>
            <div className="container flex mt-5 flex-wrap justify-between">
                <RestaurantMenuItem src="../src/assets/images/RestaurantMenu/image.png">پیش غذا</RestaurantMenuItem>
                <RestaurantMenuItem src="../src/assets/images/RestaurantMenu/image-3.png">غذای اصلی</RestaurantMenuItem>
                <RestaurantMenuItem src="../src/assets/images/RestaurantMenu/image-1.png">دسر</RestaurantMenuItem>
                <RestaurantMenuItem src="../src/assets/images/RestaurantMenu/image-2.png" >نوشیدنی</RestaurantMenuItem>
            </div>
        </section>
    )
}

export default RestaurantMenu
