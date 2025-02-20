import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import Socials from "./Socials";
import { Link } from "@inertiajs/react";
import { NavItems } from "../lib/Data";
import { motion } from "framer-motion";

function Footer() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
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
        <footer className="flex flex-col">
            <motion.div
                className="w-full bg-[#070707] pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[122px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <ContainerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-[30px] sm:pb-[40px] md:pb-[57px]">
                    <motion.div
                        className="flex flex-col"
                        variants={itemVariants}
                    >
                        <h1 className="text-white text-[64px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-semibold -tracking-[2%] leading-[1] sm:leading-[1.1] md:leading-[1.2] xl:leading-[1]">
                            CONNECT
                        </h1>
                        <p className="max-w-[511px] mt-5 sm:mt-7 md:mt-10 font-aeonik font-normal text-[16px] sm:text-[18px] leading-[1.4] tracking-normal text-white">
                            Let's build a community rooted in faith,
                            encouragement, and God's purpose. Together, we can
                            make a difference!
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Socials />
                    </motion.div>
                </ContainerWrapper>
            </motion.div>
            <motion.div
                className="pt-[50px] sm:pt-[70px] md:pt-[90px] lg:pt-[106px] max-w-[905px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 sm:gap-8 md:gap-10">
                    {NavItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={item.link}>
                                <div className="text-[#070707] font-medium text-2xl sm:text-3xl md:text-4xl -tracking-[2%] hover:text-gray-600 transition-colors">
                                    {item.name}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                className="w-full h-[2px] bg-[#D8D8D8] my-[30px] sm:my-[35px] md:my-[42px] max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            />
            <ContainerWrapper className={"pb-[30px] sm:pb-[35px] md:pb-[42px]"}>
                <motion.div
                    className="text-[#070707] text-center text-[16px] sm:text-[18px] font-aeonik font-normal leading-[1.2] tracking-normal"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    © 2025 Copyright. AUSTIN UKPORHE
                </motion.div>
            </ContainerWrapper>
        </footer>
    );
}

export default Footer;
