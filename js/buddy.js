const buddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => getBuddies(data))
}
buddies()

const getBuddies = buddies => {
    const get = buddies.results;
    const div = document.getElementById('buddies');
    for(buddy of get){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`
        div.appendChild(p)
    }
}