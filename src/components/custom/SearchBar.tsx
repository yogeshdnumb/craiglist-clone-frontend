import { Input } from "@/components/ui/input";

interface SearchBarProps {
  handleClick: () => void;
}

export default function SearchBar({ handleClick }: SearchBarProps) {
  return (
    <Input className="shadow" placeholder="search" onClick={handleClick} />
  );
}
