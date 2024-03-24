
import Draggable from 'react-draggable';

const ModalInfo = (props) => {
    return(
        <Draggable>
        <div style={{position: "absolute", left: "40%", top: "25%", transform: "translate(-40%, -25%)", background: "#090909", width: "auto", height:"auto" }}>
            <button onClick={props.close}>&#128473;</button><br></br>
            <img src={props.data.image}/>
            <h1>{props.data.name}</h1><br/>
            <p><strong>Gender:</strong> {props.data.gender}</p>
            <p><strong>Location:</strong> {props.data.location.name}</p>
            <p><strong>Origin:</strong> {props.data.origin.name}</p>
            <p><strong>Species:</strong> {props.data.species}</p>
            <p><strong>Created:</strong> {new Date(props.data.created).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
                })}</p>
        </div>
         </Draggable>
    )
}
export default ModalInfo;