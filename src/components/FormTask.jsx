import Button from 'react-bootstrap/Button';	
import Form from 'react-bootstrap/Form';	
import { useState,useContext} from 'react';	
import { taskContext } from '../context/TaskContext';
	
const FormTask = () => {	
	
    const { state, dispatch } = useContext(taskContext);
    const [title, setTitle] = useState("");	
    const [description, setDescription] = useState("");	
    const [id, setId] = useState(0);
	
    const addTask = (e) => {	
    e.preventDefault();	
    dispatch({ type: 'ADD_TASK', payload: { title, description } });
    setTitle("");
    setDescription("");
    setId("");
    };	
        return (	
        <Form>	
            <Form.Group className="mb-3" controlId="formTaskTitle">	
                <Form.Label>Task Title</Form.Label>	
                <Form.Control type="text" placeholder="Enter the Task Title"	
        value={title} onChange={(e)=>setTitle(e.target.value)}/>	
             </Form.Group>	
            
        <Form.Group className="mb-3" controlId="formTaskDescription">	
        <Form.Label>Task Description</Form.Label>	
        <Form.Control type="text" placeholder="Enter the Task Description"	
        value={description} onChange={(e)=>setDescription(e.target.value) } />	
        </Form.Group>	
        <div className="text-end"> 	
        <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>	
        Add Task	
        </Button>	
        </div>	
        </Form>	
);	
};	
export default FormTask;	