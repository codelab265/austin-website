import React from "react";

const GradientText = ({
    text,
    className = "",
    gradientDirection = "270deg",
    startOpacity = "0.3",
    endOpacity = "0.8",
    maxWidth = "604px",
}) => {
    return (
        <div
            className={`absolute max-w-[${maxWidth}] text-[14px] leading-[16px] tracking-normal z-50 ${className}`}
        >
            <div
                className={`bg-[linear-gradient(${gradientDirection},rgba(255,255,255,${startOpacity})_13.25%,rgba(255,255,255,${endOpacity})_100%)] bg-clip-text text-transparent`}
            >
                {text}
            </div>
        </div>
    );
};

export default GradientText;
