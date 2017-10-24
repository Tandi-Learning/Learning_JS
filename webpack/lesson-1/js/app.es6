//var loginModule = require('./login');
import { login } from './login'

document.write("Welcome to Big Hair Metal Concert !!");

console.log("App Loaded");

//loginModule.login('admin', 'password');
login('admin', 'password');

// breakpoint on browser dev tool
// debugger;