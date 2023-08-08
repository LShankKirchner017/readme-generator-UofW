import { licenseBadge} from "./license.js"

function generateInstallation(confirmInstallation) {
  if (!confirmInstallation) {
    return "";
  } else {
    return `## Installation
    ${installation}`;
  }
}

function generateContribution(confirmContribution) {
  if (!confirmContribution) {
    return "";
  } else {
    return `## Contribution
    ${contribution}`;
  }
}

function generateTests(confirmTests) {
  if (!confirmTests) {
    return "";
  } else {
    return `## Tests
    Tests for this application can be found here: ${tests}`;
  }
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown({
  title,
  description,
  confirmInstallation,
  installation,
  usage,
  license,
  confirmTests,
  tests,
  confirmContribution,
  contribution,
  githubUsername,
  email,
}) {
  const badgeImg = licenseBadge(license);


  return `
  # ${title}
  ${badgeImg}
  
  
  ${description}
  
  > ## Table of Contents
  > - **[Installation](#installation)**
  > - **[Usage](#usage)**
  > - **[Contributions](#contributions)**
  > - **[Tests](#tests)**
  > - **[License](#license)**
  > - **[Questions](#questions)**
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contribution
  ${contribution}
  
  ## Tests
  Tests for this project can be found in ${tests}
  
  ## License
  This project is licensed under [${license}]()
  
  ## Questions
  If you have any questions, I can be reached at ${email}, and my GitHub username is ${githubUsername}.
`;
}
