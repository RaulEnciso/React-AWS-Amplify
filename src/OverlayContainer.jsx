export function OverlayContainer(){
    return(
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>¡Bienvenido de nuevo!</h1>
                    <p>Inicie sesión con su información personal</p>
                    <button className="ghost" id="signIn">Iniciar sesión</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <p>Ingresa tus datos personales</p>
                    <button className="ghost" id="signUp">Registrarse</button>
                </div>
            </div>
        </div>
    );
}