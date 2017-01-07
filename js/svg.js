function initSVG(obj){
/* */
	var svg = obj.getSVGDocument().getElementById(obj.id.replace('source_', ''));
	svg.addEventListener('mousedown', function(){selectSVG(this);});
};

function loadSVG(){
/* */
	document.querySelectorAll('.svg_source').forEach(function(div){
		var obj = document.createElement('object');
		obj.data = '/images/' + div.id + '/arch_yellow_red.svg';
		obj.id = 'svg_source_arch_yellow_red';
		obj.type = 'image/svg+xml';
		obj.addEventListener('load', function(){initSVG(this);});
		div.appendChild(obj);
	});
};

function selectSVG(event){
/* */
	var svg = event.target;
};