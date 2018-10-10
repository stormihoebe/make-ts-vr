'use strict'
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  //Ask for user input
  async prompting() {
    this.answers = await this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
    }]);
  }
  paths() {
    this.destinationRoot(this.answers.name);
   
  }
  //Writing Logic here
  writing() {

    //Copy application files
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
              name: this.answers.name
            }
          )
          this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'), {
              name: this.answers.name
            }
          )
          this.fs.copyTpl(
            this.templatePath('_component.ts'),
            this.destinationPath('index.ts')
          )
          this.fs.copyTpl(
            this.templatePath('_index.html'),
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