import React from 'react';
const Form = ({inputText, setInputText, toDoList, setToDoList}) =>{
    const inputHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToDoList([...toDoList, {text: inputText, id: Math.random() * 100 ,completed: false}]);
        setInputText("");
    }
    return (<div className='form-field'>
            <form>
                <input className="todo-field" type="text" placeholder="Add new list item" value={inputText} onChange= {inputHandler}/>
                <button className="add-button" type='submit' onClick={submitHandler}>Add</button>
            </form>
        </div>
    );
}

export default Form;