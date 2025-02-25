import React from "react";
import InviteForm from "./InviteForm";
import ContainerWrapper from "./ContainerWrapper";
import { motion } from "framer-motion";

function SendEnvite() {
    return (
        <section className="w-full max-w-[1440px] mx-auto bg-[#F0F0F0] pb-[52px] overflow-hidden">
            <ContainerWrapper>
                <div className="grid grid-cols-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 md:col-span-5 pt-[40px] sm:pt-[55px] md:pt-[69px] relative"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-semibold text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[0.8] sm:leading-[0.9] md:leading-[1] lg:leading-[130px] tracking-[-2%] max-w-[344px] text-[#070707]"
                        >
                            SEND INVITE
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="hidden sm:block w-[40px] sm:w-[55px] md:w-[76px] h-[150px] sm:h-[200px] md:h-[253px] border-[3px] sm:border-[4px] md:border-[5px] border-[#EA413C] absolute top-[120px] sm:top-[150px] md:top-[196px] right-[20px] sm:right-[35px] md:right-[51px] z-10"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden sm:block w-full sm:w-[600px] md:w-[812px] h-[400px] sm:h-[600px] md:h-[772px] absolute -bottom-[52px] -left-[90px] -z-0"
                        >
                            <img
                                src="/images/invite/invite.png"
                                alt="send-invite"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="col-span-12 md:col-span-7 flex flex-col pt-[30px] sm:pt-[85px] md:pt-[115px] z-10"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-aeonik font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[1.3] sm:leading-[1.4] md:leading-[21.6px] tracking-[0%]  md:pr-[68px]"
                        >
                            My heart is set on sharing God's Word with clarity
                            and power, igniting revival, and equipping believers
                            for His purpose. If you'd like me to be part of your
                            gathering, I'd be delighted to partner with you to
                            see lives transformed and the kingdom of God
                            advanced.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="md:pl-[68px] mt-[30px] sm:mt-[40px] md:mt-[47px]"
                        >
                            <div className="p-[30px] sm:p-[40px] md:p-[53px] bg-[#070707]">
                                <InviteForm />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </ContainerWrapper>
        </section>
    );
}

export default SendEnvite;
