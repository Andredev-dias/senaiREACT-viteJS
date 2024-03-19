import Teste from "./components/Teste"
import style from "./Home.module.css"
import Menu from "./components/Menu"

export const Home = () => {
    return(
        <>
        <Menu/>
        <div className={style.ddd}>
            <h1>Gráficos</h1>
            <Teste text="Primeiro tipo de grafico" color="red" whatChart="line"/>
            <br />
            <Teste text="Segundo tipo de grafico" color="yellow" whatChart="area"/>
            <br />
            <Teste text="Terceiro tipo de grafico" color="blue" whatChart="pie"/>
            <br />
        </div>
        </>
    )
}

