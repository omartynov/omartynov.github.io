var svg_dnd = null;
var GrabPoint = null;
var TrueCoords = null;

function initSVG(obj){
/* */
	var svg = obj.getSVGDocument().getElementById('svg' + obj.id.substring(obj.id.indexOf('_')));
	svg.addEventListener('mousedown', function(event){selectSVG(event);});
	var a = svg.ownerDocument.documentElement.createSVGPoint();
	 TrueCoords = svg.createSVGPoint();
         GrabPoint = svg.documentElement.createSVGPoint();
};

function loadSVG(){
/* */
	document.querySelectorAll('.svg_source').forEach(function(div){
		var obj = document.createElement('object');
		obj.data = '/images/' + div.id + '/arch_yellow_red.svg';
		obj.id = div.id + '_arch_yellow_red';
		obj.type = 'image/svg+xml';
		obj.addEventListener('load', function(){initSVG(this);});
		div.appendChild(obj);
	});
};

function selectSVG(event){
/* */
	svg_dnd = event.target;
	svg_dnd.parentNode.appendChild( svg_dnd );
	svg_dnd.setAttributeNS(null, 'pointer-events', 'none');
	 var transMatrix = svg_dnd.getCTM();
            GrabPoint.x = TrueCoords.x - Number(transMatrix.e);
            GrabPoint.y = TrueCoords.y - Number(transMatrix.f);
};