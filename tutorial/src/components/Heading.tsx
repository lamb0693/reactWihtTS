type HeadingProps = {
    children : string     // 안의 내용이 props.children으로 들어간다
}

export const Heading = (props : HeadingProps) => {
    return (<h2>{props.children}</h2>)  // 안의 내용이 props.children으로 들어간다
}