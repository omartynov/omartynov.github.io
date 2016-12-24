function initSVG(objSVG){
/* */

};

function loadSVG(){
/* */
	window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);
};

function onInitFs(fs) {

  var dirReader = fs.root.createReader();
  var entries = [];

  // Call the reader.readEntries() until no more results are returned.
  var readEntries = function() {
     dirReader.readEntries (function(results) {
      if (!results.length) {
        listResults(entries.sort());
      } else {
        entries = entries.concat(toArray(results));
        readEntries();
      }
    }, errorHandler);
  };

  readEntries(); // Start reading dirs.

}