const Input = ({children,placeHolder}) => {
    return(
        <div className="flex justify-between border-1 border-gray-300 items-center py-2 px-4 rounded-lg">
            <input type="text" placeholder={placeHolder} className="w-full border-none outline-none"/>
            {children}
        </div>
    )
}

export default Input