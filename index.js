
{/* <p class="para capital">Capital : </p>
                <p class="para continent">Continent : </p>
                <p class="para population">Population : </p>
                <p class="para currency">Currency : </p>
                <p class="para commonlang">Common languages : </p> */}
let btn = document.querySelector('#btn');
let country = document.querySelector('#country');
let capital = document.querySelector('.capital');
let continent = document.querySelector('.continent');
let population = document.querySelector('.population');
let currency = document.querySelector('.currency');
let commonlang = document.querySelector('.commonlang');
let ig = document.querySelector('#ig');
// console.log(`sdsdgdfg`);
// let name = 
const url = 'https://restcountries.com/v3.1/name/${name}';

// const url = 'https://restcountries.com/v3.1/name/india';







let getInfo = () =>{
    // console.log(`Event trigered`);
    let n1 = country.value;
    let url = `https://restcountries.com/v3.1/name/${n1}`;
    console.log(n1);
    console.log(url);
    fetch(url).
    then((res)=>{
        console.log(res);
        return res.json();
    }).then((res)=>{
        // capital.innerHTML = `${res[0].capital[0]}`;
        // continent.innerHTML = `${res[0].altSpellings[2]}`
        if(res[0] != undefined){
            capital.innerHTML = `Capital : <strong>${res[0].capital[0]}</strong>`;
            continent.innerHTML = `Continent : <strong>${res[0].continents[0]}</strong>`;
            population.innerHTML = `Population : <strong>${res[0].population}</strong>`;
            // currency.innerHTML = `Currency : ${res[0].currencies.AUD.symbol} ${res[0].currencies.AUD.name}`;
            // commonlang.innerHTML = `Common languages : ${res[0].languages[0]}`
            ig.src = `${res[0].flags.png}`;
            console.log(res[0].flags.png);
        }
        // capital.innerHTML = `Capital : <strong>${res[0].capital[0]}</strong>`;
        // continent.innerHTML = `Continent : <strong>${res[0].continents[0]}</strong>`;
        // population.innerHTML = `Population : <strong>${res[0].population}</strong>`;
        // // currency.innerHTML = `Currency : ${res[0].currencies.AUD.symbol} ${res[0].currencies.AUD.name}`;
        // // commonlang.innerHTML = `Common languages : ${res[0].languages[0]}`
        // ig.src = `${res[0].flags.png}`;
        // console.log(res[0].flags.png);
        // console.log(res[0].currencies.AUD.symbol);
        // console.log(res);
        // console.log(res[0].currencies.symbol);

        // flag = 'flags';


    }).catch((error)=>{
        console.log(error);
    });
};

btn.addEventListener('click',getInfo);
// getInfo();