# TypeScript Package Template

[![codecov](https://codecov.io/gh/HugoxSaraiva/npm-ts-package-example/branch/master/graph/badge.svg?token=99B9MFPYUG)](https://codecov.io/gh/HugoxSaraiva/npm-ts-package-example)

This project serves as a starting template for creating new TypeScript packages.

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)
    -   [Building](#building)
    -   [Developing](#developing)
    -   [Testing](#testing)
-   [Contributing](#contributing)
-   [License](#license)

## About

TypeScript Package Template provides a basic structure for creating new TypeScript packages. It includes a src folder where you can write your TypeScript code, and a test folder for unit tests running jest. The project also includes configuration files for TypeScript, Jest, ESLint, and Codecov to help you write high-quality code.

## Getting Started

To get started with TypeScript Package Template, you can either clone the repository or use it as a template to create a new repository. Once you have the project set up, you can run the following command to install the necessary dependencies:

    npm install

## Usage

### Building

To use TypeScript Package Template, you can write your TypeScript code in the src folder and run the following command to compile it:

    npm run build

This will compile the TypeScript code to JavaScript and output it in the out folder. You can then import the compiled JavaScript code into your projects.

### Developing

To develop a package without publishing it to NPM, you can run the following command to compile the package in watch mode:

    npm run watch

Then, you can go to your project that depends on this package and test it.

### Testing

To run the unit tests, you can run the following command:

    npm test

This will run the unit tests using Jest and output the results to the console.

## Contributing

If you would like to contribute to TypeScript Package Template, please feel free to submit a pull request. Before submitting a pull request, please make sure to run the following commands to ensure that your changes meet the project's standards:

    npm run lint
    npm test

## License

TypeScript Package Template is open source software licensed under the [MIT License](https://opensource.org/license/mit/).

## Authors

-   [Hugo Saraiva](https://www.linkedin.com/in/hugo-saraiva-nascimento)
