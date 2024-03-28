"use server";

import { db } from "@/app/_lib/prisma";
import BarberShopInfs from "./_components/barberShopInfs";
import ServerItem from "./_components/serverItem";

// Enhanced interface for Service type
interface Service {
  id: string;
  name: string;
  price: number;
  barbershopid: string;
  description: string;
  imageUrl: string;
}

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
    include: {
      Service: true,
    },
  });

  if (!barberShopData) {
    return null;
  }

  return (
    <div>
      <BarberShopInfs barberShopData={barberShopData} />

      <div className="flex flex-col items-center justify-center gap-3 px-3">
        {barberShopData.Service.map((item: Service) => ( // Check for Service existence
          <ServerItem
            key={item.id}
            services={item}
            barberShopData={barberShopData}
          />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;