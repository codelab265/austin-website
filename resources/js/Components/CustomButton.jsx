import React from "react";

function CustomButton({ title, onClick }) {
    return (
        <div
            className="relative bg-transparent h-10 flex items-center pl-[5px] cursor-pointer pb-[5px]"
            onClick={onClick}
        >
            <div className="size-10 bg-[#F0F0F0] rounded-full absolute top-0 left-0"></div>
            <div className="uppercase text-[#EA413C] font-medium text-[27px] leading-[30px] -tracking-[2%] z-10">
                {title}
            </div>
        </div>
    );
}

export default CustomButton;
