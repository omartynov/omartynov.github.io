var svg_dnd = null;

var GrabPoint = null;
var TrueCoords = null;

function initSVG(obj){
/* */
	var svg = obj.getSVGDocument().getElementById('svg' + obj.id.substring(obj.id.indexOf('_')));
	svg.addEventListener('mousedown', function(event){selectSVG(event);});
	svg.addEventListener('mousemove', function(event){dragSVG(event);});
	svg.addEventListener('mouseup', function(event){dropSVG(event);});
	var a = svg.ownerDocument.documentElement;
	 TrueCoords = a.createSVGPoint();
         GrabPoint = a.createSVGPoint();
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
	svg_dnd = event.currentTarget;
	svg_dnd.parentNode.appendChild(svg_dnd); //?????
	svg_dnd.setAttributeNS(null, 'pointer-events', 'none'); //?????
	 var transMatrix = svg_dnd.getCTM();
            GrabPoint.x = TrueCoords.x - Number(transMatrix.e);
            GrabPoint.y = TrueCoords.y - Number(transMatrix.f);
};

      function dragSVG(evt)
      {
         // account for zooming and panning
         GetTrueCoords(evt);

         // if we don't currently have an element in tow, don't do anything
         if (svg_dnd)
         {
            // account for the offset between the element's origin and the
            //    exact place we grabbed it... this way, the drag will look more natural
            var newX = TrueCoords.x - GrabPoint.x;
            var newY = TrueCoords.y - GrabPoint.y;

            // apply a new tranform translation to the dragged element, to display
            //    it in its new location
            svg_dnd.setAttributeNS(null, 'transform', 'translate(' + newX + ',' + newY + ')');
         }
      };
      
      function GetTrueCoords(evt)
      {
         // find the current zoom level and pan setting, and adjust the reported
         //    mouse position accordingly
         if (svg_dnd)
         {
                  var a = svg_dnd.ownerDocument.documentElement;
         var newScale = a.currentScale;
         var translation = a.currentTranslate;
         TrueCoords.x = (evt.clientX - translation.x)/newScale;
         TrueCoords.y = (evt.clientY - translation.y)/newScale;

         }
      };
      
      function dropSVG(evt)
      {
         // if we aren't currently dragging an element, don't do anything
         if ( svg_dnd )
         {
            // since the element currently being dragged has its pointer-events turned off,
            //    we are afforded the opportunity to find out the element it's being dropped on
            var targetElement = evt.target;

            // turn the pointer-events back on, so we can grab this item later
            svg_dnd.setAttributeNS(null, 'pointer-events', 'all');
            if ( 'Folder' == targetElement.parentNode.id )
            {
               // if the dragged element is dropped on an element that is a child
               //    of the folder group, it is inserted as a child of that group
               targetElement.parentNode.appendChild( svg_dnd );
               alert(svg_dnd.id + ' has been dropped into a folder, and has been inserted as a child of the containing group.');
            }
            else
            {
               // for this example, you cannot drag an item out of the folder once it's in there;
               //    however, you could just as easily do so here
               alert(svg_dnd.id + ' has been dropped on top of ' + targetElement.id);
            }

            // set the global variable to null, so nothing will be dragged until we
            //    grab the next element
            svg_dnd = null;
         }
      };