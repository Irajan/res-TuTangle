function _(el) {
	return document.querySelectorAll(el);
}

const showBtns = _(".collapse-btn");
const collapsedEls = _(".collapse-el");

showBtns.forEach(function (el) {
	collapsedEls.forEach(function (e) {
		if (e.id == el.id)
			el.parentNode.onclick = function () {
				e.classList.toggle("show");
			};
	});
});
