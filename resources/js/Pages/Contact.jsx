import SendEnvite from "@/Components/SendEnvite";
import { Head } from "@inertiajs/react";
import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import ContainerWrapper from "@/Components/ContainerWrapper";
import Navbar from "@/Components/Navbar";

function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />
            <div className="w-full bg-[#F0F0F0] pt-[34px]">
                <ContainerWrapper>
                    <Navbar color="[#070707]" />
                </ContainerWrapper>
                <section className="mt-[66px] mb-[120px]">
                    <SendEnvite />
                </section>
            </div>
        </MainLayout>
    );
}

export default Contact;
