let tasks = [];

// возможность просмотра задач
function showTasks() {
    if (tasks.length === 0) {
        alert("У Вас нет задач на сегодня");
    } else {
        const result = tasks.reduce((acc, item, index) => acc + `${index + 1}. ${item}\n`, "Ваши задачи на день: \n");
        alert(result);
    }
}

// возможность добавления задач
function addTasks() {
    const newTasks = prompt("Введите задачу")
    if (newTasks) {
        tasks.push(newTasks);
        showTasks();
    } else {
        alert("Задача не может быть пустой")
    }
}

// возможность удаления задач
function deleteTask() {
    if (tasks.length === 0) {
        alert("У Вас нет задач на сегодня!")
    }
    showTasks();
    const numberTask = +prompt("Введите номер задачи, которую хотите удалить") - 1;

    if (numberTask < 0 || numberTask > tasks.length || isNaN(numberTask)) {
        alert("Задача не найдена");
        return;
    }
    const deletedTask = tasks.splice(numberTask, 1)
    alert(`Вы удалили задачу ${deletedTask}`);
    showTasks();
}

// задача помечена как выполненная
function completeTasks() {
    // showTasks();
    let tasksName = +prompt("Введите номер задачи для отметки как выполненной:") ;
    if (tasksName >= 1 && tasksName <= tasks.length) {
        alert(`Задача "${tasks}" помечена как выполненная!`);
    } else {
        alert("Нет такой задачи!");
    }
}

// объединение
function main() {
    let choice = null;
    do {
        choice = +prompt(
            "Выберите действие: \n 1: Показать задачи \n 2: Добавить задачу \n 3: Удалить задачу \n 4: Пометить задачу \n 0: Выход из программы");

        switch (choice) {
            case 0:
                alert("Выход из программы");
                break;
            case 1:
                showTasks();
                break;
            case 2:
                addTasks();
                break;
            case 3:
                deleteTask();
                break;
            case 4:
                completeTasks();
                break;
            default:
                alert("Некорректный выбор");
                break;
        }
    } while (choice !== 0);
}

main();

