import "./Home.css"
import romantico from './romantico.jpg';
import harry_potter from './harry_potter.jpg';
import jhon_wick from './jhon_wick.jpg';
import kung_fu_panda from './kung_fu_panda.jpg';
import Category from "../Category/Category";
import Son_como_ninios from './Son_como_ninios.jpg';

function Home({ user, setUser }) {
    const handleLogout = () => {
        setUser([])
    }
    return (
        <body>
            <div>
                <div>
                    <h1>
                        Home
                    </h1>
                </div>
                <div className="Logout">
                    <h3>{user}</h3>
                    <button onClick={handleLogout}> Cerrar sesion</button>
                </div>
                <nav>
                    <ul className="navbar">
                        <li><a href="#Home">Inicio</a></li>
                        <li><a href="#1">Romance</a></li>
                        <li><a href="#2 ">Drama</a></li>
                        <li><a href="#3">Accion</a></li>
                        <li><a href="#4">Animacion</a></li>
                        <li><a href="#5">Animacion</a></li>
                    </ul>
                </nav>
                <div className="container">
                    <div className="card" id="1">
                        <h2 className="title">Romance</h2>
                        <p className="description">Peliculas para dia de san valentin</p>
                        <img className="romantico" src={romantico} alt="romance" />
                    </div>
                    <div class="card" id="2">
                        <h2 className="title">Drama</h2>
                        <p className="description">Historias de suspenso de no dormir</p>
                        <img className="drama" src={harry_potter} alt="Drama" />
                    </div>
                    <div class="card" id="3">
                        <h2 className="title">Accion</h2>
                        <p className="description">Peliculas como Jhon weak.</p>
                        <img className="accion" src={jhon_wick} alt="Accion" />
                    </div>
                        <div class="card" id="4">
                            <h2 className="title">Animacion</h2>
                            <p className="description">
                                Peliculas como Kung fu panda.</p>
                            <img className="animacion" src={kung_fu_panda} alt="Animacion" />
                        </div>
                        <div class="card" id="5">
                            <h2 className="title">Comedia</h2>
                            <p className="description"> Para morir de la risa.</p>
                            <img className="comedia" src={Son_como_ninios} alt="comedia" />
                    </div>
                </div>

            </div>
        </body>
    )

}
export default Home;