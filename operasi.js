function hitung1() {
		// body...
	
	var a = document.formAan.pilih.value;
	var s=(new Date()).getSeconds();
	var ninja;

	if ( s % 3 == 0) var ninja = "batu";
	if ( s % 3 == 1) var ninja = "gunting";
	if ( s % 3 == 2) var ninja = "kertas";

	// document.writeln(ninja + a);
	document.write("<center style='margin-top: 100px;'><a href='kesini/batu-" + ninja + ".html'>sekarang</a></center>");
}

function hitung2() {
		// body...
	
	var a = document.formAan.pilih.value;
	var s=(new Date()).getSeconds();
	var ninja;

	if ( s % 3 == 0) var ninja = "batu";
	if ( s % 3 == 1) var ninja = "gunting";
	if ( s % 3 == 2) var ninja = "kertas";

	// document.writeln(ninja + a);
	document.write("<center style='margin-top: 100px;'><a href='kesini/gunting-" + ninja + ".html'>sekarang</a></center>");
}
function hitung3() {
		// body...
	
	var a = document.formAan.pilih.value;
	var s=(new Date()).getSeconds();
	var ninja;

	if ( s % 3 == 0) var ninja = "batu";
	if ( s % 3 == 1) var ninja = "gunting";
	if ( s % 3 == 2) var ninja = "kertas";

	// document.writeln(ninja + a);
	document.write("<center style='margin-top: 100px;'><a href='kesini/kertas-" + ninja + ".html'>sekarang</a></center>");
}
