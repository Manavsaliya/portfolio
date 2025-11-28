import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <RiSunLine size={20} />
      ) : (
        <RiMoonLine size={20} />
      )}
    </button>
  );
}
