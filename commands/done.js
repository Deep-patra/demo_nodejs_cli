import conf from 'conf';
import chalk from 'chalk';

const parse_value = (value) => {
  const value = parseInt(value);
  
  if (isNaN(value)) throw new error('Invalid value');

  return value;
};

const done = (str) => {

  let index = null;

  // if index is not a number
  try {
    index = parse_value(str);
  } catch(error) {
    console.log(
      chalk.red.bold("Invalid index")
    );
    process.exit(0);
  }

  const store = new conf();
  const tasks = store.get('tasks');

  if (index > tasks.length - 1) {
    console.log(
      chalk.red.bold(`No tasks at index ${index} exists`)
    );
  }

  // set the done property to true
  tasks[index].done = true;

  store.set('tasks', tasks);

  console.log(
    chalk.green.bold('done!')
  );

};

export default done;