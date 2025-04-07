import { TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";

const popularIcons = [
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
  { icon: TrendingUpIcon, label: "name" },
];
export default function PopularGrid() {
  return (
    <div className="flex flex-col gap-2  items-center">
      <h2 className="">Now Trending</h2>
      <div
        style={{
          display: "grid",
          width: "min( 100%, 300px )",
          margin: "auto",
          // background: "red",
          height: "300px",
          gridTemplateColumns: "repeat(3,minmax(auto,1fr))",
          gridTemplateRows: "repeat(3,minmax(auto,1fr))",
          // placeContent: "center",
          gap: "8px",
        }}
      >
        {popularIcons.map((popular, i) => {
          return (
            <Button
              size={"icon"}
              className="size-full  shadow flex flex-col"
              variant={"outline"}
              key={i}
            >
              <popular.icon className="size-[50%]" />
              <span>{popular.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
