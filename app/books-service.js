function BooksService() {

  var url = 'mongodb://bookes:bookes@ds139725.mlab.com:39725/bookes'

  this.addBook = function (title, publish, rating, author) {
    return new Promise(function (resolve, reject) {
      $.get('localhost:8000/books').then(
        function (data) {
        debugger
          resolve(data);
        },
        function (error) {
          reject(error);
        }
      );
    });
  }


  this.getBook = function() {
    return new Promise(function (resolve, reject) {
      $.get('http://localhost:8000/books').then(
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }


}