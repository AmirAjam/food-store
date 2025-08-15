import React from "react";

const AuthInput = React.forwardRef(({placeholder, label, type = "text", ...props }, ref) => {
    return (
        <div className='relative mt-5'>
            <label className='absolute -top-5 text-sm right-5 bg-white z-40 px-2 py-1 text-gray-500'>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...props} 
                className='w-full rounded-lg border border-gray-500 p-3'
            />
        </div>
    )
});

export default AuthInput;
