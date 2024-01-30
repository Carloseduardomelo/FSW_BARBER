import { format } from "date-fns";
import Header from "../_components/Header";
import { ptBR } from "date-fns/locale";
import  Search  from "./_conponents/Search"
import Bookin_item from "../_components/Bookin-item";

import { db } from "../_lib/prisma";
import { BarbershopItem } from "./_conponents/Barbershop_item";
import Footer from "../_components/Footer";

export default async function Home() {

  const Barbershop = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="py-6 px-5">
        <h2 className="font-bold text-xl">Ola! Carlos</h2>
        <p className="text-sm">
          {format(new Date(), "EEEE ',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
      <div className="px-5">
        <Search />
      </div>
      <div className="px-5 pt-8 flex flex-col gap-3">
        <h1 className="text-sm uppercase font-bold text-gray-400">corde de cabelo</h1>
        <Bookin_item />
      </div>
      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Populares</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {Barbershop.map((barbershop: any) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomentados</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {Barbershop.map((barbershop: any) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  ); 
}
