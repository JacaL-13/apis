const btnRes = document.querySelector('#btnRes')
const sectContent = document.querySelector('#content')

function btnClicked(event) {
	axios.get('https://swapi.dev/api/planets/?search=alderaan').then((res) => {
		console.log(res.data.results[0].residents)
		res.data.results[0].residents.forEach((resident, idx) => {
			axios.get(resident).then((res) => {
				const charName = document.createElement('h2')
				charName.textContent = res.data.name
				sectContent.appendChild(charName)
			}).catch((err) => console.log(err))
		})
	}).catch((err) => console.log(err))
}

btnRes.addEventListener('click', btnClicked)