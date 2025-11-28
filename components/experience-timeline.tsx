import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";

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
        return <div className="w-2 h-0.5 bg-foreground" />;
      case "end":
        return isTop ? (
          <RiArrowUpSLine size={20} className="text-foreground" />
        ) : (
          <RiArrowDownSLine size={20} className="text-foreground" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center w-5">
      {topType && (
        <div className="flex items-center justify-center">
          {renderPoint(topType, true)}
        </div>
      )}
      <div className="w-[1.6px] h-full bg-border" />
      {bottomType && (
        <div className="flex items-center justify-center">
          {renderPoint(bottomType)}
        </div>
      )}
    </div>
  );
}
