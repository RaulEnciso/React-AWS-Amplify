import { Fragment, useState } from "react";
export function SignUp() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo_electronico: "",
    contraseña: "",
  });
  const handleInputChange = (event) =>{
    // console.log('funciona');

    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })

  }
  const Registrar = (event) =>{
      event.preventDefault();
      console.log(datos.nombre);
  }
  return (
    <Fragment>
      <div className="form-container sign-up-container">
        <form onSubmit={Registrar}>
          <h1>Crear cuenta</h1>
            <span>Use su correo electrónico para registrarse</span>
            <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre"
                onChange={handleInputChange}>
            </input>
            <input
                type="text"
                name="correo_electronico"
                placeholder="Correo electrónico"
                onChange={handleInputChange}>
            </input>
            <input 
                type="password" 
                name="contraseña" 
                placeholder="Contraseña"
                onChange={handleInputChange}>
            </input>
          <button type="submit">REGISTRARSE</button>
        </form>
      </div>
    </Fragment>
  );
}
