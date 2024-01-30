import { format } from "date-fns";
import Header from "../_components/Header";
import { ptBR } from "date-fns/locale";
import  Search  from "./_conponents/Search"
import Bookin_item from "../_components/Bookin-item";

export default function Home() {
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
        <h1 className="text-sm uppercase">corde de cabelo</h1>
        <Bookin_item />
      </div>
    </div>
  );
}
