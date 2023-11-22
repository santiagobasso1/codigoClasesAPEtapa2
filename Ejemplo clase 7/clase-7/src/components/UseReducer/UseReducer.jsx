import React from 'react'
import { useReducer } from 'react'
export default function UseReducer() {
    const funcionParaReducer = (state, action) => {
        switch (action.type) {
            case 'sumar':
                return { count: state.count + 1 }
            case 'restar':
                return { count: state.count - 1 }
            case 'mult':
                return { count: state.count * 2 }
            case 'div':
                return { count: state.count / 2 }
            default:
                throw new Error()
        }
    }


    const [state, dispatch] = useReducer(funcionParaReducer, { count: 0 })




    return (
        <div className='fondo'>
            <br />
            <br />
            <br />
            <br />


            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({ type: 'sumar' })}>+</button>
            <button onClick={() => dispatch({ type: 'restar' })}>-</button>
            <button onClick={() => dispatch({ type: 'mult' })}>*</button>
            <button onClick={() => dispatch({ type: 'div' })}>/</button>


            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
