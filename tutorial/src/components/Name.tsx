export type NameType = {
    first : string,
    last : string
}

type NameProps = {
    names : NameType[]
}

export const Name : React.FC<NameProps> = (props : NameProps) => {  // 반환형 React.FC props의 type이 있으면 <propsType> 추가
    return(
        <div><h2>
            { props.names.map( (name) => { return <div key={name.first}>{name.first} {name.last}</div>})}
        </h2></div> 
    )
}