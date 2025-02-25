import Hero from "@/Components/Hero";
import Commission from "@/Components/Commission";
import Itinerary from "@/Components/Itinerary";
import Surmons from "@/Components/Surmons";
import Testimonies from "@/Components/Testimonies";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Book from "@/Components/Book";
import SendEnvite from "@/Components/SendEnvite";

function Welcome() {
    return (
        <MainLayout>
            <Head title="Welcome" />
            <Hero />
            <Commission />
            <Book />
            <Surmons />
            <Itinerary />
            <SendEnvite />
            <Testimonies />
        </MainLayout>
    );
}

export default Welcome;
