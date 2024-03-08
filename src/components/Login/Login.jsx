import "./Login.css"
import { useState} from "react"

export function Login({setUser}) {
  const [usuario, setUsuario] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [email, setEmail] = useState("")
  const [error,setError]= useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (usuario === "" || contraseña === "") {
       setError(true)
       return
    }
    setError(false)

    setUser([usuario])
  }

  function validarEmail(email) {
    var patron = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return patron.test(email);
  }

  if (validarEmail(email)) {
    console.log("El email es válido");
  } else {
    console.log("El email es inválido");
  }
  return(
    <section>
      <h1>Login</h1>
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <label className="usuario">Nombre de usuario:</label>
          <input type="text"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label className="contrasena">Contraseña:</label>
          <input type="password"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)}/>
        </div>
        <div>
          <label className="email">Email:</label>
          <input type="email"
           value={email}
           onChange={e => setEmail(e.target.value)}/>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {error && <p>Todos los campos son Obligatorios </p> }
    </section>
  )
}