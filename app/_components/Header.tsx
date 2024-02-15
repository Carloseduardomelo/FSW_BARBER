"use client";

import Image from "next/image";
import Menu from "./Menu";
import { Card, CardContent } from "./ui/card";

const Header = () => {
  return (
    <Card>
      <CardContent className="py-6 px-5 flex justify-between items-center text-center">
        <Image
          src={"/Logo.png"}
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
