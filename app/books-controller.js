function BooksController() {

  var booksService = new BooksService();

  // this.addBook = function (e) {
  //   e.preventDefault();
  //   var form = e.target;
  //   booksService.addBook(form.title.value, form.publish.value, form.rating.value, form.aurthor.value)
  //     .then(function (data) {
  //       draw(data)
  //       return booksService.getBooks(form.title.value, form.publish.value, form.rating.value, form.aurthor.value);
  //     })
  //     .then(function (data) {
  //       drawW(data);
  //     })
  //     .catch(function (noWeather) {
  //     });
  // }

  this.getBook = function(e) {
    e.preventDefault();
    var form = e.target;
    booksService.getBook()
      .then(function (data) {
        draw(data)
      })
      .catch(function (noWeather) {
      });
  }

  function draw(data) {
    debugger
    var template = ''
    var elem = document.getElementById('container')
    template += `
    <h1>${data.title}</h1>
    <h1>${data.publish}</h1>
    <h1>${data.rating}</h1>
    <h1>${data.aurthor}</h1>
    `
    return elem.innerHTML = template
  }

}