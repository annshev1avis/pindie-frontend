import { AuthForm } from "../components/AuthForm/AuthForm";
import Styles from "./Auth.module.css"
import { endpoints } from "../api/config";
import { authorize } from "../api/api-utils";


export default function Auth(){
    return(
        <div classname={Styles["central_div"]}>
            <AuthForm/>
        </div>
        
    )
}