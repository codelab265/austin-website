import ContainerWrapper from "@/Components/ContainerWrapper";
import Navbar from "@/Components/Navbar";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import BlogPostLeft from "@/Components/BlogPostLeft";
import BlogPostRight from "@/Components/BlogPostRight";
import { BlogData } from "@/lib/Data";
import { motion } from "framer-motion";

function Blog() {
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
            <Head title="Blog" />
            <div className="w-full bg-white pt-[34px] pb-[133px]">
                <ContainerWrapper>
                    <Navbar color="[#070707]" />
                </ContainerWrapper>
                <div className="flex justify-end">
                    <div className="w-full max-w-[1160px] px-4 sm:px-6 lg:px-8">
                        <motion.section 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-[115px] w-full max-w-[661px]"
                        >
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[48px] sm:text-[64px] lg:text-[96px] leading-[40px] sm:leading-[56px] lg:leading-[80px] text-[#EA413C] font-sans uppercase font-semibold -tracking-[2%]"
                            >
                                Reflections of Faith, Fuel for the Journey.
                            </motion.h1>
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col sm:flex-row mt-[37px] gap-[30px] items-start sm:items-center"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="size-[80px] sm:size-[100px] lg:size-[115px] rounded-full overflow-hidden flex-shrink-0"
                                >
                                    <img
                                        src="/images/blog/elv.png"
                                        alt="blog"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.p 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="text-base sm:text-lg leading-[120%] sm:leading-[100%] text-[#070707] font-aeonik font-normal tracking-normal"
                                >
                                    A space where I share faith-filled insights,
                                    reflections on Scripture, and lessons from
                                    my journey with God to strengthen and
                                    inspire your walk.
                                </motion.p>
                            </motion.div>
                        </motion.section>
                    </div>
                </div>
                <motion.section 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-[133px] flex flex-col gap-[80px] sm:gap-[100px] lg:gap-[115px] px-4 sm:px-6 lg:px-8"
                >
                    {BlogData.map((item, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                        >
                            {index % 2 === 0 ? (
                                <BlogPostLeft
                                    title={item.title}
                                    description={item.description}
                                />
                            ) : (
                                <BlogPostRight
                                    title={item.title}
                                    description={item.description}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.section>
            </div>
        </MainLayout>
    );
}

export default Blog;
