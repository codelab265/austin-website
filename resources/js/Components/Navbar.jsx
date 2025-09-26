import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

function Navbar({ color = "#fff" }) {
    const NavItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Itinerary",
            link: "/itinerary",
        },
        {
            name: "Publications",
            link: "/publications",
        },

        {
            name: "Blog",
            link: "/blog",
        },

        {
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <nav className="w-full bg-transparent flex items-center justify-between z-50">
            <div className="flex items-center gap-4">
                <div className="size-8 rounded-full bg-[#EA413C]" />
                <Link
                    href="/"
                    className={`text-${color} text-[36px] leading-[43.2px] -tracking-[0.5%] font-medium`}
                >
                    AUSTIN UKPORHE
                </Link>
            </div>
            <Sheet>
                <SheetTrigger>
                    <div className="px-4 py-2">
                        {color === "white" ? (
                            <img
                                src="/images/menu.png"
                                className="w-[38px] h-[19px]"
                                alt="menu"
                            />
                        ) : (
                            <img
                                src="/images/menu-black.png"
                                className="w-[38px] h-[19px]"
                                alt="menu"
                            />
                        )}
                    </div>
                </SheetTrigger>
                <SheetContent className="bg-[#070707] text-white">
                    <SheetHeader>
                        <SheetTitle className="text-red-500 text-[36px] leading-[43.2px] -tracking-[0.5%] font-medium">
                            Menu
                        </SheetTitle>
                        <SheetDescription>
                            <motion.div
                                className="text-white"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex flex-col  gap-6">
                                    {NavItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                            className="border-b border-[#333333] pb-4"
                                        >
                                            <Link href={item.link} prefetch>
                                                <div className="text-white font-medium text-2xl sm:text-3xl -tracking-[2%] hover:text-gray-600 transition-colors">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export default Navbar;
