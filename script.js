let input = document.querySelector("#todo-input");
let addBtn = document.querySelector('#add');
let container = document.querySelector("#container");





addBtn.addEventListener('click', addTodo);
input.addEventListener('click', () => {
    input.value = "";
    input.placeholder = "";
    });



function addTodo(){
    if(input.value !== "" && input.value !== input.placeholder){

    

    let todoBlock = document.createElement('div');
    todoBlock.classList.add('todo-block')

    let newTodo = document.createElement('p');
    newTodo.innerHTML = input.value;
    newTodo.classList.add("todo");


    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    editBtn.classList.add("todo", "todo-btn");

    editBtn.addEventListener('click', function() {
        newTodo.innerHTML = '<input>';
        let editInput = newTodo.querySelector('input');
        editInput.addEventListener('blur', function() {
            if(editInput.value !== ""){
            newTodo.innerHTML = editInput.value;
            }
        })
    })

    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
    delBtn.classList.add("todo", "todo-btn");

    delBtn.addEventListener('click', function() {
		newTodo.remove();
        editBtn.remove();
        delBtn.remove();
	});

    container.appendChild(todoBlock).appendChild(newTodo);
    container.appendChild(todoBlock).appendChild(editBtn);
    container.appendChild(todoBlock).appendChild(delBtn);

    function editText(){
        newTodo.innerHTML = this.value;
    }
    }
}