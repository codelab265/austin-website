import React from "react";
import { motion } from "framer-motion";

function ItineraryCard({ title, location, date, image }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 max-w-[836px] overflow-hidden bg-[#F0F0F0]"
        >
            <div className="h-[250px] sm:h-[300px] md:h-[418px] overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="h-full bg-[#F0F0F0] flex flex-col justify-between p-6 sm:p-8 md:p-11">
                <div className="font-bold text-[32px] sm:text-[40px] md:text-[55px] text-[#070707] leading-[1.1] -tracking-[2%]">
                    {title}
                </div>
                <div className="flex flex-col gap-[5px] mt-6 sm:mt-0">
                    <div className="font-bold text-[24px] sm:text-[30px] md:text-[36px] text-[#070707] leading-[1.2] -tracking-[2%]">
                        {date}
                    </div>
                    <div className="font-normal font-aeonik text-[16px] sm:text-[18px] text-[#070707] leading-[1.2] tracking-normal">
                        {location}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ItineraryCard;
