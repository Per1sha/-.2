// document.getElementById('form').addEventListener('submit', function (event) {
//     event.preventDefault();
// })
// const input = document.getElementById('input')

// const apiKey = '569013b3';
// const url = `https://www.omdbapi.com/?t=${encodeURIComponent(input)}&apikey=${apiKey}`;


// fetch(url)
//     .then((response) => {
//         return response.json()
//         console.log(response);
//     }).then((data) => {
//         if (data.Response === "True") {
//             document.getElementById('div').innerHTML = `
//         <h2>${data.Title}</h2>
// <h2>${data.Year}</h2>
// <img src="${data.Poster}" alt="Poster">
//         `

//         } else {
//             document.getElementById('div').innerHTML = `
//             <p>Фильм не найден </p>`
//         }
//     }).catch((error) => {
//         console.error('Пожалуйста подождите ', error);

//     })


document.getElementById('form').addEventListener('submit', function(event) { 
    event.preventDefault();  
    const input = document.getElementById('input').value.trim(); 
    const apiKey = '569013b3';  
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(input)}&apikey=${apiKey}`; 

    fetch(url) 
    .then((response) => { 
   console.log(response); 
        return response.json(); 
    }) 
    .then((data) => { 
        console.log(data); 
        if (data.Response === "True") { 
            document.getElementById('div').innerHTML = ` 
                <h2>Название: ${data.Title}</h2> 
                <h2>Год: ${data.Year}</h2> 
                <img src="${data.Poster}" alt="Poster"> 
            `; 
        } else { 
            document.getElementById('div').innerHTML =` <p>Фильм не найден.</p>`; 
        } 
    }) 
    .catch((error) => { 
        console.error('There was a problem with the fetch operation:', error); 
        // document.getEle  mentById('div').innerHTML = <p>Произошла ошибка при выполнении запроса.</p>; 
    }); 
});