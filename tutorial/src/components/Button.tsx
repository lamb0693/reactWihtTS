type ButtonProps = {
    //clickHandler : (event : React.MouseEvent<HTMLElement>) => void // 추가 변수 없는 기본형
    clickHandler : (event : React.MouseEvent<HTMLElement>, id : number)=>void
}

export const Button = (props : ButtonProps) => { 
    // return <button onClick={props.clickHandler}>Button</button>  추가 변수를 주면 아래와 같이 변경한다
    return <button onClick={(event) => props.clickHandler(event, 1)}>Button</button>
}