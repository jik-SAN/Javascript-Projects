
const btn = document.querySelector('#new-quote')
const quote = document.querySelector('.quote')
const person = document.querySelector('.person')


const quotes = [{
	quote: "The way to get started is to quit talking and begin doing",
	person: "Walt Disney"
},{
	quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
	person: "Steve Jobs"
},{
	quote: "If life were predictable it would cease to be life, and be without flavor",
	person: "Eleanor Roosevelt"
},{
	quote: "It is during our darkest moments that we must focus to see the light",
	person: "Aristotle"
},{
	quote: "Whoever is happy will make others happy too.",
	person: "Anne Frank"
},{
	quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn",
	person: "Benjamin Franklin"
},{
	quote: "In the end, it's not the years in your life that count. It's the life in your years",
	person: "Abraham Lincoln"
},{
	quote: "Never let the fear of striking out keep you from playing the game.",
	person: "Babe Ruth"
},
]

btn.addEventListener('click', function() {
	let random = Math.floor(Math.random() * quotes.length)
	quote.innerText = quotes[random].quote
	person.innerText = quotes[random].person

})


