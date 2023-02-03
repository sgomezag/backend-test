const questions = require("./components/questions/network");
const answers = require("./components/answers/network");
const company = require("./components/company/network");

const routes = function(app) {
    app.use("/questions", questions);
    app.use("/answers", answers);
    app.use("/company", company);
};

module.exports = routes;