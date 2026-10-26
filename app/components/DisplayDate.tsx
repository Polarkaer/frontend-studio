// components/DisplayDate.tsx
"use client";

import { useClientDate } from "../hooks/useClientDate";
import { TimeUnit } from "@/lib/enums";

const datePartGetters: Partial<Record<TimeUnit, (date: Date) => number>> = {
  [TimeUnit.YEAR]: (date) => date.getFullYear(),
  [TimeUnit.MONTH]: (date) => date.getMonth() + 1,
  [TimeUnit.DAY]: (date) => date.getDate(),
  [TimeUnit.HOUR]: (date) => date.getHours(),
  [TimeUnit.SECOND]: (date) => date.getSeconds(),
  [TimeUnit.MILLISECOND]: (date) => date.getMilliseconds(),
};

export default function DisplayDate({
  unit = [TimeUnit.YEAR],
}: {
  unit?: TimeUnit[];
}) {
  const clientDate = useClientDate();

  if (!clientDate) return null;

  return (
    <>
      {unit.map((part) => {
        const value = datePartGetters[part]?.(clientDate);
        return value === undefined ? null : <span key={part}>{value} </span>;
      })}
    </>
  );
}
