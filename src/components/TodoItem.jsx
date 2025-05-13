import React from "react"
const TodoItem = ({todo, handleComplete,handleDelete,handleEdit}) => {
    let opacity = todo.done?0.2 : 1
    return(
<div className="todoItem">
<div className="todoContent">
    <input onChange={()=>handleComplete(todo.id)} type="checkbox" checked={todo.done}/>
    <span style={{opacity:opacity}}>{todo.title}</span>
</div>
<div className="todoMeta">
    <button  onClick={()=> handleEdit(todo.id)} className="btn editButton">Edit</button>
    <button onClick={()=>handleDelete(todo.id)} className="btn deleteButton">Delete</button>
</div>
</div>
    )
}
export default TodoItem