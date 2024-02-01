"use client";

import { db } from "@/app/_lib/prisma";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";
import { signIn, useSession } from "next-auth/react";

const Welcom = () => {
  const { data } = useSession();

  const name = `${data?.user?.name?.split(" ")[0]} ${data?.user?.name?.split(" ")[1]}`

  return (
    <div className="flex gap-3 flex-col">
      {data?.user ? (
        <h2 className="font-bold text-xl">Ola! {name}</h2>
      ) : (
        <h2
          className="font-bold text-xl cursor-pointer"
          onClick={() => signIn()}
        >
          Ola! Faça seu Login!
        </h2>
      )}

      <p className="text-sm">
        {format(new Date(), "EEEE ',' dd 'de' MMMM", { locale: ptBR })}
      </p>
    </div>
  );
};

export default Welcom;
