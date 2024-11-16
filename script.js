async function loadQuote() {
  const responseObj = await fetch("https://quotes-api-self.vercel.app/quote");
  const quoteObj = await responseObj.json();
  return quoteObj;
}

async function displayQuote() {
  quoteObj = await loadQuote();
  console.log(quoteObj);
  document.querySelector('.js-quote-div').innerHTML = `"${quoteObj.quote}"`;
  document.querySelector('.js-quote-author').innerHTML = `- ${quoteObj.author}`;
}

document.querySelector('.js-generate-button').addEventListener('click', displayQuote);

displayQuote();

/*fetch("https://api.kanye.rest/text")
.then((response) => {
    return response.text();
}).then((value) => {
  console.log(value);
})*/