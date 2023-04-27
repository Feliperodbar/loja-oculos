import React from "react"
import './estilos.css'

export default function Topo(){
    return(
        <header  className='limitar-secao'>
           <div>
            <img src="assets/imagens/logo.png" alt="imagem de um óculos à direita e o nome da ótica à esquerda'" />
            <nav>
                <a href="#produtos">Produtos</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </nav>
           </div>
        </header>
    )
}