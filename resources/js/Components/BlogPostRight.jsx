import React from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

function BlogPostRight({ title, description }) {
    return (
        <div cassName="w-full">
            <div className="w-full flex justify-end">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[38px] max-w-[1160px]">
                    <div className="lg:col-span-5 flex flex-col justify-end relative pb-8 order-1 lg:order-1">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "216px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden lg:block h-[4px] bg-[#EA413C] absolute top-[166px] -right-[163px]"
                        />
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#EA413C] font-semibold text-[40px] sm:text-[50px] lg:text-[70px] leading-[35px] sm:leading-[45px] lg:leading-[55px] -tracking-[2%] line-clamp-3"
                        >
                            {title}
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-7 order-2 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-[250px] sm:h-[350px] lg:h-[404px] overflow-hidden bg-[#D9D9D9]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[732px] mx-auto mt-[38px] px-4 sm:px-0">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base sm:text-lg font-aeonik font-normal tracking-normal"
                >
                    {description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-[38px]"
                >
                    <CustomButton title={"Read More"} onClick={() => {}} />
                </motion.div>
            </div>
        </div>
    );
}

export default BlogPostRight;
