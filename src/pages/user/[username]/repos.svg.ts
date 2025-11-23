export const prerender = false;

import { redis } from "@/database/redis";
import { createUserRepoViewsKey } from "@/lib/keys";
import type { APIRoute } from "astro";
import { makeBadge } from "badge-maker";

export const GET: APIRoute = async ({ params }) => {
  const username = params.username;
  const key = createUserRepoViewsKey(username);
  const views = (await redis.get<number>(key)) ?? 0;
  const badge = makeBadge({ label: "Repo Views", message: String(views) });

  return new Response(badge, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
};
