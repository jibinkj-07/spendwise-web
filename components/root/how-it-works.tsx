import React from "react";
import {cn} from "@/lib/utils";

const steps = [
  {
    title: "Create a workspace",
    description: "Name it after your household, trip or team.",
  },
  {
    title: "Invite your people",
    description: "Send a link and choose Admin, Editor or Viewer.",
  },
  {
    title: "Track together",
    description: "Everyone adds expenses, and the totals stay in sync.",
  },
];
export default function HowItWorks() {
  return (
    <section
      id={"works"}
      className={
        "px-4 relative flex flex-col justify-center gap-24 overflow-hidden"
      }
    >
      <div>
        <h2 className={"text-3xl font-semibold"}>
          Up and running in three steps
        </h2>
        <p className={"text-gray-700"}>
          No setup headaches. Start tracking in under a minute.
        </p>
      </div>

      <div className={"grid md:grid-cols-3 gap-2"}>
        {steps.map((step, index) => (
          <Tile
            key={index}
            step={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

type TileProps = {
  title: string;
  description: string;
  step: number;
};
function Tile({ title, description, step }: TileProps) {
  return (
    <div className={cn("p-6 flex flex-col justify-center gap-2 bg-muted",
       step === 1&& "rounded-t-4xl rounded-b-sm md:rounded-l-4xl md:rounded-r-sm",
       step === 2&& "rounded-sm",
       step === 3&& "rounded-b-4xl rounded-t-sm md:rounded-r-4xl md:rounded-l-sm",

        )}>
        <p className={"text-5xl mb-3 text-muted-foreground"}>{step}</p>
      <h2 className={"text-2xl font-medium"}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
