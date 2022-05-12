const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=#page`;
const $docs = document.querySelector('#docs');
// const $query = document.querySelector('#query');
// const $searchButton = document.querySelector('#searchButton');
const $moreButton = document.querySelector('#moreButton');
const $searchForm = document.querySelector('#searchForm');
const $query = document.querySelector('[name="query"]');
let page = 1;

function getFetch(url, callback) {
  const headers = {
    Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  };

  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}

function search() {
  $moreButton.style.display = 'block';
  const query = $query.value;
  page = 1;
  const searchUrl = url.replace('#query', query).replace('#page', page);;
  // url = url.replace('#query', query);

  getFetch(searchUrl, (data) => {
    const { documents } = data;
    // const documents = data.documents;
    console.log(documents);

    const docs = documents.map((document) => {
      // console.log(document);
      return document.contents;
    });

    // console.log(docs);
    $docs.innerHTML = docs.join('<hr>');
  });
}

function more() {
  $docs.innerHTML += '<hr>';
  const query = $query.value;
  page ++;
  const searchUrl = url.replace('#query', query).replace('#page', page);
  // url = url.replace('#query', query);

  getFetch(searchUrl, (data) => {
    const { documents } = data;
    const docs = documents.map((document) => {
      return document.contents;
    });

    // console.log(docs);
    $docs.innerHTML += docs.join('<hr>');
  });
}

// $searchButton.addEventListener('click', search);
// $query.addEventListener('keydown', (event) => {
//   if (event.key !== 'Enter') return;
//   search();

//   // if (event.key === 'Enter') {
//   //   search();
//   // }
// });

$searchForm.addEventListener('submit', (event) => {
  search();
  event.preventDefault();
})

$moreButton.addEventListener('click', more);