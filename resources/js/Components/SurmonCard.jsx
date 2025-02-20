import React from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

function SurmonCard({ item }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`w-full h-[600px] md:h-[807px] bg-cover bg-center relative group overflow-hidden`}
            style={{ backgroundImage: `url(${item.image})` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-60" />

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 md:px-[63px] pb-6 sm:pb-8 md:pb-[96px]"
            >
                <div className="flex flex-col justify-between gap-4 sm:gap-6 md:gap-8">
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white font-bold text-2xl sm:text-3xl md:text-[55px] leading-[1.1] -tracking-[2%]"
                    >
                        {item.title}
                    </motion.div>
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-white font-medium text-base sm:text-lg md:text-[20px] leading-[1.2] -tracking-[2%]"
                    >
                        {item.time}
                    </motion.div>
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 sm:mt-6 md:mt-[42px]"
                    >
                        <CustomButton title={"Watch Now"} />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default SurmonCard;
