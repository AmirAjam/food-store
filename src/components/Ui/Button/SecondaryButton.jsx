const SecondaryButton = ({ children, type = "button", text, onClick }) => {
    return (
        <button onClick={onClick}
            type={type} className="w-full font-Estedad-Medium py-2 text-primary-color
         rounded-lg duration-300 border border-primary-color
            hover:bg-gray-400 hover:border-gray-400 hover:text-white cursor-pointer">
            {text}
            {children}
        </button>
    )
}

export default SecondaryButton