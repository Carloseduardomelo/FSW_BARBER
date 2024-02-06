import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";
import Agentamento from "./Agentamento";

interface serveProps {
  services: Service;
}
const ServerItem = ({ services }: serveProps) => {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center p-2 gap-3">
        <Image
          src={services.imageUrl}
          alt={"nada"}
          width={110}
          height={110}
          className="rounded-sm w-[120px] h-[120px]"
          style={{ objectFit: "cover" }}
        />

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm">{services.name}</h2>
            <p className="text-sm font-light text-[#838896] text-ellipsis w-fit">
              {services.descripition}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-primary">
              {" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(services.price))}
            </p>
            <Agentamento />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerItem;
