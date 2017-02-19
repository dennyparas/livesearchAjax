$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp =  new RegExp(searchField, "i");

	$.getJSON('data.json',function(data) {
		var output = '<ul classs="searchresults">';
		$.each(data, function(key, val) {
			if(val.name.search(myExp) != -1 || val.specialty.search(myExp) != -1) {
				output += '<li>';
				output += '<h2>' + val.name + '</h2>';
				output += '<img src="images/' + val.shortname + '_tn.jpg" alt="Photo of ' + val.name + '">'
				output += '<p> ' + val.bio + '</p>';
				output += '<p> Specialty: <strong>' + val.specialty + '</strong></p>';
				output += 'Website: ' + '<a href="http://' + val.website + '" target="_blank">' + val.website + '</a>' ;
				
				output += '</li>';
				
			}
		});
		output += '</ul>';
		$('#update').html(output);

	});//Get JSON

});
