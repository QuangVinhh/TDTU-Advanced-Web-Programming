
//----------page login
const handle_Login = (req, res) => {
    return res.render("login.ejs");
}

const handle_Register = (req, res) => {
    return res.render("register.ejs");
}


//----------export module
module.exports = {
    handle_Login,
    handle_Register
}