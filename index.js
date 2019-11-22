const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const open = require("open");
const convertFactory = require("electron-html-to");
const api = require("./api");
const generateHTML = require("./generateHTML");

const question = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["blue", "green", "pink", "yellow", "red"]
    }
];