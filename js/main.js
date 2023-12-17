const details = document.querySelectorAll("details")

details.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		console.log(e.target)
	})
})
