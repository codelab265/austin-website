import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

function TestimonialSlider() {
    return (
        <div className="w-full flex items-center justify-center gap-[43px]">
            {/* add prev slider here */}

            {/* add next slider here */}
            <div className="w-full max-w-[1130px] px-[65px] py-[55px] bg-[#EA413C]">
                <div className="text-[32px] font-medium text-white/50 -tracking-[2%] leading-[30px] uppercase">
                    Malawi
                </div>
                <div className="text-2xl font-aeonik text-white tracking-normal mt-[37px]">
                    Of a truth, I went on a retreat with the book; The Field of
                    Boaz. the lines of the book carries great prayer points as i
                    needed to read and also write. My friends had gotten their
                    copies too. The book is addicting. Thank you sir for writing
                    this.
                </div>
                <div className="flex items-center justify-between mt-[88px]">
                    <div className="font-medium text-white text-[48px] leading-[30px] -tracking-[2%] uppercase ">
                        Mphatso Mlenga
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="size-[65px] rounded-full flex items-center justify-center bg-black">
                            <ChevronLeft className="text-white" />
                        </div>
                        <div className="size-[65px] rounded-full flex items-center justify-center bg-black">
                            <ChevronRight className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSlider;
