const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = []

// loader

function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}


// hide loading
function complete(){
    if (!loader.hidden) {
        quoteContainer.hidden = false
        loader.hidden = true
    }
}
// get api
async function getQuote(){
    loading()
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try{
        const response = await fetch(apiUrl)
        const apiQuotes = await response.json()
        const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
        console.log(apiQuotes);
        // newQuote()
        console.log(quote.text);

        if (quote.author === '') {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = quote.author
        }

        if (quote.text > 100) {
            quoteText.classList.remove('long-quote')
        } else {
            quoteText.classList.add('long-quote')
        }
        quoteText.innerText = quote.text
        complete()
    } catch (error){
        getQuote()
      
    }
}


function tweetQuote() {
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterUrl, '_blank')
}
// add event listener
newQuoteBtn.addEventListener('click', getQuote),
twitterBtn.addEventListener('click', tweetQuote)

// on load
getQuote()
// loading()