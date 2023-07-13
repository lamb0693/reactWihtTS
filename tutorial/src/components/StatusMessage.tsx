type StatusProps = {
    state : 'connecting' | 'ok' | 'fail'
}

export const StatusMessage = (props : StatusProps) => {

    return <h2>
        {props.state}
    </h2>
}