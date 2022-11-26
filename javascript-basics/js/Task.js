function Task(title, completed) {
    this.title = title;
    this.completed = completed;

    this.isCompleted = function () {
        if (this.completed) {
            alert('Yes');
        } else {
            alert('No');
        }
    }
}
let task1 = new Task('Learn CSS', false);
alert(task1.title);

let task2 = new Task('Learn PHP', true);
alert(task2.title);
task2.isCompleted();
