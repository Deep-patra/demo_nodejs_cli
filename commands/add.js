import conf from 'conf';
import chalk from 'chalk';

const store = new conf();

const add = () => {
  console.log(
    chalk.green.bold('Enter the task you want to add\n')
  );

  process.stdin.on('data', (data) => {
    const task = {
      text: data.toString(),
      done: false,
    };

    if (store.get('tasks') === undefined) {
      store.set('tasks', []);
    }


    const tasks = store.get('tasks');
    tasks.push(task);
    store.set('tasks', tasks);

    // inform the user the task has been added
    console.log(
      chalk.green.bold('The task has been added')
    );
    process.exit(0);
  });
};

export default add;