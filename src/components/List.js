import React from 'react';
import ToDo from './ToDo';

const List = ({toDoList, setToDoList}) =>{
    const clearHandler = () => {
        setToDoList([]);
    };
    return (<div>
        <ul>
            {toDoList.map((toDo) => (
                <ToDo 
                setToDoList={setToDoList} 
                toDoList={toDoList}
                toDo={toDo}
                text={toDo.text} 
                key={toDo.id}/>
            ))}
        </ul>
        <footer>
            <button className="clear-button" onClick={clearHandler}>clear all</button> 
        </footer>
    </div>
    );
}

export default List;