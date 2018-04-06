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

// Button Filter
$(document).ready(function() {
	$('.btn-filter').on('click', function() {
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

$(document).ready(function() {

	$("input:checkbox").on("change", function() {
		var a = $("input:checkbox:checked").map(function() {
			return $(this).val()
		}).get()
		$("#myTable tr").hide();
		var status = 'all'
		var status = $(".status").filter(function() {
			var status = $(this).text(), index = $.inArray(status, a);
			return index >= 0
		}).parent().show();
		if (status == 'all') {
			$("#myTable tr").show();
		}

	}).first().change()
});

// Context menu

$(function() {
	$('tbody').contextMenu({
		selector : 'tr',
		callback : function(key, options) {
			var m = "clicked: " + key + " on " + $(this).text();
			$("#error").html(m);
			$('#myModal').modal("show");
		},
		items : {
			"edit" : {
				name : "Edit",
				icon : "edit"
			},
			"cut" : {
				name : "Cut",
				icon : "cut"
			},
			"copy" : {
				name : "Copy",
				icon : "copy"
			},
			"paste" : {
				name : "Paste",
				icon : "paste"
			},
			"delete" : {
				name : "Delete",
				icon : "delete"
			},
			"sep1" : "---------",
			"quit" : {
				name : "Quit",
				icon : function($element, key, item) {
					return 'context-menu-icon context-menu-icon-quit';
				}
			}
		}
	});
});

$(document).ready(function() {
	$("#light").click(function() {
		$("#navbar").removeClass("navbar-inverse").addClass("navbar-default");
		$("#table-header").removeClass("thead-dark").addClass("thead-light");
	});
	$("#dark").click(function() {
		$("#navbar").removeClass("navbar-default").addClass("navbar-inverse");
		$("#table-header").removeClass("thead-light").addClass("thead-dark");
	});
	var table = $('#table1').DataTable({
		"scrollX" : true,
		"scrollY" : 500,
		"dom" : 'BZtlp',
		// fixedHeader : true,
		"colResize" : {
			"tableWidthFixed" : false
		},
		colReorder : true,
		buttons : [ {
			extend : 'copy',
			text : '<i class="far fa-copy"></i>',
			titleAttr: 'Copy',
				
		}, {
			extend : 'csv',
			text : '<i class="far fa-file-alt"></i>',
			titleAttr: 'CSV',
		}, {
			extend : 'excel',
			text : '<i class="far fa-file-excel"></i>',
			titleAttr: 'Excel',
		}, {
			extend : 'print',
			text : '<i class="fas fa-print"></i>',
			titleAttr: 'Print',
		}, {
			extend : 'pdf',
			text : '<i class="far fa-file-pdf"></i>',
			orientation : 'landscape',
			pageSize : 'LEGAL',
			titleAttr: 'PDF',
		}, {
			extend : 'colvis',
			text : '<i class="fas fa-plus"></i>',
			titleAttr: 'Show/Hide Columns',
		}, ]
	});

});
