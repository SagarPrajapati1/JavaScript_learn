// Immediately Invoked Function Expressions


(function chai() {
    console.log(`DB CONNECTED`);
})();

( (username) => {
    console.log(`db connected ${username}`);
})('sagar')
