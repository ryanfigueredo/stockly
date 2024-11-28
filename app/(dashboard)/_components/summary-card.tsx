import { Skeleton } from "@/app/_components/ui/skeleton";
import { ReactNode } from "react";

export const SummaryCardIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-slate-500 bg-opacity-10 text-slate-500">
      {children}
    </div>
  );
};

export const SummaryCardTitle = ({ children }: { children: ReactNode }) => {
  return <p className="text-sm font-medium text-slate-500">{children}</p>;
};

export const SummaryCardValue = ({ children }: { children: ReactNode }) => {
  return <p className="text-2xl font-semibold text-slate-900">{children}</p>;
};

export const SummaryCard = ({ children }: { children: ReactNode }) => {
  return <div className="rounded-xl bg-white p-6">{children}</div>;
};

export const SummaryCardSkeleton = () => {
  return (
    <Skeleton className="bg-white bg-opacity-75 p-6">
      <div className="space-y-2">
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-20 w-[86.26px]" />
        <Skeleton className="h-8 w-48" />
      </div>
    </Skeleton>
  );
};
