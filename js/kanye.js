const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => place(data))
}

const place = (x) => {
    document.getElementById('kanye').innerText = x.quote;

}