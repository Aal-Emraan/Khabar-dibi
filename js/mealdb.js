const createCard = () => {
    const searchText = document.getElementById('search-text');
    const search = searchText.value;
    if(search == ''){
        window.alert('please type a name...')
    }else{
        searchText.value = '';
        const cards = document.getElementById('cards');
        cards.innerHTML = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
        .then(res => res.json())
        .then(data => card(data))
    }
}

const card = (data) => {
    const cards = document.getElementById('cards');
    if(data.meals == null){
        window.alert('please type a valid name...')
    }else{
        data.meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div target="_blank" onclick="loadDetialsInfo(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                </div>
            </div>
            `;
            cards.appendChild(div);
    
        })
    }
    
}

const loadDetialsInfo = (meal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => detail(data.meals[0]))
}

const detail = data => {
    const div = document.getElementById('detailInfo');
    div.textContent = '';
    const newDiv = document.createElement('div');
    newDiv.classList.add('card');
    newDiv.innerHTML = `
    <img src="${data.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.strMeal}</h5>
    <p class="card-text">${data.strInstructions.slice(0,50)}</p>
    <a href="${data.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
    `;
    div.appendChild(newDiv);
}