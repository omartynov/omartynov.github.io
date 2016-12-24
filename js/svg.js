function initSVG(objSVG){
/* */

};

function loadSVG(){
	document.querySelectorAll('.container_svg').forEach(function(div){
		var obj = document.createElement('object');
		obj.type = 'image/svg+xml';
		div.appendChild(obj);
	});
};