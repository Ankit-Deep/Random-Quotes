const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('button');

const api = 'https://api.quotable.io/quotes/random';

const getQuote = () => {
    fetch('https://quotes-api-self.vercel.app/quote')
    .then((data) => {
        console.log(data);
        return data.json();
    })
    .then((item) => {
        console.log(item);
        quote.innerHTML = item.quote;
        author.innerHTML = `~${item.author}`;
    })
}

window.addEventListener("load", getQuote);
button.addEventListener('click', getQuote);