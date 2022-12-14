#!/usr/bin/env node

import chalk from "chalk";
import { exec } from "child_process";
import figlet from 'figlet';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

figlet('JS Project Setup', (err, data) => {
  console.log(chalk.blueBright(data));

  console.log('\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');

  console.log('\nš Used Tools:');
  console.log(`${chalk.greenBright('ā')} HTML5`);
  console.log(`${chalk.greenBright('ā')} SASS`);
  console.log(`${chalk.greenBright('ā')} JavaScript`);

  console.log(chalk.blueBright('\n\nGive your project a name!'));
  rl.question(chalk.gray('Enter the name: '), projectName => {
    console.log(`\nYour project ${chalk.greenBright(projectName)} will be created...`);
    exec('git clone https://github.com/juniorcoder2008/dev-env.git', (e, stdout, stderr) => {
      console.log(`${chalk.greenBright('ā')} Copied Git-Repository ${chalk.greenBright('ā')}`);

      exec(`ren dev-env ${projectName}`, (e, stdout, stderr) => {
        console.log(`${chalk.greenBright('ā')} Renamed project folder ${chalk.greenBright('ā')}`);
        exec(`cd ${projectName} && npm i`, (e, stdout, stderr) => {
          console.log(`${chalk.greenBright('ā')} Installed all dependencies ${chalk.greenBright('ā')}`);

          console.log(chalk.greenBright('\n\nā The Setup has been completed succesfully! ā'));

            rl.question('\nDo you want to quit or start the project server? (q/s) ', answer => {
              if(answer != 's') {
                console.log(chalk.redBright('\n\nSELF DESTRUCTION IN:'))
                setTimeout(() => {
                  console.log(chalk.redBright('3'));
                  setTimeout(() => {
                    console.log(chalk.redBright('2'));
                    setTimeout(() => {
                      console.log(chalk.redBright('1'));
                      setTimeout(() => {
                        process.exit(0);
                      }, 500)
                    }, 500)
                  }, 500)
                }, 500)
                
              } else {
                exec(`cd ${projectName} && npm run start`, (e, stdout, stderr) => {
                  console.log('š Starting live server...');
                  setTimeout(() => {
                    console.log('š Watching index.html, index.sass and script.js')
                  }, 500)
                })
              }
            })
          
        });
      });      
    });
  });
});

