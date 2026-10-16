import { cacheLife } from "next/cache";

export async function getCurrentDate(): Promise<Date> {
  "use cache";
  cacheLife("hours");

  return new Date();
}