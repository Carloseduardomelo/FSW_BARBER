"use client";

import {
  ArrowRightToLine,
  CalendarDays,
  CircleUserIcon,
  MenuIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface users {
  user: {
    imail: string;
    image: string;
    name: string;
  };
}

const handleLoginClick = async () => {
  await signIn();
};

const HandleSairClick = async () => {
  await signOut();
};

const Menu = () => {
  const { data } = useSession();
  const routes = useRouter();

  const name = `${data?.user?.name?.split(" ")[0]} ${
    data?.user?.name?.split(" ")[1]
  }`;

  const home = () => {
    routes.replace("/");
  };

  const agentamento = () => {
    routes.replace("/agendados");
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="p-3">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0 flex flex-col m-0">
        <SheetHeader className="">
          <SheetTitle className="text-left w-full border-b border-solid border-secondary p-5 flex items-center">
            Menu
          </SheetTitle>
        </SheetHeader>
        {!data?.user ? (
          <div className="px-5  flex flex-col gap-4">
            <div className="flex gap-3 items-center text-[14px] font-bold">
              <CircleUserIcon className="text-gray-500" size={32} />
              <p>Olà!, Faça seu login</p>
            </div>
            <div>
              <Button
                variant={"secondary"}
                className="flex gap-3 w-full items-center justify-start"
                onClick={() => handleLoginClick()}
              >
                <ArrowRightToLine size={16} />
                <p>Fazer Login</p>
              </Button>
            </div>
          </div>
        ) : (
          <div className="px-5 flex justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={data.user.image ?? ""} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2>{name}</h2>
            </div>
            <Button variant={"secondary"} onClick={() => HandleSairClick()}>
              <ArrowRightToLine size={16} />
            </Button>
          </div>
        )}

        <SheetFooter className="p-5">
          <SheetClose className="flex flex-col gap-3">
            <Button
              variant={"secondary"}
              className="flex gap-3 items-center justify-start bg-transparent border border-solid border-secondary w-full "
              asChild
            >
              <Link href={"/"}>
                <CalendarDays size={16} />
                Inicio
              </Link>
            </Button>

            <Button
              variant={"secondary"}
              className="flex gap-3 items-center justify-start bg-transparent border border-solid border-secondary w-full "
              onClick={() => (data?.user ? agentamento() : signIn("google"))}
            >
              <CalendarDays size={16} />
              Agendamentos
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
