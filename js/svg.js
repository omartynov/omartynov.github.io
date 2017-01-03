function initSVG(id){
/* */
	var objSVG = document.getElementById(id);
	var b = objSVG.getSVGDocument();
};

function loadSVG(){
/* */
	document.querySelectorAll('.svg_source').forEach(function(div){
		var obj = document.createElement('object');
		obj.data = '/images/' + div.id + '/arch_yellow_red.svg';
		obj.id = 'svg_source_arch_yellow_red';
		obj.type = 'image/svg+xml';
		div.appendChild(obj);
		
		obj.addEventListener('SVGload', initSVG(obj.id));
	});
};