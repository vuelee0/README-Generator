// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (license === "GPL") {
    return "https://img.shields.io/badge/License-GPL%20v3-blue.svg";
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Mozilla") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
  }
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0";
  }
  return "";
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `[License: ${license}](${renderLicenseLink(license)})`;
  }
  return "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![image](${renderLicenseBadge(data.license)})

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Testing](#testing)
  * [Contribution](#contribution)
  * [Licensing](#licensing)
  * [Contact](#contact)
  
  ## Installation
    ${data.install}

  ## Usage
    ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contact
  For any questions about this project, contact me at:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
  `;
};

module.exports = generateMarkdown;
