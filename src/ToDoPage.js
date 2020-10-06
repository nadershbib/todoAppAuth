import React, { useEffect, useState } from 'react'
import db from './firebase';
// import './ToDoPage.css';
import './ToDoPage.scss'
import firebase from 'firebase'
import Swal from 'sweetalert2'
function ToDoPage({user}){ 

   const [input,setInput] = useState("");
   const [todos,setToDos] = useState([]);

    // const userDisplayName = user.displayName;
    // console.log(userDisplayName);
   
   useEffect(()=>{
     db.collection(user.displayName.trim()).orderBy('timestamp','desc').onSnapshot(snapshot=>{
         setToDos(snapshot.docs.map(doc=>(
             {
                 id:doc.id,
                 data:doc.data()
             }
         )))
     });


   },[])

  const handleSubmit = (e)=>{

    if(input.trim().length ===0){
        alert('add something!');
        return ;
    }

    e.preventDefault();

    db.collection(user.displayName.trim()).add({
        todo:input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        time:new Date().toLocaleString()
    });

    setInput('');


  }

  const deleteItem = (itemID) =>{
      db.collection(user.displayName).doc(itemID).delete();
  }


   const editTodo = async (todoId)=>{

    const inputValue = '';

    const { value: newToDo } = await Swal.fire({
        title: 'Update your ToDo',
        input: 'text',
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You did not update your ToDo!'
          }
        }
      })
      
      if (newToDo) {
         db.collection(user.displayName).doc(todoId).set({
             todo:newToDo
         },{merge:true})
      }
   }

    return (
        <div className="ToDoPage__container">
            <div className="todo">
                 <div className="todo__title">
                      <h1>Your ToDos</h1>
                 </div>

                 <form onSubmit={handleSubmit} className="todoform__container">
                      
                      <input type="input" className="input1" placeholder="Add Items ..." value={input} onChange={e=>setInput(e.target.value)} />
                      <input type="submit" value="+" className="submit-btn" />
                 </form>

                <ul className="items">
                    {
                        todos.map((todoObj,index)=>{
                            return( 
                              <li className="todo-item">{todoObj.data.todo}
                                <span className="delete-icon" onClick={()=>deleteItem(todoObj.id)}>
                                  <i class="fas fa-trash-alt"></i>
                                </span>
                                <span className="edit-todo" onClick={()=>editTodo(todoObj.id)}>
                                <i class="fas fa-edit"></i>
                                </span>

                                <span className="todo-time">
                                     
                                         {todoObj.data.time}

                                </span>


                              </li>
                             )
                        })
                    }
                </ul>



            </div>

             
            
        </div>
    )
}

export default ToDoPage;
