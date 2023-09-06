const excludes = ["/p/kraina.html", "/p/postacie.html", "/p/wspopraca.html"];

if (!excludes.includes(location.pathname)) {
	const styleEl = document.createElement("style");
	styleEl.innerText = ".post-body.entry-content img{transition:all 250ms;z-index:1;position:relative;top:-10px}.post-body.entry-content img:hover{scale:1.05;transform:perspective(400px) rotateX(1deg);box-shadow:0 5px 15px #0c0c0c}";
	document.body.appendChild(styleEl);
}