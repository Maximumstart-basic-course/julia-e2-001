const todo = {
  tasks: [],
  checker(...params) {
    params.forEach((el) => {
      if (el === undefined || typeof el !== 'string') {
        throw new Error('Ошибка в указании параметра');
      }
    });
  },
  addTask(title, desc, dueDate) {
    this.checker(title, desc, dueDate);
    this.tasks.push({
      title,
      desc,
      dueDate,
    });

    console.info('Добавлен таск: ', this.tasks[this.tasks.length - 1]);
  },
  getTasks(date) {
    const filtered = this.tasks.filter(el => el.dueDate === date);

    if (date === undefined) {
      return this.tasks;
    } else if (typeof date !== 'string') {
      throw new Error('Ошибка в указании параметра');
    } else if (!filtered.length) {
      console.info(`Тасков на ${date} нет.`);
    } else {
      return filtered;
    }
  },
  deleteTask(title) {
    this.checker(title);
    const result = this.tasks.find((el, i) => {
      if (el.title === title) {
        this.tasks.splice(i, 1);
        return true;
      }
      return false;
    });

    if (result === undefined) {
      console.info(`Таск '${title}' не найден.`);
    } else {
      return ('Таск удален.');
    }
  },
};

todo.addTask('Feed the cat', 'He will die if I don\'t do it', '26-06-2018');
