function initSVG(objSVG){
/* */
	var a = objSVG.getSVGDocument();
};

function loadSVG(){
	document.querySelectorAll('.container_svg').forEach(function(div){
		var obj = document.createElement('object');
		obj.data = '/images/garland/arch_yellow_red.svg';
		obj.type = 'image/svg+xml';
//		obj.click = function(){initSVG()};
		obj.addEventListener('load', initSVG_1);
		obj.addEventListener('click', function(){initSVG_1});
//		obj.addEventListener('click', initSVG());
		div.appendChild(obj);
	});
};

function initSVG_1(objSVG){
/* */
	var a = objSVG.getSVGDocument();
};
