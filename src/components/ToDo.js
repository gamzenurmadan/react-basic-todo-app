import React from "react";
import {BsFillCheckCircleFill} from 'react-icons/bs';

const ToDo = ({text, setToDoList, toDoList, toDo}) => {
    const completedHandler = () => {
        setToDoList(toDoList.map((item) => {
            if(item.id === toDo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }) 
        )
    };
    return (
        <div className="list-field">
            <li><button onClick={completedHandler}><BsFillCheckCircleFill /></button>{text}</li>
        </div>
    )
}

export default ToDo;