import React from "react";
import './estilos.css'

export default function SecaoContato(){
    return(
        <section id="contato">
            <div className="container limitar-secao">
                <h2>
                    Fale conosco
                </h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="cards">
                    <div className="contato">
                        <div>
                            <h3>Contato</h3>
                                <img src="" alt="" />
                                <p>Nova Iguaçu, RJ</p>
                                <p>(21) 9999-9999</p>
                                <p>contato@oticavida.com</p>
                            <h4>Nossas Redes Sociais</h4>
                                <img src="" alt="" />
                                <p>/OticaVida</p>
                                <p>@oticavidarj</p>
                                <p>@oticavidarj</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}