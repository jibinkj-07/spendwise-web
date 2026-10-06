import React, { JSX } from "react";

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
        "px-4 relative min-h-screen flex flex-col justify-center overflow-hidden"
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

      {steps.map((step, index) => (
        <Tile
          key={index}
          step={index + 1}
          title={step.title}
          description={step.description}
        />
      ))}
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
    <div className={"p-4 bg-muted"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
