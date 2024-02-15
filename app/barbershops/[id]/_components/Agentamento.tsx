"use client";

import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { ptBR } from "date-fns/locale";
import { useEffect, useMemo, useState } from "react";

import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop, Booking, Service } from "@prisma/client";
import { addDays, format, setHours, setMinutes } from "date-fns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getDayBookings } from "../_actions/getDayBookings";
import { SaveBookins } from "../_actions/saveBookis";
import { generateDayTimeList } from "../_helps/horus";

interface NamesProps {
  serviser: Service;
  barberShopData: Barbershop;
}

const Agentamento = ({ serviser, barberShopData }: NamesProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [Horas, setHoras] = useState<string | undefined>();
  const [setIsOpen, setSetIsOpen] = useState(false);
  const [dayBookings, setDayBookings] = useState<Booking[]>([]);

  const { data } = useSession();

  const routes = useRouter();

  useEffect(() => {
    if (!date) {
      return;
    }
    const refreshAvailableHours = async () => {
      const _dayBookings = await getDayBookings(barberShopData.id, date);
      setDayBookings(_dayBookings);
    };
    refreshAvailableHours();
  }, [date, barberShopData.id]);

  const timeList = useMemo(() => {
    if (!date) {
      return [];
    }

    return generateDayTimeList(date).filter((time) => {
      const timeHour = Number(time.split(":")[0]);
      const timeMinutes = Number(time.split(":")[1]);

      const booking = dayBookings.find((booking) => {
        const bookingHour = booking.date.getHours();
        const bookingMinutes = booking.date.getMinutes();

        return bookingHour === timeHour && bookingMinutes === timeMinutes;
      });

      if (!booking) {
        return true;
      }

      return false;
    });
  }, [date, dayBookings]);

  const handleDateClick = (date: Date | undefined) => {
    setDate(date);
    setHoras(undefined);
    console.log(timeList);
  };

  const handleHorasClick = (time: string | undefined) => {
    setHoras(time);
  };

  const handleSaveBookinsSubmit = async () => {
    try {
      if (!date || !Horas || !data?.user) {
        return;
      }

      const dateHour = Number(Horas.split(":")[0]);
      const dateMinutes = Number(Horas.split(":")[1]);

      const newDate = setMinutes(setHours(date, dateHour), dateMinutes);

      await SaveBookins({
        barbershopId: barberShopData.id,
        serviceId: serviser.id,
        date: newDate,
        userId: (data.user as any).id,
      });

      console.log(newDate);

      setDate(undefined);
      setHoras(undefined);
      setSetIsOpen(false);

      toast("Resevar realizada com sucesso", {
        description: format(newDate, "'Para' dd 'de' MMM 'as' HH':'mm'.'", {
          locale: ptBR,
        }),
        action: {
          label: "visualizar",
          onClick: () => routes.replace("/agendados"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sheet open={setIsOpen} onOpenChange={setSetIsOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary">Resevar</Button>
      </SheetTrigger>
      <SheetContent className="p-0 flex flex-col m-0">
        <SheetHeader>
          <SheetTitle className="text-left w-full border-b border-solid border-secondary p-5 flex items-center">
            Agentamento
          </SheetTitle>
        </SheetHeader>
        <div className="border-0 w-full flex items-center justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateClick}
            locale={ptBR}
            fromDate={addDays(new Date(), 1)}
            styles={{
              head_cell: {
                width: "100%",
                textTransform: "capitalize",
              },
              cell: {
                width: "100%",
              },
              button: {
                width: "100%",
              },
              nav_button_previous: {
                width: "32px",
                height: "32px",
              },
              nav_button_next: {
                width: "32px",
                height: "32px",
              },
              caption: {
                textTransform: "capitalize",
              },
            }}
            className="w-full"
          />
        </div>
        {date && (
          <div className="py-6 px-4 border-y border-solid border-secondary flex gap-4 overflow-x-auto">
            {timeList?.map((item) => (
              <Button
                key={item}
                variant={"outline"}
                className="hover:bg-secondary focus:bg-primary"
                onClick={() => handleHorasClick(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        )}
        <div className="px-4">
          <Card>
            <CardContent className="px-5 py-3 flex flex-col gap-4">
              <div className="flex items-center justify-between font-bold">
                <h1 className="text-[18px] text-center">{serviser.name}</h1>
                <h3 className="text-sm text-center">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(serviser.price))}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Date</p>
                <p>
                  {format(date || new Date(), "dd 'de' MMMM", {
                    locale: ptBR,
                  })}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Horario</p>
                <p>{Horas}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Barbearia</p>
                <p>{barberShopData?.name}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <SheetFooter className="px-4 py-4">
          <Button
            type="submit"
            disabled={!date || !Horas}
            onClick={() => handleSaveBookinsSubmit()}
          >
            <p>confimar resevar</p>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Agentamento;
