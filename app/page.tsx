import AppNavBar from "@/components/root/app-nav-bar";
import HeroSection from "@/components/root/hero-section";
import Features from "@/components/root/features";
import HowItWorks from "@/components/root/how-it-works";
import GetApp from "@/components/root/get-app";

export default function Home() {
    return (
        <div className={"min-h-dvh relative overflow-x-hidden max-w-7xl mx-auto"}>
            <AppNavBar/>

            <main className={"flex flex-col gap-24 pb-32"}>
                <HeroSection/>
                <Features/>
                <HowItWorks/>
                <GetApp/>
            </main>
        </div>
    );
}
