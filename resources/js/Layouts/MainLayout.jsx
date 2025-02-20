import Footer from "@/Components/Footer";
import React from "react";

function MainLayout({ children }) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default MainLayout;
