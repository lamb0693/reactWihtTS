import { useState } from "react"

type AuthName = {
    name : string,
    email : string
}

export const User = () => {
    const [name, setName] = useState<AuthName | null>(null)
    // const [name, setName] = useState<AuthName>({} as AuthName) 이렇게도 쓸 수 있다

    const [isLogin, setIsLogin] = useState(false)

    const username : AuthName = {
        name : "홍길동",
        email : "gildong@naver.com"
    }

    const login  = () : void  => {   //왜 위의 것은 함수명 뒤에  여기는 왜 ()뒤에??
        setIsLogin(true)
        setName(username)
    }

    const logout = () : void => {
        setIsLogin(false)
        //setName(null)
    }

    return (
        <div>
            <div><h2>{isLogin ? name?.name+'님 안녕하세요 email :'+ name?.email: 'Login 하세요'}</h2></div>
            {/* <div><h2>{isLogin ? name.name+'님 안녕하세요 email :'+ name.email: 'Login 하세요'}</h2></div> 위와 같이 하면 ?가 필요 없다*/}
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button> 
        </div>   
    )
}