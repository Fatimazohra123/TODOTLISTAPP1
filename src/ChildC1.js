import React ,{useState}from 'react'
import { useRef } from 'react'


export default function ChildC1({txt,removf,editF,idp,setParent}) {
  const[editText,setEditText]=useState(txt)
  const[btnState,setBtnState]=useState("Edit")
  const inpRef = useRef();
  const btnRef = useRef();
  const handleEdit =(id)=>{
    let state = inpRef.current.disabled;
    if (state) {
      inpRef.current.disabled = false;
      setBtnState('save') 
      
    }
    else{
      setBtnState('Edit') 

      setParent(prevState=>{
        let newState = prevState.map(task=>{
          if (task.id==id) {
            return {...task,nom:inpRef.current.value}
          }
          return task
        })
        return newState;
      })
      inpRef.current.disabled = true;
    }
  }
  return (
    <div  style={{textAlign:"center"}} >
     <input type="text" disabled ref={inpRef} value={editText == txt ? txt : editText} className="text" onChange={e=>setEditText(e.target.value)} /><br></br>
     <input type="button" value="remove" onClick={removf} className="btn button1" />
     <input type="button" value="done" onClick={editF} className="btn button2"  />
     <input type="button" ref={btnRef} value={btnState} onClick={e=>handleEdit(idp)} className=" btn button3 " />
    </div> 


  )
}
