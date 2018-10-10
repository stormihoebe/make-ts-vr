'use strict'
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  //Ask for user input
  async prompting() {
    this.answers = await this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
    }, 
    
    {
      type: 'list',
      name: 'type',
      message: 'What do you like to create a component or a system?',
      choices: [
        'Component',
        'System',
      ]
    },
  
  ]);
  }
  paths() {
    this.destinationRoot(this.answers.name);
   
  }
  //Writing Logic here
  writing() {
    const {name, type} = this.answers
    //Copy application files
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
              name: name
            }
          )
          this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'), {
              name, type
            }
          )
          this.fs.copyTpl(
            this.templatePath(
              type ==="component"
                ?'_component.ts'
                : '_system.ts'
            ),
            this.destinationPath('index.ts')
          )
          this.fs.copyTpl(
            this.templatePath(
              type ==="component"
                ?'_component-index.html'
                : '_system-index.html'
            ),
            this.destinationPath('index.html')
          )
          this.fs.copyTpl(
            this.templatePath('_tsconfig.json'),
            this.destinationPath('tsconfig.json')
          )
          this.fs.copyTpl(
            this.templatePath('_webpack.config.js'),
            this.destinationPath('webpack.config.js')
          )
    }
}