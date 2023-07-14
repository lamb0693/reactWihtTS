import React from 'react'


type HelloProps = {
    name : string
}

export const Hello : React.FC<HelloProps> = (props : HelloProps)  => {  // 반환형 React.FC props의 type이 있으면 <propsType> 추가


    return (
        <div>
            <h2>Hello {props.name} </h2>
        </div>
    )
}