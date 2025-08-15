const PrimaryButton = ({type="button",text}) => {
    return(
        <button type={type} className="bg-primary-color text-white w-full font-Estedad-Medium py-2 rounded-lg duration-300
            hover:bg-green-900 cursor-pointer">
            {text}
        </button>
    )
}

export default PrimaryButton