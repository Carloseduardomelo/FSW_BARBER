import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import {
  ChevronLeft,
  MapPin,
  MenuIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";

interface BarbershopPamars {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({ params }: BarbershopPamars) => {
  if (!params.id) {
    // TODO: redirekider home page
    return null;
  }

  const barberShopData = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barberShopData) {
    return null;
  }

  console.log(barberShopData.name);

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-3 left-3 z-50"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-3 right-3 z-50"
        >
          <MenuIcon />
        </Button>

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
      <div className="px-5 pt-3 pbPgit-6 border-t border-solid border-secondary flex flex-col gap-3 ">
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

export default BarbershopDetailsPage;
