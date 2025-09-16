const SecondaryButton = ({ children, type = "button", text, onClick }) => {
    return (
        <button onClick={onClick}
            type={type} className="w-full font-Estedad-Medium py-2 text-primary-color
            rounded-lg duration-300 border border-primary-color
            hover:bg-green-200/60 hover:border-emebg-green-200/60 cursor-pointer">
            {text}
            {children}
        </button>
    )
}

export default SecondaryButton