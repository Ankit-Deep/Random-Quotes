const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('button');

const api = 'https://api.quotable.io/quotes/random';

const getQuote = () => {
    fetch('https://quotes-api-self.vercel.app/quote')
    .then((data) => {
        if (!data.ok) {
            throw new Error('Network response was not ok');
        }
        return data.json();
    })
    .then((item) => {
        console.log(item);
        quote.innerHTML = item.quote;
        author.innerHTML = `~${item.author}`;
    })
    .catch((error) => {
        console.error('Error fetching quote:', error);
        quote.innerHTML = 'Sorry, something went wrong. Please try again later.';
        author.innerHTML = '';
    });

}

window.addEventListener("load", getQuote);
button.addEventListener('click', getQuote);