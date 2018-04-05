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

// Context menu

$(function() {
        $.contextMenu({
            selector: '.context-menu-one', 
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m); 
            },
            items: {
                "edit": {name: "Edit", icon: "edit"},
                "cut": {name: "Cut", icon: "cut"},
               copy: {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
                }}
            }
        });

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })    
    });


//// Changed theme

$(".header--theme-button").on("click", function() {
	  var primaryColor = $(this).css("--theme-primary");
	  var secondaryColor = $(this).css("--theme-secondary");

	  $(".header--theme-button").removeClass("active");
	  $(this).addClass("active");

	  $(document.body).css("--primary-color", primaryColor);
	  $(document.body).css("--secondary-color", secondaryColor);
	});

