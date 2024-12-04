import S from './queroDoar.module.scss'
import livrovector from '../../assets/livroVector.png'

export default function QueroDoar(){
    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action="">
                    <div>
                        <img src={livrovector} alt="Imagem mais simplificada de um livro aberto" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo' />
                    <input type="text" placeholder='Categoria' />
                    <input type="text" placeholder='Autor' />
                    <input type="text" placeholder='Link da Imagem'/>
                    <input type="submit" value="Doar" />
                </form>
            </section>
        </section>
    )
}