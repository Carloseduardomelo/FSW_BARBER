"use client";

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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Confirmados;
