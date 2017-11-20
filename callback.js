function sayHello() {
    console.log(`Now we're building a callback function`);
}

function executeCallback(callback) {
  callback();
}

executeCallback(sayHello);