export const getArticles = (searchText) => {
  // eslint-disable-next-line max-len
  return fetch(`http://newsapi.org/v2/everything?q=${searchText}&sortBy=popularity&apiKey=03729509fcfd44b896e903648f02f16a`)
    .then(res => res.json())
    .then(json => json.articles);

};
