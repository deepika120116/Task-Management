import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React,{ useState,useContext, useEffect } from 'react';
import { taskContext } from '../context/TaskContext';

const MyVerticallyCenteredModal = (props) => {
    const { state, dispatch } = useContext(taskContext);
    const { selectedTask } = state;
const updateTask = (e) => {
    props.onHide();
    dispatch({type:"UPDATE_TASK",payload:{title,description,id}})
};
const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState(0);

    useEffect(() => {
        if (Object.keys(selectedTask).length !== 0) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
            setId(selectedTask.id);
        }
    }, [selectedTask]);
return (
<Modal
{...props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<Modal.Header closeButton>
<Modal.Title id="contained-modal-title-vcenter">
Update Task
</Modal.Title>
</Modal.Header>
<Modal.Body>
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
</Form>
</Modal.Body>
<Modal.Footer>
<div className="text-end"> 
<Button variant="primary" type="submit" onClick={(e)=>updateTask(e)}>
Update Task
</Button>
</div>
</Modal.Footer>
</Modal>
);
}

export default MyVerticallyCenteredModal;