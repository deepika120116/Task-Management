import { useReducer } from "react";
const Bank = () => {
    const transactionReducer = (state, action) => {
        switch (action.type) {
            case "DEPOSIT":
                return state + action.payload;
            case "WITHDRAW":
                return state - action.payload;
            default:
                return state;
        }
    };
    const [state,dispatch]=useReducer(transactionReducer, 1000);
    return (
        <>
            <div>Balance is {state}</div>
            <button onClick={()=>dispatch({type:"DEPOSIT",payload:500})}>Deposit</button>
            <button onClick={()=>dispatch({type:"WITHDRAW", payload:500})}>Withdraw</button>
        </>
    );
};

export default Bank;