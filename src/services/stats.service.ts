import { redis } from "@/database/redis";
import { createStatsKey } from "@/lib/keys";

export async function incrementTotal() {
  const key = createStatsKey("views");
  const total = await redis.incr(key);

  return total;
}

export async function getTotal() {
  const key = createStatsKey("views");
  const total = redis.get<number>(key);

  return total ?? 0;
}
