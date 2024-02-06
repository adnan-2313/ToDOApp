import {React,useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const ToDoLists = (props) => {
    const[click,setClick]  = useState(false);

    const cutIt = () =>{
        setClick(true);
    }
    return (

        <>
            <div className="todo_style">
            <span onClick={cutIt} className="delbtn">
            <DeleteIcon className="icon" /></span> 
            
                <li style={{textDecoration: click ? "line-through" : "none"}}>{props.text}</li>

            </div>
        </>
    )
}

export default ToDoLists;
