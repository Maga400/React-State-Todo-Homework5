import React, { useRef, useState } from 'react'
import Item from './Item';
 
export default function Todo() {
 
    const [element,setElement] = useState([]);
    const [text,setText] = useState("");
    const count = useRef(0);
    function handleClick()
    {
        count.current+=1;
        setElement([
            ...element,
            {  
                id:count.current,
                title:text,
                isDone:false,
            }
        ])
        setText("");
    }
 
    function deleteElement(id)
    {
        setElement(element.filter((e) => e.id !==id))
    }
 
    function doneElement(id)
    {
        setElement(element.map((e) => {
            if(e.id ==id)
            {
                if(e.isDone == false)
                {
                    e.isDone = true;
                }

                else
                {
                    e.isDone = false;
                }
            }
 
            return e;
           
        }))
    }
 
  return (
    <section style={{padding:"50px",borderRadius:"20px",border:"5px solid black",width:"30%",margin:"auto",marginTop:"5%",backgroundColor:"white"}}>
        <input style={{fontSize:"1.5em",padding:"10px",borderRadius:"10px"}} value={text} onChange={(e) => {setText(e.target.value)}}></input>
        <button style={{fontSize:"1.5em",padding:"10px",marginLeft:"10px",backgroundColor:"green",color:"white",borderRadius:"10px",width:"23%"}} onClick={handleClick}>Add</button>
        {
            element.map((e) =>
            (
                <Item e={e} deleteElement={deleteElement} doneElement={doneElement}></Item>
 
            ))
        }
 
    </section>
  )
}