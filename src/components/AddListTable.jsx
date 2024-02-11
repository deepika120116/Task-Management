import React,{ useContext, useState } from 'react';	
import { Button } from 'react-bootstrap';	
import Table from 'react-bootstrap/Table';	
import MyVerticallyCenteredModal from './UpdateTask';	
import { taskContext } from '../context/TaskContext';
	
const AddListTable = () => {	
const [modalShow, setModalShow] = useState(false);	

    const { state, dispatch } = useContext(taskContext);
    const { taskList } = state;
const updateTask = (task) => {	
console.log("updated");	
    setModalShow(true);	
    dispatch({ type: "SET_SELECTED_TASK", payload:task})
};	
const deleteTask = (task) => {	
    console.log("deleted");	
    dispatch({ type: "REMOVE_TASK", payload: task });
};	
return (	
<>	
<Table striped bordered hover className='my-5'>	
<thead>	
<tr className="text-center">	
<th>#</th>	
<th>Title</th>	
<th>Description</th>	
<th>Action</th>	
</tr>	
</thead>	
            <tbody>	
                {taskList && taskList.map((task, index) => {
                    return (
                        <tr className="text-center" key={task.id}>
                        
                        
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <Button className="mx-3" onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button>
                                <Button onClick={() => deleteTask(task)}><i className="bi bi-trash-fill"></i></Button>
                            </td>
                        </tr>
                    );
                
                })}
</tbody>	
</Table>	
<MyVerticallyCenteredModal	
show={modalShow}	
onHide={() => setModalShow(false)}/>	
</>	
);	
};	
export default AddListTable;	