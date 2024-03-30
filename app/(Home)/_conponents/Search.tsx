"use client"

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className=" flex items-center justify-center gap-2">
      <Input
        type="email"
        placeholder="Search"
        height={36}
        width={302}
        className="px-3"
      />
      <Button variant={"default"}>
        <SearchIcon size={18}/>
      </Button>
    </div>
  );
};

export default Search;
