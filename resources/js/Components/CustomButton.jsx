import React from "react";
import { motion } from "framer-motion";

function CustomButton({ title, onClick }) {
    return (
        <motion.div
            className="relative bg-transparent h-10 flex items-center pl-[5px] cursor-pointerpb-[5px]"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div 
                className="size-10 bg-[#F0F0F0] rounded-full absolute top-0 left-0"
                whileHover={{ 
                    backgroundColor: "#EA413C",
                    scale: 1.1
                }}
                transition={{ duration: 0.3 }}
            />
            <motion.div 
                className="uppercase text-[#EA413C] font-medium text-[27px] leading-[30px] -tracking-[2%] z-10"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3 }}
            >
                {title}
            </motion.div>
        </motion.div>
    );
}

export default CustomButton;
