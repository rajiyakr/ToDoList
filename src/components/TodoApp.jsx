import { useState } from "react"
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';
const TodoApp =()=>{
    //Todo item state
    const[todoItem,setTodoItem] = useState("")
    const[editingId, setEditingId] = useState(null)
    //tode item state handler
    const handleInputChange = (e) => {
        setTodoItem(e.target.value)
    }
    //todod array state
    const[todos,setTodos] = useState([])
    //handle submit
    const handleSubmit = ()=>{
        if(editingId){
            setTodos(prev=>{
                return prev.map(item=>{
                return item.id == editingId ? {...item, title:todoItem} : item
            })
        })
        }
        else{
            let newTodoObj = {
            id:uuidv4(),
            title:todoItem,
            done:false
        }
        setTodos((prev )=>{
            return[...prev ,newTodoObj]
        })
        }
        setEditingId(null)
        setTodoItem("");
    }
    //handle complete
    const handleComplete=(id)=>{
        setTodos(prev =>{
            return prev.map(item=>{
                return item.id==id? {...item, done:!item.done}: item
            })
        })
    }
    //handle delete
    const handleDelete=(id)=>{
        setTodos(prev=>{
            return prev.filter(item => item.id !== id)
        })
    }
    //handleEdit
    const handleEdit=(id)=>{
        setEditingId(id)
        let editingTodo = todos.find(item=>item.id==id)
        setTodoItem(editingTodo.title)
    }
    return(
        <>
        <div className="todoApp">
            <div className="todoForm">
            <input onChange={handleInputChange} className="todoInput" type="text" value={todoItem}/> 
        <button onClick={handleSubmit} className="btn addButton">{editingId? "Edit":"Add"} Todo</button>        
    </div>
    <div className="todoList">{
            todos.map((todo,i)=>{
                return<TodoItem key={todo.id} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} handleEdit={handleEdit}/>
            })
    }
    </div>
</div>
</>
    )
}
export default TodoApp