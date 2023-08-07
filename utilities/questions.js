// questions array for Inquirer prompt

export const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "Enter a one sentence description of your project.",
    },
    {
        type: "confirm",
        name: "confirmInstallation",
        message: "Does your project require installation files?",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions, if any.",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how your project is used.",
    },
    {
        type: "confirm",
        name: "confirmTests",
        message: "Does your project include tests?",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide filepath to any test files.",
    },
    {
        type: "list",
        name: "license",
        message: "What license do you want to include for this project?",
        choices: ["MIT", "Apache 2.0", "GPLv3", "AGPLv3", "Mozilla Public License 2.0", "The Unilicense", "None" ]

    },
    {
        type: "confirm",
        name: "confirmContribution",
        message: "Do you want to require contribution guidelines?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Describe contribution guidelines"
    },
    {
        type: "input",
        name: "githubUserName",
        message: "Please enter your GitHub user name."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"

    }
]
