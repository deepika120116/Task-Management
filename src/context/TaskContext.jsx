import { createContext, useReducer } from "react";

export const taskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TASK":
                const id = Math.random() * 100;
                let list = { ...action.payload, id };
                return { ...state, taskList: [...state.taskList, list] };
            case "REMOVE_TASK":
                const deletedTask = state.taskList.filter(task => task.id !== action.payload.id);
                return { ...state,taskList:deletedTask };
            case "UPDATE_TASK":
                const updatedList = state.taskList
                    .map(task => task.id === action.payload.id ? action.payload : task);
                return { ...state, taskList: updatedList };
            case "GET_TASK":
                return state.taskList;
            case "SET_SELECTED_TASK":
                return { ...state, selectedTask: {...action.payload } };
            case "GET_SELECTED_TASK":
                return state.selectedTask;
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(taskReducer, {
        taskList: [],
        selectedTask: {}
    });
    return (
        <taskContext.Provider value={{state,dispatch}}>
            {children}
        </taskContext.Provider>
        
    );
}