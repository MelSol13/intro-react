import React, {useState} from "react";

const PersonCardFuncional = ({nombre, apellido, edad, ciudad}) => {

    //{nombreVariable, funcionParaCambiar}
    const [edoCivil, setEdoCivil] = useState("Casado");

    const cambiarEdoCivil = () => {
        if(edoCivil === "Casado"){
            setEdoCivil("Soltero");
        } else {
            setEdoCivil("Casado");
        }
    }

    return(
        <div>
            <h2>{nombre} {apellido}</h2>
            <p>Edad:{edad}</p>
            <p>Ciudad:{ciudad}</p>
            <p>Edo Civil: {edoCivil}</p>
            <button className="btn btn-info" onClick={cambiarEdoCivil}>Cambiar Edo</button>
        </div>
    )

    
}

export default PersonCardFuncional; 