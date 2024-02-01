"use client";

import Menu from "@/app/_components/Menu";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeft, MenuIcon, MapPin, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopPropsInfs {
  barberShopData: Barbershop;
}

const BarberShopInfs = ({ barberShopData }: BarbershopPropsInfs) => {
  const routes = useRouter();

  const handleBckClick = () => {
    routes.replace("/");
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-3 left-3 z-50"
          onClick={handleBckClick}
        >
          <ChevronLeft />
        </Button>

        <div className="absolute top-4 right-4 z-50">
          <Menu />
        </div>

        <Image
          src={barberShopData.imgagenURl}
          alt={barberShopData.name}
          fill
          style={{
            objectFit: "cover",
          }}
          className="opacity-75"
        />
      </div>
      <div className="px-5 pt-3 pb-6 git-6 border-t border-solid border-secondary flex flex-col gap-3 ">
        <h1 className="text-xl font-bold">{barberShopData.name}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <MapPin size={18} className="text-primary" />
            <p className="text-sm font-light">{barberShopData.address}</p>
          </div>
          <div className="flex gap-3 item-center">
            <StarIcon size={18} className="text-primary" />
            <p className="text-sm font-light">5,0 (889 avaliações)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberShopInfs;
