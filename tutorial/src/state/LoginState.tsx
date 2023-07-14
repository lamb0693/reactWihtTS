import { useState } from "react"

export const LoginState : React.FC = () =>{
    const [isLogin, setIsLogin] = useState(false)

    const login  = () : void  => {   //왜 위의 것은 함수명 뒤에  여기는 왜 ()뒤에??
        setIsLogin(true);
    }

    const logout = () : void => {
        setIsLogin(false)
    }

    return (
        <div>
            <div>{isLogin ? 'Hello user' : 'Login 하세요'}</div>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button> 
        </div>   
    )
}