const key = 'cgHSq3n6vxR48bUoBuey16gyeOuDKkQbJ1XWm7fV';
const baseAPIUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}`;


$(function () {
    $.getJSON(baseAPIUrl, loadData);

});


function loadData(data) {
    var dataObj = data;
    var currentDate = dayjs(dataObj.date).format('MMMM D, YYYY.');
    $('#date').html('Today is' + ' ' + currentDate);
    $('#title').html(dataObj.title);
    $('#hdurl').attr("src", dataObj.hdurl);
    $('#explanation').html(dataObj.explanation);

}


$(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

});