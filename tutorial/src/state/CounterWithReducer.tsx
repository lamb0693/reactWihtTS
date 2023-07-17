import { useReducer } from "react"

export const CounterWithReducer = ()  => {

    enum ACTION  {
        INC,
        DEC,
        RESET 
    }

    type ACTION_TYPE = {
        type: ACTION,
        payload : number
    }

    const reducer = (state : number, action : ACTION_TYPE ) => {
        switch(action.type){
            case ACTION.INC :
                return state +action.payload;
            case ACTION.DEC :
                return state - action.payload;
            case ACTION.RESET :
                return 0;
            default :
                console.log("error .. in reducer fx")
                return -999
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch({type:ACTION.INC, payload:1})}>Increase</button>
            <button onClick={() => dispatch({type:ACTION.DEC, payload:1})}>Decrease</button>
            <button onClick={() => dispatch({type:ACTION.RESET, payload:0})}>Reset</button>
        </div>
    )
}