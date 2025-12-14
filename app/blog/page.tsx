"use client";

import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogPage() {
    return (
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
                <Navbar />
            </div>

            <main className="min-h-screen bg-white" style={{ paddingTop: '100px' }}>
                <Blog />
                <Footer />
            </main>
        </>
    );
}
