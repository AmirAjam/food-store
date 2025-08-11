const RestaurantMenuItem = ({ children , src}) => {
    return (
        <div className="relative z-10 w-36 mb-10 lg:w-52 xl:w-72">
            <div className="z-10 relative flex justify-center items-center flex-col">
                <img src={src} alt="" className="h-32 lg:h-40 xl:h-48"/>
                <p className="bg-white w-24 py-1 flex justify-center items-center rounded-lg shadow-lg 
                text-sm lg:text-base lg:w-32">
                    {children}
                </p>
            </div>
            <div className="bg-primary-color absolute h-21 inset-x-0 bottom-3.5 z-0 rounded-lg lg:h-28"></div>
        </div>
    )
}

export default RestaurantMenuItem