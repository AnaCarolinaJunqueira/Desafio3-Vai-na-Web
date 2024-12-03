import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
export default function footer(){
    return(
        <footer>
            <section>
                <h3>4002-8922</h3>
                <nav>
                    <a href={facebook}></a>
                    <a href={twitter}></a>
                    <a href={youtube}></a>
                    <a href={linkedin}></a>
                    <a href={instagram}></a>
                </nav>
            </section>
            <section>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}