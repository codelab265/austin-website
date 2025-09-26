import React from "react";

function ContainerWrapper({ children, className }) {
    return (
        <div
            className={`w-full mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8 xl:px-0 ${className}`}
        >
            {children}
        </div>
    );
}

export default ContainerWrapper;
