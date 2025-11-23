export const prerender = false;

import type { APIRoute } from "astro";

import { redis } from "@/database/redis";
import { generateBadge } from "@/lib/badge";
import { createStatsKey, createUserViewsKey } from "@/lib/keys";

export const GET: APIRoute = async ({ request, params }) => {
  const username = params.username;
  const key = createUserViewsKey(username);
  const views = await redis.incr(key);

  const { searchParams } = new URL(request.url);
  const style = searchParams.get("style");
  const labelColor = searchParams.get("label-color");
  const color = searchParams.get("color");

  const badge = generateBadge("Profile Views", String(views), {
    style,
    color,
    labelColor,
  });

  const statsKey = createStatsKey("views");

  await redis.incr(statsKey);

  return new Response(badge, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
};
