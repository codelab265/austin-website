import Itinerary from "@/Components/Itinerary";
import Surmons from "@/Components/Surmons";
import Testimonies from "@/Components/Testimonies";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Welcome() {
    return (
        <MainLayout>
            <Head title="Welcome" />
            <Surmons />
            <Itinerary />
            <Testimonies />
        </MainLayout>
    );
}

export default Welcome;
