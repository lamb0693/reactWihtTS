type InputProps = {
    value : string,
    changeHandler : (event : React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props : InputProps) => {
    const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <div>
            <input type='text' value={props.value} onChange={changeHandler}></input>
            <input type='text' value={props.value} onChange={props.changeHandler}></input>
        </div>
    )
}