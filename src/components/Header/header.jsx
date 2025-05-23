import logo from '../../assets/logo.png'
import busca from '../../assets/busca.png'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import S from "./header.module.scss"

export default function header(){
    return(
        <BrowserRouter>
            <header>
                <section className={S.boxLogo}>
                    <img src={logo} alt="Imagem de um livro aberto"/>
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={S.boxMenu}>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/doados">Livros Doados</Link></li>
                        <li><Link to="/queroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <div className={S.boxInput}>
                    <input type="text" placeholder='O que você procura?' />
                    <img src={busca} alt="Desenho de uma lupa" />
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/doados" element={<Doados/>}/>
                <Route path="/queroDoar" element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}