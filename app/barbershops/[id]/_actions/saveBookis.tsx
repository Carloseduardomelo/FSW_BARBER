"use server";

import { db } from "@/app/_lib/prisma";

interface SaveBookingParams {
  barbershopId: string;
  serviceId: string;
  userId: string;
  date: Date;
}

export const SaveBookins = async (parms: SaveBookingParams) => {
  await db.booking.create({
    data: {
      barbershopId: parms.barbershopId,
      serviceId: parms.serviceId,
      userId: parms.userId,
      date: parms.date,
    },
  });
};
