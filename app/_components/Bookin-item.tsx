import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

  
  const Bookin_item = () => {
    return (
      <Card>
        <CardContent className="px-5 pb-0 flex justify-between">
          <div className="flex flex-col py-5">
  
              <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] text-primary mb-3">
                confirmado
              </Badge>
              <h2 className="font-bold mb-2">Corte de cabelo</h2>

              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png" alt="imagem do cliente"/>
                </Avatar>
                  <h1>Calos dvfjhs</h1>
              </div>
          </div>
          <div className="flex items-center justify-center flex-col py-6 px-7 border-solid border-l-2 border-secondary">
            <h4 className="text-sm">Fevereiro</h4>
            <h4 className="text-2xl">06</h4>
            <h4>09:12</h4>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  export default Bookin_item