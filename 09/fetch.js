function getFetch(url, callback) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

getFetch('data.json', (data) => console.log(data));

// fetch('data.json')
//   .then(function(response){
//     // console.log(response);
//     response.headers().then(function(data){
//       console.log('json data:',data);
//     });
//   })
//  .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });