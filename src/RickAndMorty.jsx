import { useState, useEffect } from "react"
import { Card } from "./components/Card"
import  Menu  from "./components/Menu"

import { apiRMCaracters } from "./api/apiRickAndMorty"

export const RickAndMorty = () => {

const [data, setData] = useState([])
const [page, setPage] = useState("")
const [searchName, setSearchName] = useState("")


  useEffect(() => {
    apiRMCaracters.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page, searchName])

  return(
    <div>
      <Menu/>
      <h1>Rick and Morty API</h1>
      <input type="text" placeholder="Digite uma pagina" value={page} onChange={(event) => setPage(event.target.value)}/>

      <input type="text" placeholder="Digite um nome" value={searchName} onChange={(event) => setSearchName(event.target.value)}/>

      <section>
        <br />
     {data.map((item) => { 
      //  if(item.name.toLowerCase().includes(searchName.toLowerCase())) 
          return(
            <Card name={item.name} desc={item.species} value={item.gender} image={item.image} key={item.id}/>
          )
     })}
     <br />
      </section>
    </div>
  )
}