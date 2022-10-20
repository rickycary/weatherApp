// alert('Js is loaded')

// Constants and Variables 
const apiKey = 'bd48ff0b46815cadf02f26b4c6e9d79a';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'

// Function that does the Weather Search
function weatherSearch(location){
    const url = $.ajax(`${baseURL}q=${location}&units={imperial}&appid=${apiKey}`)

// Make Our Request
    .then((weather) => {
        console.log(weather)

// Render the Data
        const $main = $('main')
        $main.empty()

        $main.html(`
        <h1>Location: ${weather.name}</h1>
        <h1>Temperature: ${weather.main.temp}</h1>

        `)

    })
}

// Put a click event on the submit button
$("input[type=submit]").on("click", (event) => {

// Prevents refresh
    event.preventDefault()

// Grab text from input box
    const inputText = $("input[type=text]").val()

// Updates the screen
    weatherSearch(inputText)
})



// Search Function
weatherSearch('Austin')