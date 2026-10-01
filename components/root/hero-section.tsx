import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";

export default function HeroSection() {
    return (
        <section
            id={"home"}
            className={
                "pt-20 md:pt-0 px-4 relative min-h-screen flex flex-col justify-center overflow-hidden"
            }
        >
            <div
                className={cn(
                    "flex flex-col md:flex-row items-center justify-center gap-8",
                )}
            >
                <Heading/>
                <div
                    className={
                        "w-full h-100 bg-primary/20 rounded-2xl flex items-center justify-center"
                    }
                >
                    IMAGE
                </div>
            </div>
        </section>
    );
}

function Heading() {
    return (
        <div className={"flex flex-col text-center md:text-left gap-2"}>
            <h1
                aria-hidden="true"
                className="font-extrabold leading-none tracking-wide text-5xl"
                // style={{
                //     fontSize: "clamp(38px, 100vw, 58px)",
                //     animation: "fadeUp 0.7s 0.1s ease both",
                // }}
            >
                Track spending together,
                <br/>
                <span className={"text-primary"}>stay in control</span>
            </h1>

            <p className="text-gray-600 leading-relaxed text-xl">
                Log expenses in seconds, sort them by category, and share a workspace
                with family, roommates or travel buddies. You decide who can view, edit
                or manage.
            </p>

            {/*Buttons*/}
            <div
                className={
                    "mt-4 flex flex-row gap-2 items-center justify-center md:justify-start"
                }
            >
                <Button size={"lg"}>
                    <Download/>
                    Download the App
                </Button>

                <Button size={"lg"} variant={"secondary"} className={"bg-primary/20"}>
                    See how it works
                </Button>
            </div>
        </div>
    );
}
