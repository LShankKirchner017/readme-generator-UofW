// questions array for Inquirer prompt

export const questions = [
    {
        input: "type", 
        name: "title",
        message: "What is the title of your project?"

    },
    {
        input: "type",
        name: "description",
        message: "Enter a one sentence description of your project.",
    },
    {
        input: "confirm",
        name: "confirmInstallation",
        message: "Does your project require installation files?",
    },
    {
        input: "type",
        name: "installation",
        message: "Provide installation instructions, if any.",
    },
    {
        input: "type",
        name: "usage",
        message: "Describe how your project is used.",
    },
    {
        input: "confirm",
        name: "confirmTests",
        message: "Does your project include tests?",
    },
    {
        input: "type",
        name: "tests",
        message: "Please provide filepath to any test files.",
    },
    {
        input: "list",
        name: "license",
        message: "What license do you want to include for this project?",
        choices: ["MIT", "Apache 2.0", "GPLv3", "AGPLv3", "Mozilla Public License 2.0", "The Unilicense", "None" ]

    },
    {
        input: "confirm",
        name: "confirmContribution",
        message: "Do you want to require contribution guidelines?"
    },
    {
        input: "type",
        name: "contribution",
        message: "Describe contribution guidelines"
    },
    {
        input: "input",
        name: "githubUserName",
        message: "Please enter your GitHub user name."
    },
    {
        input: "input",
        name: "email",
        message: "Please enter your email address"

    }
]
