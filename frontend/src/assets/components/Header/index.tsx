import logo from '../../img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DsMeta" />
                    <h1>DSMETA</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/daniel.hanks/">Daniel Oliveira</a></p>
            </div>
        </header>
    )

}

export default Header;
