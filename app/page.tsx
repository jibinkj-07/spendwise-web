import AppNavBar from "@/components/root/app-nav-bar";
import HeroSection from "@/components/root/hero-section";
import Features from "@/components/root/features";

export default function Home() {
    return (
        <div className={"min-h-dvh relative scroll-smooth overflow-x-hidden max-w-7xl mx-auto"}>
            <AppNavBar/>

            <main>
                <HeroSection/>
                <Features/>
            </main>
        </div>
    );
}
