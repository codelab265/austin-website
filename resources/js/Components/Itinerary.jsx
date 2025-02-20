import React from "react";
import ItineraryCard from "./ItineraryCard";
import { ItineraryData } from "@/lib/Data";
import { motion } from "framer-motion";

function Itinerary() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="bg-white flex flex-col items-center w-full pt-[100px] sm:pt-[150px] md:pt-[201px] pb-[80px] sm:pb-[100px] md:pb-[152px] px-4 sm:px-6 md:px-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#070707] text-[64px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-semibold -tracking-[2%] leading-[1] sm:leading-[1.1] md:leading-[1.2] xl:leading-[1] text-center mb-[30px] sm:mb-[45px] md:mb-[66px]"
            >
                ITINERARY
            </motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full flex flex-col items-center mt-[20px] sm:mt-[30px] md:mt-[43px] gap-[13px]"
            >
                {ItineraryData.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="w-full flex justify-center"
                    >
                        <ItineraryCard {...item} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Itinerary;
