import { useState, useEffect } from "react"
import { Card } from "./components/Card"
import  Menu  from "./components/Menu"
import ModalInfo from "./components/ModalInfo"
import { Tilt } from 'react-tilt'

import { apiRMCaracters } from "./api/apiRickAndMorty"

export const RickAndMorty = () => {

const [data, setData] = useState([])
const [page, setPage] = useState("")
const [searchName, setSearchName] = useState("")
const [modal, setModal] = useState();


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


  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    5000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return(
    <>
      {modal !== undefined && <ModalInfo data={data[modal]} close={() => setModal()}/>}
    <div>
      <Menu/>
      <h1>Rick and Morty API</h1>
      <input type="text" placeholder="Digite uma pagina" value={page} onChange={(event) => setPage(event.target.value)}/>

      <input type="text" placeholder="Digite um nome" value={searchName} onChange={(event) => setSearchName(event.target.value)}/>

      <section>
        <br />
     {data.map((item, index) => { 
      //  if(item.name.toLowerCase().includes(searchName.toLowerCase())) 
          return(
          <Tilt  key={item.id} options={defaultOptions} style={{ height: 500, width: 250 }}>
            <div>
              <Card name={item.name} desc={item.species} value={item.gender} image={item.image} />
              <button onClick={() => setModal(index)}>Info</button>
            </div>
        </Tilt>

          )
     })}
     <br />
      </section>
    </div>
    </>
  )
}