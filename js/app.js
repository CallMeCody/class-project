function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good Evening!';
    }
    else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    }
    else if (hourNow > 0) {
        greeting = 'Good morning!';
    }
    else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}


function askName() 
{
    var name = prompt('What is your name?');
    var message = 'hello, ' + name;
    return document.write('<h3>') + message + '</h3>';;
}

function askPreference() {
    var preference = prompt('Are you visiting Oahu or Maui?');
    var response;

    if (preference === 'Oahu') {
        response = 'Welcome to Oahu!';
    }
    else if (preference === 'Maui') {
        response = 'Welcome to Maui!';
    }
    else {
        response = 'Fine don\'t answer!';
    }
    return document.write('<h3>' + response + '<h3>');
}


function buildCake(cakeType, frostingType, fillingType) {
    var message = 'I want a' + cakeType + ' cake with ' + frostingType + ' frosting and ' + fillingType + 'filling.'

    return message;
}