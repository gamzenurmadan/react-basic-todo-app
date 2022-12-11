import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import React, {useState} from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  return (
    <main >
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Form inputText={inputText} setInputText = {setInputText} toDoList={toDoList} setToDoList={setToDoList}/>
        </Row>
        <Row>
          <List setToDoList={setToDoList} toDoList={toDoList} />
        </Row> 
      </Container>
    </main>
  );
}

export default App;
