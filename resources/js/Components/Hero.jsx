import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import Navbar from "./Navbar";
import { AuthorText, CirclesData, Herotext } from "@/lib/Data";
import GradientText from "./GradientText";

function Hero() {
    return (
        <section className="w-full bg-[#070707]">
            <div className="w-full max-w-[1440px] mx-auto min-h-screen sm:h-[932px] bg-[url('/images/hero.png')] bg-cover bg-center  overflow-hidden relative flex flex-col">
                {/* Circular Cutout Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div
                        className="absolute inset-0 bg-black"
                        style={{
                            mask: "radial-gradient(circle at center, transparent 250px, black 400px)",
                            WebkitMask:
                                "radial-gradient(circle at center, transparent 250px, black 400px)",
                            "@media (min-width: 640px)": {
                                mask: "radial-gradient(circle at center, transparent 350px, black 400px)",
                                WebkitMask:
                                    "radial-gradient(circle at center, transparent 350px, black 400px)",
                            },
                        }}
                    />
                </div>

                {/* Content */}
                <ContainerWrapper className="w-full relative top-[20px] sm:top-[39px] z-50">
                    <Navbar />
                    <div className="absolute top-[100px] sm:top-[163px] left-4 sm:left-[78px] max-w-[300px] sm:max-w-[450px] md:max-w-[604px] text-justify z-0">
                        <div className="bg-[linear-gradient(290deg,rgba(255,255,255,0)_13.25%,rgba(255,255,255,0.8)_100%)] bg-clip-text text-transparent opacity-30 text-[12px] sm:text-[14px] leading-[1.2] line-clamp-6 md:line-clamp-none">
                            {Herotext}
                        </div>
                    </div>
                </ContainerWrapper>
                <ContainerWrapper className="z-40 w-full mt-[270px] lg:mt-[177px]">
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0">
                        <div className="relative">
                            <h1 className="uppercase font-medium text-[40px] sm:text-[50px] md:text-[60px] tracking-[-0.5%] text-[#EA413C] pl-4 sm:pl-[100px] md:pl-[144px] flex items-center">
                                THE
                            </h1>
                            <h1 className="uppercase font-bold text-[100px] sm:text-[200px] md:text-[250px] lg:text-[300px] text-white -mt-[30px] sm:-mt-[50px] md:-mt-[70px] leading-none flex items-center">
                                <span>BR</span>
                                <span className="blur-[1px]">I</span>
                                <span className="blur-[2px]">D</span>
                                <span className="blur-[4px]">G</span>
                                <span className="blur-[6px]">E</span>
                            </h1>
                            <img
                                src="/images/hero/bridge.png"
                                className="object-contain -mt-[50px] sm:-mt-[70px] md:-mt-[100px] ml-2 sm:ml-6 md:ml-10 z-50 w-[80%] sm:w-[90%] md:w-full"
                                alt="Bridge"
                            />
                        </div>
                        <div className="z-20 pt-0 sm:pt-5">
                            <div className="font-light text-[24px] sm:text-[30px] md:text-[36px] leading-[1.2] -tracking-[2%] text-center sm:text-right w-full sm:w-[135px] text-wrap text-[#747373] md:text-[#393939]">
                                Son Servant Soldier Steward Husband father God
                                Chaser Author Lead Pastor, RCNLagos
                            </div>
                        </div>
                    </div>
                </ContainerWrapper>

                <img
                    src="/images/hero/rev.png"
                    className="absolute left-0 bottom-0 z-20 w-[200px] sm:w-[400px] lg:w-auto"
                    alt="Rev"
                />
                <div className="w-full h-full absolute bg-black/70 z-0" />
                <div className="absolute w-full max-w-[90%] sm:max-w-[1260px] mx-auto left-1/2 -translate-x-1/2 bottom-[15px] sm:bottom-[35px] z-20">
                    <div className="font-normal text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-[1.2] tracking-[-0.02em] text-[#393939] text-right">
                        AUSTIN UKPORHE
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[250px] sm:w-[450px] lg:w-[604px] text-justify z-10 px-4 sm:px-0">
                    <div className="bg-[linear-gradient(290deg,rgba(255,255,255,0.1)_13.25%,rgba(255,255,255,0.7)_100%)] bg-clip-text text-transparent opacity-30 text-[12px] sm:text-[14px] leading-[1.2] line-clamp-5 md:line-clamp-none">
                        {AuthorText}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
