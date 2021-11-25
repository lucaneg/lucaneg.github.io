function copyButtons() {
	var codeBlocks = document.querySelectorAll('div.highlight');

	codeBlocks.forEach(function (codeBlock) {
		var copyButton = document.createElement('button');
		copyButton.type = 'button';
		copyButton.ariaLabel = 'Copy code to clipboard';
		copyButton.innerHTML = '<i class="far fa-copy"></i>';

		codeBlock.prepend(copyButton);

		copyButton.addEventListener('click', function () {
			var code = codeBlock.querySelector('pre').querySelector('code').innerText.trim();
			window.navigator.clipboard.writeText(code);

			copyButton.innerHTML = '<i class="far fa-check-circle"></i>';
			var fourSeconds = 2000;

			setTimeout(function () {
			  copyButton.innerHTML = '<i class="far fa-copy"></i>';
			}, fourSeconds);
		});
	});
}