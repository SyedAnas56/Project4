#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
let wannaAdd = await inquirer.prompt([
    {
        name: "add",
        type: "confirm",
        message: "Do you want to add something in your todo list?",
        default: false,
    },
]);
if (wannaAdd.add === true) {
    while (condition) {
        let addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What do you want to add?",
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add more?",
                default: false,
            },
        ]);
        todos.push(addTask.todo);
        condition = addTask.addMore;
        console.log(todos);
    }
}
else {
    console.log("No tasks were added to your todo list.");
}
let condition2 = true;
if (todos.length > 0) {
    let deleteTask = await inquirer.prompt([
        {
            name: "wannaDelete",
            type: "confirm",
            message: "Do you want to delete any task?",
            default: false,
        },
    ]);
    if (deleteTask.wannaDelete === true) {
        while (condition2) {
            let taskToDelete = await inquirer.prompt([
                {
                    name: "taskNum",
                    type: "number",
                    message: "Enter the number of the task you want to be deleted",
                },
                {
                    name: "deleteMore",
                    type: "confirm",
                    message: "Do you want to delete more?",
                    default: false,
                },
            ]);
            let del = taskToDelete.taskNum - 1;
            console.log(`deleted task : ${todos.splice(del, 1)}`);
            console.log(`remaining tasks : ${todos}`);
            condition2 = taskToDelete.deleteMore;
        }
    }
    else {
        console.log(todos);
    }
}