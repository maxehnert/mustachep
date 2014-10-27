var library = {
  books : [
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: 'Great Expectations', author: 'Charles Dickens'},
    { title: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};

//grabbing our template string
var template = $('#book').html();


//create our handlebars fuction
var rendered = Handlebars.templates['books'];

//append to my books element
$('#books').append(rendered(library));
