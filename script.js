let button= document.getElementById('add')
let todoList=document.getElementById('todoList')
let input=document.getElementById('input');

//declaring array for storing given input
let todos=[];

window.onload= ()=>{
   todos=JSON.parse(localStorage.getItem('todos')) || []
   todos.forEach(todo=> addtodo(todo))
}

button.addEventListener('click',()=>{

//pushing the input value into array
todos.push(input.value)
localStorage.setItem('todos',JSON.stringify(todos))
addtodo(input.value)
input.value=''
 
})
//display the input value on below to the text box
function addtodo(todo){
   let para= document.createElement('p') //create p tag 
   para.innerText=todo                   //gives value into p tag
   todoList.appendChild(para)            //include p tag into todolist tag
                                    //upto this input was displayed     

para.addEventListener('click',()=>{
para.style.textDecoration= 'line-through'
remove(todo)
})
para.addEventListener('dblclick',()=>{
todoList.removeChild(para) 
remove(todo)
})
}

function remove(){
    let index= todos.indexOf(todo)
    if(index > -1){
        todos.splice(index,1);
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}