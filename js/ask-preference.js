var preference = prompt('Are you visiting Oahu or Maui?');
var response;

if (preference === 'Oahu')
{
    response = 'Welcome to Oahu!';
}
else if (preference === 'Maui')
{
    response = 'Welcome to Maui!';
}
else
{
    response = 'Fine don\'t answer!';
}

document.write('<h3>' + response + '<h3>');