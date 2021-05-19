import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItem) => {
      return oldItem.filter((arrelem, index) => {
        return index !== id;
      })    
    })
  };

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder='Add a Items' value={inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map( (itemval, index) => {
              return <ToDoList 
              key={index} 
              id={index} 
              text = {itemval} 
              onSelect = {deleteItems} 
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;