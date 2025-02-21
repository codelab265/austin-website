import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import Navbar from "./Navbar";
import { AuthorText, CirclesData, Herotext } from "@/lib/Data";
import GradientText from "./GradientText";

function Hero() {
    return (
        <section className="w-full bg-[#070707]">
            <div className="w-full max-w-[1440px] mx-auto h-[932px] bg-[url('/images/hero.png')] bg-cover bg-center overflow-hidden relative flex flex-col">
                <ContainerWrapper className="w-full relative top-[39px] z-50">
                    <Navbar />
                    <GradientText
                        text={Herotext}
                        className="top-[163px] left-[78px]"
                    />
                </ContainerWrapper>
                <ContainerWrapper className="z-50 w-full mt-[177px]">
                    <div className="w-full flex justify-between">
                        <div className="relative">
                            <h1 className="uppercase font-medium text-[60px] tracking-[-0.5%] text-[#EA413C] pl-[144px] flex items-center">
                                THE
                            </h1>
                            <h1 className="uppercase font-bold text-[300px] text-white -mt-[70px] leading-none flex items-center z-10">
                                <span>BR</span>
                                <span className="blur-[1px]">I</span>
                                <span className="blur-[2px]">D</span>
                                <span className="blur-[4px]">G</span>
                                <span className="blur-[6px]">E</span>
                            </h1>
                            <img
                                src="/images/hero/bridge.png"
                                className="object-contain -mt-[100px] ml-10"
                                alt="Bridge"
                            />
                        </div>
                        <div className="z-50 pt-5">
                            <div className="font-light text-[36px] leading-[40px] -tracking-[2%] text-right w-[135px] text-wrap text-[#393939]">
                                Son Servant Soldier Steward Husband father God
                                Chaser Author Lead Pastor, RCNLagos
                            </div>
                        </div>
                    </div>
                </ContainerWrapper>
                <div className="w-[932px] h-[932px] absolute top-0 left-0 bg-[linear-gradient(-90deg,rgba(7,7,7,0)_0%,#070707_52.9%)]" />
                {CirclesData.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={`Circle ${index + 1}`}
                        className={item.className}
                    />
                ))}
                <img
                    src="/images/hero/rev.png"
                    className="absolute left-0 bottom-0"
                    alt="Rev"
                />
                <div className="w-full h-full absolute bg-black/70 z-0" />
                <div className="absolute w-full max-w-[1260px] mx-auto left-1/2 -translate-x-1/2 bottom-[35px] z-10">
                    <div className="font-normal text-[96px] leading-[115.2px] tracking-[-0.02em] text-[#393939] text-right">
                        AUSTIN UKPORHE
                    </div>
                </div>
                <GradientText
                    text={AuthorText}
                    className="bottom-0 right-0 w-[604px] text-justify"
                />
            </div>
        </section>
    );
}

export default Hero;
