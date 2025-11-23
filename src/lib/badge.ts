import { makeBadge } from "badge-maker";

const styles = ["flat", "flat-square", "for-the-badge", "social", "plastic"];

type Style = "flat" | "flat-square" | "for-the-badge" | "social" | "plastic";

interface Options {
  labelColor: string;
  color: string;
  style: string;
}

export function generateBadge(label: string, value: string, options: Options) {
  let style: Style = "flat-square";

  if (styles.includes(options.style)) {
    style = options.style as Style;
  }

  const labelColor = options.labelColor || "black";
  const color = options.color || "grey";

  const badge = makeBadge({
    style,
    labelColor,
    message: value,
    label,
    color,
  });

  return badge;
}
