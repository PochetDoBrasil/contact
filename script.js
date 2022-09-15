window.onload = function() {
	loadingRemove();
}

function loadingRemove() {
	let loading = document.getElementsByClassName('loading');

	setTimeout(function() {
		loading[0].style.display = 'none';
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, 3000); 
}
