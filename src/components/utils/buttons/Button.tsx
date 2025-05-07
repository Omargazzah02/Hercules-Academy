import React from "react";

type ButtonProps = {
    label :string ;
    onClick : () => void;
}

const Button : React.FC<ButtonProps> = ({label , onClick}) => {

    return (
        <button
        onClick={onClick}
        className="p-3 bg-red-600 hover:bg-red-400 text-white  "
        
        
        >
{label}  


        </button>

    )

}

export default Button