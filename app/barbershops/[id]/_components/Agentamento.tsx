"use client";

import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

const Agentamento = () => {
  const [date, setDate] = useState(new Date());

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
            // onSelect={handleDateClick}
            locale={ptBR}
            // fromDate={addDays(new Date(), 1)}
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
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Agentamento;
