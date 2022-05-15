
//----------page login
const handle_Login = (req, res) => {
    return res.render("login.ejs");
}

//----------page register
const handle_Register = (req, res) => {
    return res.render("register.ejs");
}

//----------page reset password
const handle_Reset_password = (req, res) => {
    return res.render("reset_password.ejs");
}

//----------page forgot password
const handle_Forgot_password = (req, res) => {
    return res.render("forgot_password.ejs");
}

//----------page code password
const handle_Code_password = (req, res) => {
    return res.render("code_password.ejs");
}

//----------page code password
const handle_Alert_page = (req, res) => {
    return res.render("alert_page.ejs");
}

//----------export module
module.exports = {
    handle_Login,
    handle_Register,
    handle_Reset_password,
    handle_Forgot_password,
    handle_Code_password,
    handle_Alert_page
}