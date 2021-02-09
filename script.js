function _load() {

	const divContainer = document.getElementById("divs");
	const p1Btn = document.getElementById("p1-btn");
	const p2Btn = document.getElementById("p2-btn");

	p1Btn.addEventListener("click", () => {
		divContainer.innerHTML = "";
		divContainer.insertAdjacentHTML("beforeend", `
		<div class="p1"></div>
		`);
	});

	p2Btn.addEventListener("click", () => {
		divContainer.innerHTML = "";
		divContainer.insertAdjacentHTML("beforeend", `
		<div class="p2"></div>
		<div class="p2"></div>
		`);

	});

}

window.addEventListener("load", _load);