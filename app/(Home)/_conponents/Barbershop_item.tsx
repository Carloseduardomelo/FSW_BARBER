"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

export const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const { data } = useSession();

  const routes = useRouter();

  const handleBookings = () => {
    routes.push(`barbershops/${barbershop.id}`);
  };

  const handleLogin = async () => {
    await signIn("google", { callbackUrl: `/barbershops/${barbershop.id}` });
  };

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl md:w-[360px] md:bg-red-900 md:max-w-[1440px]">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className="opacity-90 flex gap-1 items-center top-3 left-3"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
          <Image
            alt={barbershop.name}
            src={barbershop.imgagenURl}
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button
            className="w-full mt-3"
            variant="secondary"
            onClick={data?.user ? handleBookings : handleLogin}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
