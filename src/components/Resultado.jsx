import React from "react";

const signosInfo = {
    Aries: { img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Aries.svg", desc: "Valiente y energético." },
    Tauro: { img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Taurus.svg", desc: "Persistente y leal." },
    Géminis: { img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Gemini.svg", desc: "Curioso y comunicativo." },
    Cáncer: { img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Cancer.svg", desc: "Protector y sensible." },
    Leo: { img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Leo.svg", desc: "Carismático y seguro." },
    Virgo: { img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Virgo.svg", desc: "Analítico y perfeccionista." },
    Libra: { img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Libra.svg", desc: "Equilibrado y sociable." },
    Escorpio: { img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Scorpius.svg", desc: "Intenso y apasionado." },
    Sagitario: { img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Sagittarius.svg", desc: "Aventurero y optimista." },
    Capricornio: { img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Capricorn.svg", desc: "Disciplinado y responsable." },
    Acuario: { img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Aquarius.svg", desc: "Original y humanitario." },
    Piscis: { img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Pisces.svg", desc: "Soñador y compasivo." },
};

const Resultado = ({ datos }) => {
    if (!datos){
        return(
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                <div className="fondo row">
                    Tu signo es: Esperando datos
                    <p>
                        <strong>
                            "Esperando nombre"
                        </strong>,
                    </p>
                </div>
            </div>
        );
    }

    const info = signosInfo[datos.signo] || { img: "", desc: "Ingrese sus datos para mostrar su horóscopo" };

    return(
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
            <div className="fondo row">
                <h3 className="text-center">
                    Tu signo es: <strong> { datos.signo ? datos.signo : "Esperando datos" } </strong>
                </h3>
                {
                    info.img && <img src={ info.img } alt={ datos.signo } className="img-fluid my-3" style={{ maxWidth: "120px" }}/>
                }
                <p className="text-center">
                    <strong>
                        { datos.nombre ? datos.nombre : "Esperando nombre" }
                    </strong>:&nbsp;
                    { info.desc }
                </p>
            </div>
        </div>
    );
}

export default Resultado;