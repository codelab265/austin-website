import Itinerary from "@/Components/Itinerary";
import Testimonies from "@/Components/Testimonies";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Welcome() {
    return (
        <MainLayout>
            <Head title="Welcome" />
            <Itinerary />
            <Testimonies />
        </MainLayout>
    );
}

export default Welcome;
