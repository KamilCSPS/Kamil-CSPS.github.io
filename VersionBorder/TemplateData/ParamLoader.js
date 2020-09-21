// Call using: GetUrlVars()['xxx'];

function GetUrlVars(){
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){ vars[key] = value;});
	return vars;
}
