const PrimaryButton = ({children}) => {
    return(
        <button className="bg-primary-color text-white font-Estedad-Medium px-4 py-2 rounded-lg duration-300
            hover:bg-green-200 hover:text-primary-color">
            {children}
        </button>
    )
}

export default PrimaryButton