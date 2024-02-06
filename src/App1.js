import React, { useState } from "react";
import "./index.css";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ToDoLists  from "./Components/ToDoLists";
// import DeleteIcon from '@mui/icons-material/Delete';
const App1 = ()=>{
    const [item,setItem] = useState("");
    const[list,setList] = useState([])

    const listItems = (event)=>{
        setItem(event.target.value);
    }
    const listnewItems = ()=>{
        if(item.trim()){
            if(list.length <8){
                setList((prevValue)=>{
                    return [...prevValue,item]
                });
            }

        }
    }
    
   
    
   

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a items" value={item} onChange={listItems} />
                    <Button onClick={listnewItems} variant="contained" sx={{marginLeft:"20px",borderRadius:"50%",minHeight:"50px",
                    minWidth:"50px",backgroundColor:"purple"}}>
                    <AddIcon></AddIcon></Button>
                    
                    
                    <ol>
                   
                        {list.map((value,index)=>{
                            return  <ToDoLists key ={index} text={value}></ToDoLists>
                        })}
                    </ol>
                    <Button/>
                </div>
            </div>
        </>
    );
}

export default App1;