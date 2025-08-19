const PrimaryButton = ({ type = "button", text ,onClick}) => {
    return (
        <button  onClick={onClick}
         type={type} className="bg-primary-color text-white w-full font-Estedad-Medium py-2
         rounded-lg duration-300
            hover:bg-green-900 cursor-pointer">
            {text}
        </button>
    )
}

export default PrimaryButton