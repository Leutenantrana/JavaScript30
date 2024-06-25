let countryArr = [];
// fetch('https://restcountries.com/v3.1/all')
//     .then(blob => blob.json())
//     .then((data) => {
//         // let country = data.map(country => country.name)
//         // console.log(country)
//         countryArr.push(...data)
//     })
// console.log(countryArr)


// let names = countryArr.map(country => country.name)
// console.log(names)
// console.log(countryArr)



// function findMatch(stringToMatch, arr) {
//     return arr.filter(place => {
//         const regex = new RegExp(stringToMatch, 'gi');
//         return place.name.common.match(regex) || '';


//     })

// }

// let matcharr = findMatch("India", countryArr)
// console.log(matcharr)

async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        countryArr.push(...data)
    } catch (error) {
        console.log(error.message)
    }
}

function findCountry(countryName) {
    let country = countryArr.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()));
    if (country) {
        console.log('Country found:', country);
    } else {
        console.log('Country not found');
    }
    country.forEach(country => {
        console.log(country.name.common);
        console.log(country.capital[0]);
        console.log(country.flags.png)
    })
}
async function main() {
    await fetchCountries();
    findCountry('ind'); // Example input string to search for a country
}

main();