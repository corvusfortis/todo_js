let input = document.querySelector("#todo-input");
let addBtn = document.querySelector('#add');






addBtn.addEventListener('click', addTodo);




function addTodo(){
    let newTodo = document.createElement('p');
    newTodo.innerHTML = input.value;

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Изменить";

    editBtn.addEventListener('click', function() {
        newTodo.innerHTML = '<input>';
        let editInput = newTodo.querySelector('input');
        editInput.addEventListener('blur', function() {
            newTodo.innerHTML = editInput.value;
        })
    })

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Удалить";

    delBtn.addEventListener('click', function() {
		newTodo.remove();
        editBtn.remove();
        delBtn.remove();
	});

    document.body.appendChild(newTodo);
    document.body.appendChild(editBtn);
    document.body.appendChild(delBtn);

    function editText(){
        newTodo.innerHTML = this.value;
    }
}




console.log("test")