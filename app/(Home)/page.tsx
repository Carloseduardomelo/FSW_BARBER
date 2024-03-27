import Header from "../_components/Header";
import Search from "./_conponents/Search";

import { db } from "../_lib/prisma";
import { BarbershopItem } from "./_conponents/Barbershop_item";

import Confirmados from "./_conponents/Confirmados";
import Welcom from "./_conponents/welcom";

const Home = async () => {
  const Barbershop = await db.barbershop.findMany({});

  return (
    <div>
      <Header />

      <div className="py-6 px-5">
        <Welcom />
      </div>
      <div className="px-5">
        <Search />
      </div>

      <div>
        <Confirmados />
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">
          Populares
        </h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden md:max-w-[1440px] md:w-[360px}">
          {Barbershop.map((barbershop: any) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">
          Recomentados
        </h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {Barbershop.map((barbershop: any) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
