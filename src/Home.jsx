// import Teste from "./components/Teste"
import style from "./Home.module.css"
import Menu from "./components/Menu"
import { useEffect, useState } from "react"


export const Home = () => {
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [resp, setResp] = useState()
    const [respSub, setRespSub] = useState()
    const [respMult, setRespMult] = useState()



    useEffect(()=> {
        if (n1 !== undefined && n2 !== undefined) {
            setResp(parseFloat(n1) + parseFloat(n2)) 
            setRespSub(parseFloat(n1) - parseFloat(n2))
            setRespMult(parseFloat(n1) * parseFloat(n2))
        }
    },[n1, n2])

    // const handleSum = () => {
    //     const num1 = parseFloat(n1)
    //     const num2 = parseFloat(n2)
    //     if (!isNaN(num1) && !isNaN(num2)) {
    //         setResp(num1 + num2)
    //         setRespSub(num1 - num2)
    //         setRespMult(num1 * num2)
    //     } else {
    //         setResp("Por favor, insira números válidos")
    //     }
    // }

    return(
        <>
        <Menu/>
        <div className={style.ddd}>
            {/* <h1>Gráficos</h1>
            <Teste text="Primeiro tipo de grafico" color="red" whatChart="line"/>
            <br />
            <Teste text="Segundo tipo de grafico" color="yellow" whatChart="area"/>
            <br />
            <Teste text="Terceiro tipo de grafico" color="blue" whatChart="pie"/>
            <br /> */}
            <input type="text" value={n1} onChange={(e) => setN1(e.target.value)}/>
            <input type="text" value={n2} onChange={(e) => setN2(e.target.value)}/>
            {/* <button onClick={handleSum}>Somar</button> */}
           {resp &&
           <>
           
           <h1>SOma: {resp}</h1>
          <br />
          <h1>SUb: {respSub}</h1>
          <br />
          <h1>Multi: {respMult}</h1>
           </>

           }
        </div>
        </>
    )
}

