import { CarTaxiFront, Home, ReceiptText, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

const expenses = [
  {
    icon: Utensils,
    name: "Groceries",
    by: "Maya",
    amount: "42.80",
    tone: "bg-[#a5f5cc] text-[#012d20]",
  },
  {
    icon: ReceiptText,
    name: "Electricity",
    by: "Sam",
    amount: "61.20",
    tone: "bg-[#ffe1b8] text-[#441606]",
  },
  {
    icon: CarTaxiFront,
    name: "Taxi home",
    by: "Maya",
    amount: "14.50",
    tone: "bg-[#bde0fa] text-[#0b2a46]",
  },
];

/** Illustrative app card shown in the hero (purely decorative, sample data). */
export default function AppPreview() {
  return (
    <div
      role="img"
      aria-label="Preview of a shared Home workspace listing recent expenses"
      className="w-full h-100 bg-primary/20 rounded-2xl flex items-center justify-center overflow-hidden p-6"
    >
      <div
        aria-hidden="true"
        className="w-full max-w-xs space-y-4 rounded-3xl bg-background p-5 shadow-lg ring-1 ring-black/5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Home className="size-4" />
            Home
          </div>
          <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
            2 members
          </span>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">This month</p>
          <p className="text-3xl font-semibold tracking-tight">118.50</p>
        </div>

        <ul className="space-y-1">
          {expenses.map(({ icon: Icon, name, by, amount, tone }, index) => (
            <li
              key={name}
              className={cn("flex items-center gap-3 rounded-xl bg-muted p-2.5",
              index===0&&"rounded-b-sm",
              index===1&&"rounded-sm",
              index===2&&"rounded-t-sm",)}
            >
              <span
                className={cn(
                  "grid size-9 place-items-center rounded-full",
                  tone,
                )}
              >
                <Icon className="size-4" />
              </span>
              <span className="flex-1 leading-tight">
                <span className="block text-sm font-medium">{name}</span>
                <span className="block text-xs text-muted-foreground">
                  Added by {by}
                </span>
              </span>
              <span className="text-sm font-semibold tabular-nums">
                {amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
