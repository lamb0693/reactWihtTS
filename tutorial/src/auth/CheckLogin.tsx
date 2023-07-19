import { Login } from "./Login"
import { LoginState } from "./LoginState"

type CheckInProps = {
    isLogin : boolean
}

export const CheckLogin = (props : CheckInProps) => {
    if(props.isLogin){
        return <LoginState></LoginState>
    } else{
        return <Login></Login>
    }
}