import SearchBar from "@/components/custom/SearchBar";
import SearchModal from "@/components/custom/SearchModal";
import ToggleThemeButton from "@/components/custom/ToggleThemeButton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";
import useAuth from "@/hooks/useAuth";
import { hyphenToSpace, spaceToHyphen } from "@/lib/utils";
import {
  ChevronDownIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router";

export default function Header() {
  const { catgeory, group } = useParams();
  const { toggleSidebar } = useSidebar();
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  console.log(auth);

  return (
    <div className="flex p-2 justify-between bg-secondary gap-2">
      <div className="flex items-center gap-2">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => {
            toggleSidebar();
          }}
        >
          <img
            src={auth.user.profilePicUrl}
            alt=""
            className="size-full rounded-full"
          />
          {/* <div>{auth.user.profilePicUrl}</div> */}
          {/* <MenuIcon className="size-6" /> */}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">
              {hyphenToSpace(group)}
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Jobs", "Gigs", "For Sale"].map((data, i) => (
              <DropdownMenuItem key={i}>
                <Link to={`/${spaceToHyphen(data)}`}>{data} </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <span>LOGO</span> */}
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setOpen(!open);
          }}
          size="icon"
          variant="outline"
        >
          <SearchIcon />
        </Button>
        <SearchModal open={open} setOpen={setOpen} />
        <Button size={"icon"} className="" variant={"outline"}>
          <PlusIcon />
        </Button>
        <Button size={"icon"} className="rounded-full" variant={"outline"}>
          <UserIcon />
        </Button>
        {/* <ToggleThemeButton /> */}
      </div>
    </div>
  );
}
