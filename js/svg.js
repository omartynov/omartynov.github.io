function initSVG(objSVG){
/* */
	var a = objSVG.getSVGDocument();
};

function loadSVG(){
/* */
	document.querySelectorAll('.svg_source').forEach(function(div){
		var obj = document.createElement('object');
		obj.data = '/images/garland/arch_yellow_red.svg';
		obj.type = 'image/svg+xml';
//		obj.onload = initSVG(obj);
//		obj.addEventListener('SVGLoad', initSVG(obj));
		div.appendChild(obj);
		obj.onload = initSVG(obj);
	});
};