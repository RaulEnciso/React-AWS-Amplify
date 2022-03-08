import { Fragment, useState } from "react";
const Url_login = "http://localhost/aws-amplify/prueba-react/controller/login.php";
const enviarData = async (url, data) =>{
    const respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const json = await respuesta.json();
    console.log(json)
}
export function SignIn() {
  const [datos, setDatos] = useState({
    correo_electronico: "",
    contraseña: "",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const iniciar_sesion = (event) => {
    event.preventDefault();
    const data = {
      correo_electronico: datos.correo_electronico,
      contraseña: datos.contraseña
    };

    enviarData(Url_login,data);
  };
  return (
    <Fragment>
      <div className="form-container sign-in-container">
        <form onSubmit={iniciar_sesion}>
          <h1>Iniciar sesión</h1>
          <span>usa tu cuenta</span>
          <input
            type="text"
            name="correo_electronico"
            placeholder="Correo electrónico"
            onChange={handleInputChange}
          ></input>
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            onChange={handleInputChange}
          ></input>
          <a href="#sd">¿Olvidaste tu contraseña?</a>
          <button>INGRESAR</button>
        </form>
      </div>
    </Fragment>
  );
}
