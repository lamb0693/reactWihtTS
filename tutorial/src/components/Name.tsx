export type NameType = {
    first : string,
    last : string
}

type NameProps = {
    names : NameType[]
}

export const Name = (props : NameProps) => {
    return(
        <div><h2>
            { props.names.map( (name) => { return <div key={name.first}>{name.first} {name.last}</div>})}
        </h2></div> 
    )
}