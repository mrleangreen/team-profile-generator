const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const team = [];

function promptManager() {
  return inquirer.prompt([
    { type: 'input', name: 'name', message: "Manager's name?" },
    { type: 'input', name: 'id', message: "Manager's ID?" },
    { type: 'input', name: 'email', message: "Manager's email?" },
    { type: 'input', name: 'officeNumber', message: "Manager's office number?" }
  ]).then(({ name, id, email, officeNumber }) => {
    team.push(new Manager(name, id, email, officeNumber));
    promptMenu();
  });
}

function promptMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Add a team member?',
      choices: ['Engineer', 'Intern', 'Finish']
    }
  ]).then(({ action }) => {
    if (action === 'Engineer') promptEngineer();
    else if (action === 'Intern') promptIntern();
    else buildTeam();
  });
}

function promptEngineer() {
  inquirer.prompt([
    { type: 'input', name: 'name', message: "Engineer's name?" },
    { type: 'input', name: 'id', message: "Engineer's ID?" },
    { type: 'input', name: 'email', message: "Engineer's email?" },
    { type: 'input', name: 'github', message: "Engineer's GitHub username?" }
  ]).then(({ name, id, email, github }) => {
    team.push(new Engineer(name, id, email, github));
    promptMenu();
  });
}

function promptIntern() {
  inquirer.prompt([
    { type: 'input', name: 'name', message: "Intern's name?" },
    { type: 'input', name: 'id', message: "Intern's ID?" },
    { type: 'input', name: 'email', message: "Intern's email?" },
    { type: 'input', name: 'school', message: "Intern's school?" }
  ]).then(({ name, id, email, school }) => {
    team.push(new Intern(name, id, email, school));
    promptMenu();
  });
}

function buildTeam() {
  const html = generateHTML(team);
  fs.writeFileSync(path.join(__dirname, 'dist', 'team.html'), html);
  console.log('✔ team.html created in dist folder');
}

promptManager();
