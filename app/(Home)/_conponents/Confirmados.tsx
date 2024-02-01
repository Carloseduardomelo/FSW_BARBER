"use client";

import Bookin_item from "@/app/_components/Bookin-item";
import { useSession } from "next-auth/react";

const Confirmados = () => {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <div className="px-5 pt-8 flex flex-col gap-3">
          <h1 className="text-sm uppercase font-bold text-gray-400">
            corde de cabelo
          </h1>
          <Bookin_item />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Confirmados;
