import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import CustomButton from "./CustomButton";
import { SurmonsData } from "@/lib/Data";
import SurmonCard from "./SurmonCard";
import { motion } from "framer-motion";

function Surmons() {
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
        <section className="bg-[#070707] pt-[60px] sm:pt-[70px] md:pt-[84px] overflow-hidden">
            <div className="w-full flex flex-col max-w-[1440px] mx-auto">
                <ContainerWrapper
                    className={
                        "w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8"
                    }
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white font-semibold text-[64px] sm:text-[100px] md:text-[150px] lg:text-[200px] leading-[1] sm:leading-[1.1] md:leading-[1.2] -tracking-[2%]"
                    >
                        Surmons
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <CustomButton title={"See all Surmons"} />
                    </motion.div>
                </ContainerWrapper>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-[40px] sm:mt-[60px] md:mt-[78px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {SurmonsData.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <SurmonCard item={item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Surmons;
