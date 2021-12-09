// GETTING SOME DATA

const getData = async() => {
    let name = document.querySelector('.search-bar').value;
    console.log(name)
    document.querySelector('.search-bar').value= ''
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let pokemon = res.data;
    console.log(pokemon);
    return pokemon
};

const loadData = async() => {
    let pokemonData = await getData();

    // finding name
    let name = pokemonData.name;
    let photo = pokemonData.sprites.back_default;
    

    // getting card elements
    let photo_area = document.getElementsByTagName('img')[0];
    photo_area.src = photo;

    let title_area = document.querySelector('.card-title');
    title_area.innerHTML = name;
} 