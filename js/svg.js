function initSVG(id){
/* */
//	var objSVG = document.getElementById(id).addEventListener('load', function(){
	var b = document.getElementById(id).getSVGDocument();
//	});
	
};

function loadSVG(){
/* */
	document.querySelectorAll('.svg_source').forEach(function(div){
		var obj = document.createElement('object');
		obj.data = '/images/' + div.id + '/arch_yellow_red.svg';
		obj.id = 'svg_source_arch_yellow_red';
		obj.type = 'image/svg+xml';
		div.appendChild(obj);
		
		document.getElementById(obj.id).addEventListener('load', initSVG(obj.id));
	});
};