import React, { useRef, useState } from 'react'
 
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
                mySrc:"https://i.pinimg.com/originals/dc/a2/1b/dca21be92ef10ecd0b4974fa648d6df3.png"
            }
        ])
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
                <ul key={e.id} style={{display:"flex",justifyContent:"start",flexWrap:"wrap",border:"3px solid black",borderRadius:"10px",width:"75%",margin:"auto",padding:"10px 10px 0px 10px",marginTop:"20px"}}>
                    <img src={e.isDone ? "https://cdn.pixabay.com/photo/2012/04/18/19/01/check-37583_640.png":"https://thumbs.dreamstime.com/b/green-circle-transparent-background-permission-sign-add-any-symbol-to-create-tag-allows-activity-180798801.jpg"}
                    style={{width:"50px",height:"50px",marginRight:"30px"}} onClick={() => doneElement(e.id)}>
 
                    </img>
                    
                    {
                        e.isDone ?
                        (
                            <h1 style={{fontSize:"2em",textDecoration: 'line-through',fontWeight:"bold",marginTop:"5px",marginRight:"20px"}}>{e.id}. {e.title}</h1>
                        )
                        :
                        (
                            <h1 style={{fontSize:"2em",fontWeight:"bold",marginTop:"5px",marginRight:"20px"}}>{e.id}. {e.title}</h1>
                        )
                    }
                    
                    <img src='https://static.vecteezy.com/system/resources/previews/024/696/736/original/red-close-icon-free-png.png'
                    style={{width:"60px",height:"60px",justifySelf:"end",marginTop:"-5px"}} onClick={() => deleteElement(e.id)}>
 
                    </img>
                </ul>
 
            ))
        }
 
    </section>
  )
}