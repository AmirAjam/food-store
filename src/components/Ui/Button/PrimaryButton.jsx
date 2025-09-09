const PrimaryButton = ({ type = "button", text, onClick, danger }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${danger ? "bg-red-700 hover:bg-red-900" : "bg-primary-color hover:bg-green-900"}
             text-white w-full font-Estedad-Medium py-2
            rounded-lg duration-300  cursor-pointer`}>
            {text}
        </button>
    )
}

export default PrimaryButton