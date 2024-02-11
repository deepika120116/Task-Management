import Container from 'react-bootstrap/Container';
import FormTask from './components/FormTask';
import NavBar from './components/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddListTable from './components/AddListTable'
import Bank from './components/Bank';
function App() {


    return (
        
        <Container>
<NavBar />
<Row className="justify-content-md-center">
<Col lg="6">
<FormTask />
<AddListTable/>
</Col>
</Row>
</Container>
); 


}

export default App;