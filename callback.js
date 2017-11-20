function sayHello() {
    console.log(`Now we're building a callback function`);
}

function executeCallback(callback) {
  callback();
}

executeCallback(sayHello);

//now Let's give it an anonymous function

executeCallback(function() {
    console.log(`This is an anonymous function`);
});

//making an arrow function for the callback
executeCallback(() => console.log(`This is an arrow function for the callback`));