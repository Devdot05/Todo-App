
    const allTodo = [];
    let myTodo = document.getElementById('todo');

    const addTodo = () => {
        if (myTodo.value == "") {
            alert('I cannot be empty');
        } else {
            allTodo.push(myTodo.value);
            console.log(allTodo);
            myTodo.value = "";
            showResult();
        }
    };

    const showResult = () => {
        let todoContent = "";
        for (let i = 0; i < allTodo.length; i++) {
            todoContent += `
                <div class="todo-item shadow">
                    <p>${allTodo[i]}</p>
                    <button onclick="editBtn(${i})" class="btn btn-success">Edit</button>
                    <button onclick="deleteBtn(${i})" class="btn btn-danger">Delete</button>
                </div>
            `;
        }

        document.getElementById('todoArea').innerHTML = todoContent;
        ShowCount();
    };

    const deleteBtn = (index) => {
        let comfamu = confirm('Are you sure you want to delete?');
        if (comfamu === true) {
            allTodo.splice(index, 1);
            showResult();
        }
    };

    const editBtn = (index) => {
        let newTodo = prompt('Enter your new todo', allTodo[index]);
        if (newTodo !== null && newTodo.trim() !== "") {
            allTodo[index] = newTodo;
            showResult();
        }
    };

    const clearTodo = () => {
        allTodo.length = 0; // Clear the array correctly
        showResult();
    };

    const ShowCount = () => {
        document.getElementById("taskCount").innerHTML = allTodo.length;
    };
