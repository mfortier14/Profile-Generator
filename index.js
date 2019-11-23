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

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(question).then(({ github, color }) => {
        console.log("searching....");

        // api
        //     .gitUser(github)
        //     .then(response =>
        //         api.getTotalStars(github).then(stars => {
        //             return generateHTML({
        //                 stars,
        //                 color,
        //                 ...response.data
        //             });
        //         })
        //     )
        //     .then(html => {
                const conversion = convertFactory({
                    convertPath: convertFactory.converters.PDF
                });

                // conversion({ html }, function (err, result) {
                //     if (err)
                //         throw err;
                //     result.stream.pipe(
                //         fs.createWriteStream(path.join(__dirname, "resume.pdf"))
                //     );
                //     conversion.kill();
                // });
                // open(path.join(process.cwd(), "resume.pdf"));
            // });
    });
}
init();
