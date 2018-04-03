// Search in the table 

$(document).ready(function() {
	$("#myInput").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

// Sort table using columns

$(document).ready(function() {
	$("#table1").tablesorter();
});

// Button Filter
$(document).ready(function() {
$('.btn-filter').on('click', function () {
    var $target = $(this).data('target');
    if ($target != 'all') {
      $('.table1 tr').css('display', 'none');
      $('.table1 tr[data-status="' + $target + '"]').fadeIn('slow');
    } else {
      $('.table1 tr').css('display', 'none').fadeIn('slow');
    }
  });
});

// CheckBox Fielter

$(document).ready(function () {

    $("input:checkbox").on("change", function () {
        var a = $("input:checkbox:checked").map(function () {
            return $(this).val()
        }).get()
        $("#myTable tr").hide();
        var status = 'all'
        var status = $(".status").filter(function () {
            var status = $(this).text(),
                index = $.inArray(status, a);
            return index >= 0
        }).parent().show();
       if (status == 'all'){
    	   $("#myTable tr").show();
       }
        
    }).first().change()
});