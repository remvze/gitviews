export const prerender = false;

import { redis } from "@/database/redis";
import { createStatsKey, createUserViewsKey } from "@/lib/keys";
import type { APIRoute } from "astro";
import { makeBadge } from "badge-maker";

export const GET: APIRoute = async ({ request, params }) => {
  const username = params.username;
  const key = createUserViewsKey(username);
  const views = await redis.incr(key);

  const url = new URL(request.url);
  const sp = url.searchParams;

  const style = [
    "flat",
    "flat-square",
    "plastic",
    "for-the-badge",
    "social",
  ].includes(sp.get("style"))
    ? (sp.get("style") as
        | "flat"
        | "flat-square"
        | "plastic"
        | "for-the-badge"
        | "social")
    : "flat-square";
  const labelColor = sp.get("label-color") ?? "black";
  const messageColor = sp.get("message-color") ?? "grey";

  const badge = makeBadge({
    label: "Profile Views",
    labelColor: labelColor,
    message: String(views),
    color: messageColor,
    style,
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
