import { RiArrowDownLine, RiArrowUpLine } from "@remixicon/react";

export type PointType = "start" | "continue" | "end";

interface ExperienceTimelineProps {
  isFirst: boolean;
  isLast: boolean;
}

export default function ExperienceTimeline({
  isLast,
  isFirst,
}: ExperienceTimelineProps) {
  let topType: PointType = "continue";
  let bottomType: PointType = "continue";

  if (isFirst) {
    topType = "end";
  }

  if (isLast) {
    bottomType = "start";
  }

  const renderPoint = (type?: PointType, isTop?: boolean) => {
    switch (type) {
      case "start":
        return (
          <div className="w-2.5 h-2.5 rounded-full border-2 border-foreground" />
        );
      case "continue":
        return <div className="w-2 h-[1.6px] bg-foreground" />;
      case "end":
        return isTop ? (
          <RiArrowUpLine size={19} className="text-foreground -mb-1" />
        ) : (
          <RiArrowDownLine size={19} className="text-foreground -mt-1" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center w-5">
      {topType && renderPoint(topType, true)}
      <div className="w-0.5 flex-1 bg-border" />
      {bottomType && renderPoint(bottomType)}
    </div>
  );
}
