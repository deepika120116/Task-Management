import { useContext } from "react";
import { taskContext } from "../context/TaskContext";

const NavBar = () => {
    const { state } = useContext(taskContext);
return (
<>
<h1 className="text-primary text-center my-4">Project Management</h1>
        <p className="lead text-center">{`Currently ${state.taskList.length} task(s) are pending`}</p>
</>
);
};
export default NavBar;