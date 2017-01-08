function initSVG(obj){
/* */
//	var svg = obj.getSVGDocument().getElementById(obj.id.replace('source_', ''));
//	var b = obj.getSVGDocument()
//	svg.draggable="yes";
//	b.addEventListener('dragstart', function(event){console.log('aaa')});
//	svg.addEventListener('mousedown', function(event){selectSVG(event);});
//svg.draggable=true;
//svg.addEventListener('dragstart', function(event){console.log('aaa')});
};

function loadSVG(){
/* */
	document.querySelectorAll('.svg_source').forEach(function(div){
	div.addEventListener('dragstart', function(event){alert('aaa')});
		var obj = document.createElement('object');
		obj.data = '/images/' + div.id + '/arch_yellow_red.svg';
		obj.id = 'svg_source_arch_yellow_red';
		obj.type = 'image/svg+xml';
//		obj.draggable="yes";
//		obj.addEventListener('dragstart', function(event){alert('aaa')});
		obj.addEventListener('load', function(){initSVG(this);});
		div.appendChild(obj);
	});
};

function selectSVG(event){
/* */
	var svg = event.target;
	
};