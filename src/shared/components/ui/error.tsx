import { AlertCircle } from "lucide-react"
import { Card } from "./card"

type Props = {
  message: string;
  statusCode?: number;
}

export const Error: React.FC<Props> = ({ message, statusCode }) =>     
    <section className="w-full h-full flex flex-col justify-center items-center">
     <Card className="max-w-[600px] w-full flex flex-col items-center justify-center min-h-[300px] rounded-xl">
      <AlertCircle size={'100px'} color="red"/>
      {statusCode && <p>{statusCode}</p>}
      <h2 className="font-semibold text-center text-xl">{message}</h2>
     </Card> 
    </section>
