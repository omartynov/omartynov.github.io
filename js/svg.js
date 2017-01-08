function initSVG(obj){
/* */
	var svg = obj.getSVGDocument().getElementById(obj.id.substring(obj.id.indexOf('_')));
//	var b = obj.getSVGDocument()
//	svg.draggable="yes";
//	b.addEventListener('dragstart', function(event){console.log('aaa')});
//	svg.addEventListener('mousedown', function(event){selectSVG(event);});
svg.draggable="true";
svg.addEventListener('dragstart', function(){doDragStart()});
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
	var svg = event.target;
	
};

function doDragStart(e){
console.log('aaa')
//          this.style.opacity = "0.4";
 //         this.style.border = "solid";
  //        dragSourceElement = this;
 }