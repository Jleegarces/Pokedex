const getData = async() =>{
    let name = document.querySelector('.form-control').value
    console.log(name)
    document.querySelector('form-control').value = ''
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/charizard`);
    let pokemon = res.data;
    console.log(pokemon)
    return pokemon
    
};

const loadData = async() =>{
    let pokemonData = await getData();

    // finding name 
    let name = pokemonData.name;
    // title case name
    let name_list = name.split('')
    name_list.splice(0,1, name[0].toUpperCase())
    console.log(name_list)
    name = name_list.join('')
    
    
    
    let photo = pokemonData.sprites.back_default;
    

    // getting bootstrap card elements
    let photo_area = document.getElementsByTagName('img')[0];
    photo_area.src = photo;

    let title_area = document.querySelector('.card-title');
    title_area.innerHTML = name;
}