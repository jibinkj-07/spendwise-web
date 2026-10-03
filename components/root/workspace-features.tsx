import { ChevronDown, Check, Home, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

export default function WorkspaceFeature() {
  return (
    <div className={"space-y-3"}>
      <p className="max-w-lg text-[15px] leading-6">
        Keep your home, trips and projects separate while managing them all from
        one account.
      </p>

      {/* Workspace switcher */}
      <div className="w-full">
        <div className="overflow-hidden rounded-2xl bg-white/80 p-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
          {/* Current workspace */}
          <div className="flex items-center justify-between rounded-xl px-3 py-2.5">
            <div>
              <p className="text-[11px] font-medium text-black/45">Workspace</p>

              <div className="mt-0.5 flex items-center gap-2">
                <Home className="size-4" />

                <span className="text-sm font-semibold">Home</span>
              </div>
            </div>

            <ChevronDown className="size-4 text-black/40" aria-hidden="true" />
          </div>

          <div className="my-1 h-px bg-black/5" />

          <WorkspaceItem icon={UsersRound} name="Family Budget" selected />
        </div>
      </div>
    </div>
  );
}

type WorkspaceItemProps = {
  icon: React.ElementType;
  name: string;
  selected?: boolean;
};

function WorkspaceItem({
  icon: Icon,
  name,
  selected = false,
}: WorkspaceItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl px-3 py-2.5",
        "transition-colors",
        selected
          ? "bg-[#fbcdcd] text-[#420d0d]"
          : "text-black/65 hover:bg-black/5",
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="size-4" aria-hidden="true" />

        <span className="text-sm font-medium">{name}</span>
      </div>

      {selected && (
        <Check className="size-4" strokeWidth={2.5} aria-hidden="true" />
      )}
    </div>
  );
}
