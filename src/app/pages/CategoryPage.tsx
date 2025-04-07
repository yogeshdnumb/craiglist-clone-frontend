import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { listings } from "@/utils/constants";

export default function CategoryPage() {
  // const [emblaRef] = useEmblaCarousel();

  return (
    <main className="p-4 flex flex-col gap-10">
      {listings.map((data, i) => {
        return (
          <Card key={i} className="w-full sm:w-72 rounded">
            <CardHeader className="flex justify-around">
              <div className="flex flex-col bg-red-200">
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>
                  <span>{data.description} </span>
                </CardDescription>
              </div>
              <div className="bg-blue-200">
                <CardDescription>
                  <div>2 hours ago</div>
                  <div>Chennai</div>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className=" ">
              <img src={data.images[0]} className="h-56" alt="" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-4">
                <span>{data.price}</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Contact</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuItem>Phone</DropdownMenuItem>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Whatsapp</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        );
      })}
    </main>
  );
}
