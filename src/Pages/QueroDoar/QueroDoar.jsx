import S from './queroDoar.module.scss'
import livroVector from '../../assets/livroVector.png'

export default function QueroDoar(){
    return(
        <section>
            <section>
                <h2>Por favor, preencha o formulário com suas informações eas informações do Livro</h2>
                <form action="">
                    <div>
                        <img src={livroVector} alt="Imagem mais simplificada de um livro aberto" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo' />
                    <input type="text" placeholder='Categoria' />
                    <input type="text" placeholder='Autor' />
                    <input type="text" placeholder='Link da Imagem'/>
                </form>
            </section>
        </section>
    )
}