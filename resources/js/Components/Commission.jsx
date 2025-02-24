import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

function Commission() {
    return (
        <section className="bg-white flex flex-col w-full pb-[80px] sm:pb-[100px] md:pb-[135px]">
            <ContainerWrapper
                className={
                    "pt-[60px] sm:pt-[80px] md:pt-[108px] px-4 sm:px-8 md:px-[100px] lg:px-[168px] w-full"
                }
            >
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="w-full flex items-center gap-3 sm:gap-5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-[40px] sm:w-[73px] h-[1px] bg-[#C6C6C6]" />
                        <h2 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2] sm:leading-[55px] tracking-[-0.02em] text-[#B5B5B5]">
                            My Commission
                        </h2>
                    </motion.div>

                    <motion.div
                        className="max-w-[801px] font-semibold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] leading-[1.1] sm:leading-[1.2] md:leading-[55px] tracking-[-0.2%] text-[#070707] mt-4 sm:mt-6 md:mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        For this reason, I've called you; that you may judge the
                        pharaoh of your generation and kill the Herods, that my
                        people will receive their inheritance.{" "}
                        <motion.span
                            className="text-[#EA413C]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            As for you, your call is for war.
                        </motion.span>
                    </motion.div>

                    <motion.div
                        className="font-aeonik font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[1.3] sm:leading-[21.6px] tracking-normal max-w-[300px] sm:max-w-[450px] md:max-w-[581px] text-[#060606] mt-3 sm:mt-4 md:mt-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Rev Austin Ukporhe was raised in the Northern city of
                        Sokoto; trained in the peculiar firebrand evangelism of
                        Nigeria's Christian North and was ordained as a Pastor
                        in 2001.
                    </motion.div>

                    <motion.div
                        className="mt-[20px] sm:mt-[25px] md:mt-[31px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <CustomButton title={"Read More"} />
                    </motion.div>
                </motion.div>
            </ContainerWrapper>

            <div className="w-full relative flex justify-end mt-[50px] sm:mt-[80px] md:mt-[100px]">
                <motion.div
                    className="w-full md:w-[55%] h-[300px] sm:h-[400px] md:h-[579px] relative"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/images/commission/1.png"
                        alt="commission"
                        className="h-full w-full object-cover"
                    />
                    <motion.div
                        className="size-[80px] sm:size-[120px] md:size-[167px] bg-transparent border-[3px] sm:border-[4px] md:border-[6px] border-[#EA413C] left-[150px] sm:left-[200px] md:left-[290px] -top-[25px] sm:-top-[35px] md:-top-[55px] absolute"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4,
                            type: "spring",
                            stiffness: 200,
                        }}
                    />
                </motion.div>

                <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
                    <motion.img
                        src="/images/commission/2.png"
                        alt="commission"
                        className="w-[280px] sm:w-[400px] md:w-[564px] h-auto z-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 100,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Commission;
