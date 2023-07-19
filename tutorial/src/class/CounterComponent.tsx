import { Component } from "react";

type propsType = {
    message : string
}

type countetStatus = {
    count : number
}

export class CounterComponent extends Component<propsType, countetStatus>{
    state = {
        count : 0
    }

    handleClick = () => {
        console.log("Clicked")
        this.setState( (prev) => ({ count : prev.count + 1 }))
    }

    render() {
        return(
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>눌러봐</button>
                {this.props.message}
            </div>
        )
    }
}