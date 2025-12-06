export const prerender = false;

import type { APIRoute } from "astro";

import { generateBadge } from "@/lib/badge";
import { incrementUserViews } from "@/services/user.service";
import { incrementTotal } from "@/services/stats.service";

export const GET: APIRoute = async ({ request, params }) => {
  const username = params.username!;
  const views = await incrementUserViews(username);

  const { searchParams } = new URL(request.url);

  const style = searchParams.get("style");
  const labelColor = searchParams.get("label-color");
  const color = searchParams.get("color");

  let base = parseInt(searchParams.get("base") || "");
  base = !Number.isNaN(base) ? base : 0;

  const label = searchParams.get("label") || "Profile Views";

  const badge = generateBadge(label, String((views + base).toLocaleString()), {
    style,
    color,
    labelColor,
  });

  await incrementTotal();

  return new Response(badge, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
};
