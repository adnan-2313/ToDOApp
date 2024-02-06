import React, { useState } from 'react'
import ToDoLists from './Components/ToDoLists';

const  App =()=> {
  const [list,setList] = useState();
  const [items,setItems] = useState([]);

  const itemEvents = (event)=>{
    setList(event.target.value);
  }
  const listOfItems = ()=>{
    if (list && list.trim()) {
      if (items.length < 9) setItems((oldItems) => {
        return [...oldItems, list];
      });
      setList("");
    }

  }
  const deleteitems=(id)=>
  {
    setItems((oldItems)=>{
      return oldItems.filter((ele,i)=>{
          return i !==id;
      })
    })
    
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" value = {list} placeholder='Add a Items' onChange={itemEvents}/>
          <button className='btn' onClick={listOfItems}> + </button>

          <ol>
              {items.map((ival,index)=>{
               return  <ToDoLists key={index} 
               id = {index} 
               text={ival}
                onSelect={deleteitems}
               />
              })
              }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
