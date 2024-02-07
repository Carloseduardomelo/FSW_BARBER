"use client";

import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { ptBR } from "date-fns/locale";
import { useMemo, useState } from "react";

import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop, Service } from "@prisma/client";
import { addDays, format } from "date-fns";
import { generateDayTimeList } from "../_helps/horus";

interface NamesProps {
  serviser: Service;
  barberShopData: Barbershop;
}

const Agentamento = ({ serviser, barberShopData }: NamesProps) => {
  const [date, setDate] = useState<Date>(new Date() || undefined);
  const [Horas, setHoras] = useState<string | undefined>();

  const TimeList = useMemo(() => {
    return date && generateDayTimeList(date);
  }, [date]);

  const handleDateClick = (date: Date | undefined) => {
    date ? setDate(date) : setDate(new Date());
    setHoras(undefined);
  };

  const handleHorasClick = (time: string | undefined) => {
    setHoras(time);
  };

  return (
    <Sheet>
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
            {TimeList?.map((item) => (
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
                  {format(date, "dd 'de' MMMM", {
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
          <SheetClose asChild>
            <Button type="submit">confimar resevar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Agentamento;
