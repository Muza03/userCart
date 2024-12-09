async function fetchData() {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/users/1'
		)
		return data
	} catch (error) {
		console.log(error)
	}
}

;(async () => {
	const data = await fetchData()
	const titName = document.querySelector('.title__name')
	titName.innerHTML = data.name

	const titAddress = document.querySelector('.title__address')
	titAddress.innerHTML = data.address.street

	const titPhone = document.querySelector('.title__phone')
	titPhone.innerHTML = data.phone

	const titEmail = document.querySelector('.title__email')
	titEmail.innerHTML = data.email

	const companyName = document.querySelector('.company__name')
	companyName.innerHTML = data.company.name

	const companyCatch = document.querySelector('.info__catch')	
	companyCatch.innerHTML = data.company.catchPhrase

	const companyBs = document.querySelector('.info__bs-name')
	companyBs.innerHTML = data.company.bs
})()
