import React from "react";
import TestimonialSlider from "./TestimonialSlider";

function Testimonies() {
    return (
        <section className="bg-white flex flex-col items-center w-full">
            <h1 className="text-[#070707] text-[64px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-semibold -tracking-[2%] xl:leading-[150px] mb-[66px]">
                TESTIMONIES
            </h1>
            <div className="w-full">
                <TestimonialSlider />
            </div>
        </section>
    );
}

export default Testimonies;
