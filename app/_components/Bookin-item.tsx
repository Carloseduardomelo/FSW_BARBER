import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Bookin_item = ({ booking }) => {
  return (
    <Card>
      <CardContent className="px-5 pb-0 flex justify-between">
        <div className="flex flex-col py-5">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] text-primary mb-3 w-fit">
            confirmado
          </Badge>
          <h2 className="font-bold mb-2">{booking.service.name && ""}</h2>

          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage
                src={booking.barbershop.imgagenURL}
                alt="imagem do cliente"
              />
            </Avatar>
            <h1>{booking.barbershop.name}</h1>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col py-6 px-7 border-solid border-l-2 border-secondary">
          <h4 className="text-sm">
            {format(booking.date, "MMMM", {
              locale: ptBR,
            })}
          </h4>
          <h4 className="text-2xl">
            {format(booking.date, "dd", {
              locale: ptBR,
            })}
          </h4>
          <h4>
            {format(booking.date, "hh:mm", {
              locale: ptBR,
            })}
          </h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default Bookin_item;
