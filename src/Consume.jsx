import { Card } from "./components/Card"
import Menu from "./components/Menu"


import Data from "./constants/produtos.json"

export const Consume = () => {
 return (
    <div>
      <Menu/>
      {Data.map((item) => {
        return(
          <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
        )
      }) }
    </div>
 )
}