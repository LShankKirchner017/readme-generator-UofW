// import packages needed fro this application
import fs from "fs"
import inquirer from "inquirer"
import { questions } from "./utilities/questions.js"
import { generateMarkdown} from "./utilities/generateMarkdown.js"
// need to import license badge js

// create a function to write README file
function writeToFile(fileName, data) {}

// create a function to initialize app 
function init () {
    inquirer.prompt(questions)
    .then((answers)=> {
        const markdown = generateMarkdown(answers)
        console.log(markdown)
        fs.writeFile("./generateMarkdown.md", markdown, err => {
            if(err) {
                throw err
            }
            console.log("README file successfully created!")
        })
    })
    .catch((error) => {
        console.log(error)
    } )
}

// function to call initialized app

init();