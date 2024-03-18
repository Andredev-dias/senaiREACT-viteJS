import Teste from "./components/Teste"
import style from "./Home.module.css"

export default function Home(){
    return(
        <div className={style.ddd}>
            <h1>Gráficos</h1>
            <Teste text="Primeiro tipo de grafico" color="red" whatChart="line"/>
            <br />
            <Teste text="Segundo tipo de grafico" color="yellow" whatChart="area"/>
            <br />
            <Teste text="Terceiro tipo de grafico" color="blue" whatChart="pie"/>
            <br />
        </div>
    )
}