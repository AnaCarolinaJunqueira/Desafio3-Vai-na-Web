import S from './inicio.module.scss'
import network from '../../assets/network.png'
import lendo from '../../assets/lendo.png'
import transformar from '../../assets/transformar.png'
import balanca from '../../assets/balanca.png'

export default function Inicio(){
    return(
        <main>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={network} alt="Quatro pessoas conectadas através de um círculo" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social. </p>
                    </article>
                    <article>
                        <img src={lendo} alt="uma pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transformar} alt="varias pessoas" />
                        <p>Fornece o conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={balanca} alt="uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}