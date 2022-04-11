#! /usr/bin/env node

import { program } from 'commander';
import list from './commands/list.js';
import add from './commands/add.js';
import done from './commands/done.js';

program
  .command('list')
  .description('List all the todos tasks')
  .action(list);

program
  .command('add')
  .description('add a task to the list')
  .action(add);

program
  .command('done')
  .argument('<Integer>', 'Index of the task which is completed')
  .description('when the tasks are completed')
  .action(done);

program.parse();