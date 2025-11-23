export const prerender = false;

import type { APIRoute } from "astro";

import { redis } from "@/database/redis";
import { createUserRepoViewsKey } from "@/lib/keys";
import { generateBadge } from "@/lib/badge";

export const GET: APIRoute = async ({ params, request }) => {
  const username = params.username;
  const key = createUserRepoViewsKey(username);
  const views = (await redis.get<number>(key)) ?? 0;

  const { searchParams } = new URL(request.url);
  const style = searchParams.get("style");
  const labelColor = searchParams.get("label-color");
  const color = searchParams.get("color");

  const badge = generateBadge("Repo Views", String(views), {
    style,
    color,
    labelColor,
  });

  return new Response(badge, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
};
