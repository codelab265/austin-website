import ContainerWrapper from "@/Components/ContainerWrapper";
import Navbar from "@/Components/Navbar";
import SendEnvite from "@/Components/SendEnvite";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { motion } from "framer-motion";

function About() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <MainLayout>
            <Head title="About Us" />
            <div className="bg-[#070707]">
                {/* Hero Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-screen bg-[#070707]"
                >
                    <ContainerWrapper className="pt-[34px]">
                        <Navbar color="white" />
                    </ContainerWrapper>
                </motion.section>

                {/* Story Section 1 */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-[#070707] py-8 sm:py-12 lg:py-16"
                >
                    <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-12 gap-[35px] lg:gap-[70px] px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-span-1 lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-center"
                        >
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-[#fff] text-base sm:text-lg leading-[120%] sm:leading-[100%] tracking-normal font-aeonik max-w-[490px]"
                            >
                                In 2015, my life was at a crossroads. My
                                business was struggling, and ministry had taken
                                a back seat. In the middle of that storm, my
                                younger brother shared with me the messages of
                                Apostle Arome Osayi, believing I needed stronger
                                spiritual covering and fathering than I was
                                receiving at the time.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-[#fff] text-base sm:text-lg leading-[120%] sm:leading-[100%] tracking-normal font-aeonik max-w-[490px]"
                            >
                                The first message I played was titled Staying
                                Power. Before long, I was hearing Apostle
                                praying fervently in tongues, and something in
                                me came alive. I was captivated. I remember
                                asking myself, Who is this man? Where is he
                                from? He reminded me so much of my church days
                                in Sokoto, and I felt right at home. That day, I
                                listened to the same message multiple times and
                                eventually got his contact.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[#fff] text-base sm:text-lg leading-[120%] sm:leading-[100%] tracking-normal font-aeonik max-w-[490px]"
                            >
                                For six months, we chatted before finally
                                meeting. The very first thing Apostle said to me
                                was, "When are you going to start what God has
                                called you to do?" That marked a turning point.
                                Soon after, he began to hold in-door Bible
                                studies with me and my wife, Pastor Grace,
                                alongside Pastor Victor and his wife, Motunrayo,
                                and Pastor Abbey. We would meet twice a week,
                                studying the Word, praying deeply, and sharing
                                meals late into the night.
                            </motion.p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="col-span-1 lg:col-span-7 relative flex justify-center lg:justify-end"
                        >
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-[157px] sm:w-[236px] lg:w-[315px] z-10"
                                src="/images/about/name.png"
                                alt="Austin"
                            />
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="w-[228px] sm:w-[342px] lg:w-[457px] h-[335px] sm:h-[503px] lg:h-[671px]"
                            >
                                <img
                                    src="/images/about/austin.png"
                                    alt="Austin"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </ContainerWrapper>
                </motion.section>

                {/* Passion Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-[#070707] pt-[32px] sm:pt-[48px] lg:pt-[65px]"
                >
                    <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-12 gap-[38px] lg:gap-[76px] px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-span-1 lg:col-span-7 order-2 lg:order-1"
                        >
                            <img
                                src="/images/about/passion.png"
                                alt="Passion"
                                className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="col-span-1 lg:col-span-5 flex items-center relative order-1 lg:order-2"
                        >
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "216px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="hidden lg:block w-[216px] h-[3px] bg-[#EA413C] absolute top-[144px] -left-[170px]"
                            />
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-[#EA413C] text-[28px] sm:text-[40px] lg:text-[55px] leading-[35px] sm:leading-[45px] lg:leading-[55px] -tracking-[2%] max-w-[402px] font-semibold mt-5 sm:mt-8 lg:mt-10"
                            >
                                Apostle's passion for me to fulfill God's call
                                was evident.
                            </motion.h2>
                        </motion.div>
                    </ContainerWrapper>
                </motion.section>

                {/* Story Section 2 */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-[#070707] pt-[32px] sm:pt-[48px] lg:pt-[65px] pb-[50px] sm:pb-[75px] lg:pb-[101px]"
                >
                    <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[80px] px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-span-1 lg:col-span-6 relative order-2 lg:order-1"
                        >
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                src="/images/about/austin-2.png"
                                alt="Austin"
                                className="w-full max-w-[170px] sm:max-w-[255px] lg:max-w-[340px] absolute right-0 top-[61px] sm:top-[91px] lg:top-[122px]"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="col-span-1 lg:col-span-6 flex flex-col gap-6 sm:gap-8 order-1 lg:order-2"
                        >
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[#fff] text-base sm:text-lg leading-[120%] sm:leading-[100%] tracking-normal font-aeonik max-w-[490px]"
                            >
                                In fact, when a group of us decided to host our
                                first summit under the name Global Intercessors
                                Network in 2014, it was Apostle who gave us the
                                ₦45,000 we used to secure the venue — and he
                                still paid me an honorarium afterward. I was
                                deeply moved by his selflessness. Not long
                                after, as we sought to formally register Global
                                Intercessors Network, the Lord instructed us to
                                abandon it and align fully with the vision He
                                had already given Apostle — to teach, train, and
                                equip a generation. We obeyed joyfully, and I
                                have never looked back.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-[#fff] text-base sm:text-lg leading-[120%] sm:leading-[100%] tracking-normal font-aeonik max-w-[490px]"
                            >
                                During one of those intimate Bible study
                                sessions, Apostle prayed over me and laid the
                                mantle of leadership for Remnant Christian
                                Network (RCN) Lagos. Though RCN Lagos takes its
                                bearing from RCN Makurdi, its rhythm, growth,
                                and expression have been uniquely organic.
                                Apostle Arome never sought to clone ministries
                                or personalities, but instead taught us to serve
                                God's vision according to the uniqueness of our
                                territory.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="text-[#fff] text-base sm:text-lg leading-[120%] sm:leading-[100%] tracking-normal font-aeonik max-w-[490px]"
                            >
                                Today, RCN Lagos is a response to the burdens of
                                our generation. I am humbled to serve as its
                                leader, raising men and women who will stand
                                firm in their calling and advance the kingdom of
                                God.
                            </motion.p>
                        </motion.div>
                    </ContainerWrapper>
                </motion.section>

                {/* Mission Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-[#fff] py-[65px] sm:py-[98px] lg:py-[131px]"
                >
                    <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[80px] px-4 sm:px-6 lg:px-8">
                        <div className="col-span-1 lg:col-span-6"></div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-span-1 lg:col-span-6"
                        >
                            <motion.h2 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-[100px] sm:text-[150px] lg:text-[200px] leading-[80px] sm:leading-[120px] lg:leading-[150px] -tracking-[2%] font-semibold text-[#EA413C] mr-0 sm:mr-[61px] lg:mr-[123px]"
                            >
                                MISSION
                            </motion.h2>
                        </motion.div>
                    </ContainerWrapper>
                    <ContainerWrapper className="flex flex-col items-center mt-[29px] sm:mt-[43px] lg:mt-[58px] px-4 sm:px-6 lg:px-8">
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-[#070707] text-base sm:text-lg leading-[120%] sm:leading-[100%] tracking-normal font-aeonik max-w-[732px] text-center"
                        >
                            My mission is to faithfully proclaim the Word of God
                            with clarity and power, bringing men and women into
                            living encounters with Christ. Igniting revival in
                            the hearts of believers, awakening passion for God,
                            and raising an army of intercessors who will stand
                            as watchmen over their families, churches, and
                            nations. Through teaching, discipleship, and prayer,
                            I seek to equip believers to walk in their divine
                            calling, exercise their spiritual authority, and
                            advance the kingdom of God in every sphere of
                            influence. My desire is to see a generation
                            strengthened, healed, and aligned with God's eternal
                            purpose.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col mt-[41px] sm:mt-[62px] lg:mt-[83px] w-full max-w-[732px]"
                        >
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3 sm:gap-5 lg:gap-7"
                            >
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "73px" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    className="w-[73px] h-[2px] bg-[#C6C6C6]"
                                />
                                <h2 className="text-[#c6c6c6] text-[20px] sm:text-[26px] lg:text-[32px] leading-[30px] sm:leading-[42px] lg:leading-[55px] -tracking-[2%] font-semibold uppercase">
                                    MY COMMISSION
                                </h2>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="text-[28px] sm:text-[40px] lg:text-[55px] leading-[35px] sm:leading-[45px] lg:leading-[55px] -tracking-[2%] font-semibold text-[#070707] mt-1"
                            >
                                For this reason, I've called you; that you may
                                judge the pharaoh of your generation and kill
                                the Herods, that my people will receive their
                                inheritance.{" "}
                                <span className="text-[#EA413C]">
                                    As for you, your call is for war.{" "}
                                </span>
                            </motion.div>
                        </motion.div>
                    </ContainerWrapper>
                </motion.section>

                {/* Send Invite Section */}
                <motion.section 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full bg-[#fff] pb-[60px] sm:pb-[90px] lg:pb-[120px]"
                >
                    <SendEnvite />
                </motion.section>
            </div>
        </MainLayout>
    );
}

export default About;
