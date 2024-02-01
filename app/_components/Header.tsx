"use client"


import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const Header = () => {

  const handleLoginClick = async () =>{
    await signIn()
  }

  return (
    <Card>
      <CardContent className="py-6 px-5 flex justify-between items-center text-center">
        <Image src={"/logo.png"} alt="Logo do projeto barber." height={22} width={128}/>
        {/* <Button variant={"outline"} size={"icon"} className="p-3">
          <MenuIcon />
        </Button> */}
        <Button onClick={handleLoginClick}>
          logar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
