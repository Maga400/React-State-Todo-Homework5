import React from 'react'

export default function Item({e,deleteElement,doneElement}) {
  return (
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
  )
}
