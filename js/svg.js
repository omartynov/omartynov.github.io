function loadSVG(){
	document.querySelectorAll('.container_svg').forEach(function(div){
		var obj = document.createElement('object');
		obj.data = '/images/garland/arch_yellow_red.svg';
		obj.type = 'image/svg+xml';
		obj.addEventListener('load', initSVG());
		obj.addEventListener('click', function(){initSVG});
		div.appendChild(obj);
	});
};

function initSVG(objSVG){
/* */
	var a = objSVG.getSVGDocument();
};