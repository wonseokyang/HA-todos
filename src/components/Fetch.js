export const Fetch = (url, callback) => {
    fetch(url)
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error));
}
