const SecondaryButton = ({ children, type = "button", text, onClick }) => {
    return (
        <button onClick={onClick}
            type={type} className="w-full font-Estedad-Medium py-2 text-primary-color
         rounded-lg duration-300 border border-primary-color
            hover:bg-primary-color hover:text-white cursor-pointer">
            {text}
            {children}
        </button>
    )
}

export default SecondaryButton