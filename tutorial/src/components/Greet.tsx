type GreetProps = {
    name : string,
    messagecount? : number;  // ? 로 설정하면 입력 안 해도 된다
    login : boolean
}

export const Greet = (props : GreetProps) => {
    const { messagecount = 0 } = props   // 이렇게 쓰면 없으면 default값 props.messagecount가 있으면 반영

    return (
        <div>
            <h2>
                {props.login? `Welcome ${props.name} you have ${messagecount} messages`
                    : 'welcome guest'    
                }
            </h2>
        </div>
    )
}