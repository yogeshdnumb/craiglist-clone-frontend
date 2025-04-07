import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchModalProps {
  open: boolean;
  setOpen: () => void;
}

export default function SearchModal({ open, setOpen }: SearchModalProps) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <span>Service</span>
          </CommandItem>
          <CommandItem>
            <span>For Sale</span>
          </CommandItem>
          <CommandItem>
            <span>Community</span>
          </CommandItem>
          <CommandItem>
            <span>Jobs</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
