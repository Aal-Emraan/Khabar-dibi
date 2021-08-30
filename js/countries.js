const countries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => country(data) )
}
countries()

const country = x => {
    const country = document.getElementById('country');
    x.forEach(c => {
        const div = document.createElement('div');
        div.classList.add('c')
        div.innerHTML = `
        <h4>${c.name}</h4>
        <p>${c.capital}</p>
        <button onclick="LoadDetails('${c.name}')">Load Details</button>`
        country.appendChild(div)
    })
}

const LoadDetails = details => {
    const url = `https://restcountries.eu/rest/v2/name/${details}`;
    fetch (url)
    .then(res => res.json())
    .then(data => createInfo(data) )
}

const createInfo = (info) => {
    console.log(info);
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
    <h3>Name of the country: ${info[0].name}</h3>
    <p>Capital of the country: ${info[0].capital}</p>
    <h5>Flag</h5>
    <img width=200 src="${info[0].flag}">
    `
}