const addForm = document.querySelector('#add-form');
const form = document.querySelector('#add-form form');
const input = document.querySelector('#add-form input');
const addBtn = document.querySelector('#add-form button');
const textSpan = document.querySelector('span#text');
const loadBtn = document.querySelector('#load');
const list = document.querySelector('ul#list');

loadBtn.addEventListener('click', function() {
    let result = fetch('data/tasks.json'); // retrun Promise object
    result.then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        for (i = 0; i < json.length; i++) {
            list.innerHTML += '<li>' + json[i].title + '</li>';
        }
    });
});

let tasks = []; // array
// JS object
let task = {
    title: "Learn JavaScript",
    level: "beginner",
    completed: true,
    isCompleted: function() {
        if (this.completed) {
            alert('Yes');
        } else {
            alert('No');
        }
    }
};

let person = {
    firstName: '',
    lastName: '',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

person.firstName = 'Mohammed';
person.lastName = 'Safadi';
// alert(person.fullName());

task.title = "Learn HTML"
// alert(task.title);
task.completed = false;
// task.isCompleted();

input.addEventListener('keyup', function(e) {
    console.log(e.key);

    textSpan.innerHTML = input.value;
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    list.innerHTML += '<li>' + input.value + '</li>';
    input.value = "";
    addForm.classList.add('d-none');
});


const btn = document.getElementById('add');
btn.innerHTML = 'Add new <b>Task</b>!';


list.innerHTML = '<li>First Task</li>';
list.innerHTML += '<li>Second Task</li>'; //list.innerHTML = list.innerHTML + '<li>Second Task</li>'

// click, dbclick, mouseenter, mouseleave, keypress, keyup, ...
btn.addEventListener("click", function() {
    //let task = prompt('Enter the task name:');
    //list.innerHTML += '<li>' + task + '</li>';
    addForm.classList.remove('d-none');
});

btn.addEventListener("click", function() {
    let h1 = document.querySelector('h1');
    h1.style.color = "red";
    h1.style.backgroundColor = "#000";
});