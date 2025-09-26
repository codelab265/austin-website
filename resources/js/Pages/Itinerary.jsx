import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import ContainerWrapper from "@/Components/ContainerWrapper";
import Itinerary from "@/Components/Itinerary";
import SendEnvite from "@/Components/SendEnvite";

function ItineraryPage() {
    return (
        <MainLayout>
            <Head title="Itinerary" />
            <div className="w-full bg-white pt-[34px]">
                <ContainerWrapper>
                    <Navbar color="[#070707]" />
                </ContainerWrapper>
                <section className="mt-[178px]  max-w-[710px] mx-auto relative">
                    <h1 className="text-[250px] leading-[150px] text-[#070707] font-sans uppercase font-semibold text-center">
                        Itinerary
                    </h1>
                    <p className="text-[100px] text-[#EA413C] font-monoline absolute -rotate-[9.8deg] top-[74px]  left-[121px]">
                        Overview
                    </p>
                </section>
                <section className="mt-[66px] mb-[285px]">
                    <Itinerary />
                </section>
                <section className="mb-[120px]">
                    <SendEnvite />
                </section>
            </div>
        </MainLayout>
    );
}

export default ItineraryPage;
