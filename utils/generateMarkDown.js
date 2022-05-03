// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Repository ##
  ${data.project}

  ## Table of Contents ##
  * [Description](#Description-)
  * [Installation](#Installation-)
  * [Usage](#Usage-)
  * [Testing](#Testing-)
  * [Contribution](#Contribution-)
  * [Licensing](#Licensing-)
  * [Contact](#Contact-)
  
  ## Description ##
  ${data.description}

  ## Installation ##
  ${data.install}

  ## Usage ##
  ${data.usage}

  ## Testing ##
  ${data.test}

  ## Contribution ##
  ${data.contribution}

  ## Licensing ##
  NOTICE: This application is issued and used under provisions established by ${renderLicense(data.license)}
  
  ## Contact ##
  For any questions about this project, contact me at:
  - Github: ${data.username};
  - Email: ${data.email};\n
  This README was generated by ${data.name}.
`;
}

module.exports = generateMarkdown;
