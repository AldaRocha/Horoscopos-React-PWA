import React from 'react'
import { useState } from 'react'

const Formulario = ({ onGenerar }) => {
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");

    const calcularSigno = (fecha) => {
        const f = new Date(fecha);
        const mes = f.getMonth() + 1;
        const dia = f.getDate();

        if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Aries";
        if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Tauro";
        if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Géminis";
        if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Cáncer";
        if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leo";
        if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgo";
        if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
        if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "Escorpio";
        if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "Sagitario";
        if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "Capricornio";
        if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Acuario";
        if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Piscis";
        return "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !fecha) return;
        const signo = calcularSigno(fecha);
        onGenerar({ nombre, signo });
    }

    return(
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
            <div className="fondo row">
                <form onSubmit={ handleSubmit }>
                    <div className="mb-3 w-100">
                        <label htmlFor="nombre" className="form-label">
                            Nombre:
                        </label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre:" value={ nombre } onChange={ (e) => setNombre(e.target.value) }/>
                    </div>
                    <div className="mb-3 w-100">
                        <label htmlFor="fecha" className="form-label">
                            Fecha de Nacimiento:
                        </label>
                        <input type="date" className="form-control" id="fecha" value={ fecha } onChange={ (e) => setFecha(e.target.value) }/>
                    </div>
                    <button className='btn btn-primary w-100'>
                        Generar Horóscopo
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Formulario;
