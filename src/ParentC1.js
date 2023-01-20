import React, { useState } from 'react';
import ChildC1 from './ChildC1';
import { v4 as uuid } from 'uuid';
import "./TODOLIST.css"
export default function ParentC1() {
  const [Parent, setParent] = useState([
    { nom: "reading my favorite collen hover's novel", id: uuid(), done: false },
    { nom: 'journaling', id: uuid(), done: true },
    { nom: 'do my skin care', id: uuid(), done: true },
    { nom: 'spanish course', id: uuid(), done: true },

  ])
  const [tache, settache] = useState('');
  const addtask = () => {

    let ntache = [...Parent];
    let nouvtache = {};
    nouvtache.id = uuid();
    nouvtache.nom = tache;
    ntache.push(nouvtache);
    setParent(ntache);
    settache('')
  }
  const removetask = (idp) => {
    let nouvtaches = Parent.filter((t) => {
      return t.id !== idp

    })
    setParent(nouvtaches);

  }
  const editStyle = (id) => {
    let ntask = Parent.map((t) => {
      if (t.id === id) {
        t.done = !t.done;
      }
      return t;
    })
    setParent(ntask)
  }


  return (

    <div >

      <h1 > TO DO LIST</h1>
      <form >
        <input type="text" value={tache} onChange={(e) => { settache(e.target.value) }} placeholder="your tasks" className=" input" />
        <input type="button" value="CREATE" onClick={addtask} className="btn"  />
      </form>

      <br></br>
      <ul>
        {
          Parent.map((t) => {
            return <li style={{ listStyleType: "none" }} key={t.id} ><ChildC1 idp={t.id} txt={t.nom} removf={() => removetask(t.id)} setParent={setParent} /></li>
          })
        }

      </ul>


    </div>

  )
}
