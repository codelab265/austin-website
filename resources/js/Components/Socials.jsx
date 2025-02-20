import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const socials = [
    {
        name: "Youtube",
        link: "https://www.youtube.com/connectwithgodministries",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/connectwithgodministries",
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/connectwithgodministries",
    },
    {
        name: "X",
        link: "https://www.twitter.com/connectwithgodmin",
    },
    {
        name: "Email",
        link: "https://www.connectwithgodministries.com/contact",
    },
    {
        name: "Phone",
        link: "https://www.connectwithgodministries.com/contact",
    },
];

function Socials() {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
            {socials.map((social, index) => (
                <motion.div
                    key={social.name}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <motion.div
                        className="flex items-center justify-between group"
                        whileHover={{ scale: 1.02 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] leading-[1.2] tracking-[-2%] transition-colors hover:text-gray-300"
                        >
                            {social.name}
                        </a>
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: -45 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#404040] -rotate-45 group-hover:text-white transition-colors" />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="w-full h-[1px] bg-[#D8D8D8]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default Socials;
