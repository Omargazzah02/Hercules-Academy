import React from "react";

type ButtonProps = {
    label :string ;
    onClick : () => void;
}

const GrayButton : React.FC<ButtonProps> = ({label , onClick}) => {

    return (
        <button
        onClick={onClick}
        className="p-2  w-32 bg-gray-700 hover:bg-gray-600 text-white  "
        
        
        >
{label}  


        </button>

    )

}

export default GrayButton