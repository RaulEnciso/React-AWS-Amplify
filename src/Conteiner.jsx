import { OverlayContainer } from "./OverlayContainer";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export function Conteiner (){
    return(
        <div className="container" id="container">
            <SignUp></SignUp>
            <SignIn></SignIn>
            <OverlayContainer></OverlayContainer>
        </div>
    );
}