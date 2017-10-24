let login = (username, password) => {
    if (username !== 'admin' || password !== 'password') {
        console.log('Acceed Denied !!');
    } else {
        console.log('Login OK !!')
    }
};

// module.exports = {
//     login
// }

export {
    login
}
