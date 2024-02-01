const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
const newQuoteButton = document.getElementById("new-quote-button");
const copyButton = document.getElementById("copy-button");

async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = "-" + data.author;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

newQuoteButton.addEventListener("click", () => {
    getQuote(api_url);

     function tweet(){
        window.open("https://twitter.com/intent/tweet?text=Hello%20world", "Tweet Window", "width=600, height=300")
     }
});

copyButton.addEventListener("click", () => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = quote.textContent;

    // Append the textarea to the document
    document.body.appendChild(tempTextArea);

    // Select the text within the textarea
    tempTextArea.select();
    document.execCommand("copy");
    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextArea);

    // Provide a visual indication that the text has been copied (optional)
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 2000); 
});

//scroll
let lastScrollTop = 0;

 window.addEventListener('scroll', function() {
     const navbar = document.querySelector('.navbar');
     const scrollTop = window.scrollY || document.documentElement.scrollTop;

     if (scrollTop > lastScrollTop) {
         navbar.classList.add('hide');
     } else {
         navbar.classList.remove('hide');
     }

     lastScrollTop = scrollTop;
 });
 