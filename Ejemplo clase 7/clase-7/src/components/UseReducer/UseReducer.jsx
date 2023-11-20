import React from 'react'
import { useReducer } from 'react'
export default function UseReducer() {
    const funcionParaReducer = (state, action) => {
        switch (action.type) {
            case 'sumar 1':
                return { count: state.count + 1 }
            case 'restar 1':
                return { count: state.count - 1 }
            default:
                alert("Error")
        }
    }
    const [state, dispatch] = useReducer(funcionParaReducer, { count: 0 })
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            Contador: {state.count}
            <button onClick={() => dispatch({ type: 'sumar 1' })}>+</button>
            <button onClick={() => dispatch({ type: 'restar 1' })}>-</button>

        </div>
    )
}
