"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRightToLine, Calendar, CalendarDays, CircleUserIcon, Home, MenuIcon } from "lucide-react";
import { signIn, useSession , signOut } from "next-auth/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetDescription,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import { Avatar , AvatarImage , AvatarFallback } from "./ui/avatar";
import Menu from "./Menu";

const Header = () => {

  return (
    <Card>
      <CardContent className="py-6 px-5 flex justify-between items-center text-center">
        <Image
          src={"/logo.png"}
          alt="Logo do projeto barber."
          height={22}
          width={128}
        />

        <Menu />
      </CardContent>
    </Card>
  );
};

export default Header;
