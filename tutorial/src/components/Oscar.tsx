type OscarProps = {
    children : React.ReactNode   //안에 props.children으로 React.ReactNode가들어간다
}

export const Oscar = (props : OscarProps) => {
    return <div>{props.children}</div>   // 안에 props.children으로 React.ReactNode가들어간다

}