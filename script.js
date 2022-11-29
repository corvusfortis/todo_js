let input = document.querySelector("#todo-input");
let addBtn = document.querySelector('#add');






addBtn.addEventListener('click', addTodo);
input.addEventListener('click', () => {
    input.value = "";
    input.placeholder = "";
    });



function addTodo(){
    let todoBlock = document.createElement('div');
    todoBlock.classList.add('todo-block')

    let newTodo = document.createElement('p');
    newTodo.innerHTML = input.value;
    newTodo.classList.add("todo");


    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Изменить";
    editBtn.classList.add("todo");

    editBtn.addEventListener('click', function() {
        newTodo.innerHTML = '<input>';
        let editInput = newTodo.querySelector('input');
        editInput.addEventListener('blur', function() {
            newTodo.innerHTML = editInput.value;
        })
    })

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Удалить";
    delBtn.classList.add("todo");

    delBtn.addEventListener('click', function() {
		newTodo.remove();
        editBtn.remove();
        delBtn.remove();
	});

    document.body.appendChild(todoBlock).appendChild(newTodo);
    document.body.appendChild(todoBlock).appendChild(editBtn);
    document.body.appendChild(todoBlock).appendChild(delBtn);

    function editText(){
        newTodo.innerHTML = this.value;
    }
}




console.log("test")