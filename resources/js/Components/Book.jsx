import React from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import ContainerWrapper from "./ContainerWrapper";

function Book() {
    return (
        <section className="max-w-[1440px] mx-auto bg-white relative pb-[80px] sm:pb-[120px] md:pb-[201px]">
            <ContainerWrapper className="w-full flex flex-col overflow-hidden">
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
                            MY BOOK
                        </h2>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-semibold text-[64px] sm:text-[120px] md:text-[140px] lg:text-[200px] leading-[1] tracking-[-0.02em] mt-1"
                >
                    THE FIELD OF BOAZ
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] sm:gap-[50px] md:gap-[68.33px] mt-5 sm:mt-8 md:mt-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full space-y-6 sm:space-y-8 md:space-y-10 relative h-[454px] md:h-auto"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.3] sm:leading-[1.4] tracking-normal font-aeonik"
                        >
                            My journey from sin to salvation is skillfully
                            interwoven with the narrative of Ruth from the
                            Bible. Through this stirring account of a sinful
                            past, heartfelt conversion, and the pursuit of God's
                            will for marriage, this book reveals a timeless
                            truth: no matter your past, redemption and divine
                            guidance for a fulfilling marriage are within reach
                            for everyone.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <CustomButton title={"PURCHASE BOOK"} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.7,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="border-[3px] sm:border-[4px] md:border-[5px] border-[#EA413C] size-[50px] sm:size-[60px] md:size-[73px] bg-transparent absolute bottom-[50px] sm:bottom-[60px] md:bottom-[71px] right-[180px] sm:right-[220px] md:right-[252px] z-10"
                        />
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            src="/images/book/book.png"
                            className="absolute bottom-[5px] sm:bottom-[25px] md:bottom-[34px] right-[50px] sm:-right-[100px] md:-right-[120px] w-[150px] sm:w-[180px] md:w-auto"
                        />
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            src="/images/book/2.png"
                            alt="book"
                            className="absolute -bottom-[40px] sm:-bottom-[50px] md:-bottom-[68px] -left-[60px] sm:-left-[75px] md:-left-[90px] w-[220px] sm:w-[150px] md:w-auto"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="w-full h-[400px] sm:h-[600px] md:h-[754px]"
                    >
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src="/images/book/1.png"
                            alt="book"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </ContainerWrapper>
        </section>
    );
}

export default Book;
