import { Link } from "react-router-dom"

const WhiteButton = ({ children,text }) => {
    return (
        <button className="bg-inherit text-white w-38 py-2 rounded-lg duration-300 cursor-pointer
            hover:bg-white hover:text-black border-white border-1 flex gap-5 items-center justify-center text-sm">
            {text}
            {children}
        </button>
    )
}

export default WhiteButton