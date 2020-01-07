	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2020-01-12',
			selectable: true,
			selectHelper: true,
			select: function(start, end) {
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
			},
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Chapata',
					start: '2020-01-01'
				},
				{
					title: 'Chilaquiles',
					start: '2020-01-07'
				},
				{
					id: 999,
					title: 'Filete de pescado',
					start: '2020-01-09T16:00:00'
				},
				{
					title: 'Mole',
					start: '2020-01-16T16:00:00'
				},
				{
					title: 'Pechuga asada',
					start: '2020-01-11'
				},
				{
					title: 'Mediterranea',
					start: '2020-01-20T10:30:00'
				},
				{
					title: 'Enchiladas suizas',
					start: '2020-01-25T12:00:00'
				},
				{
					title: 'Pechuga',
					start: '2020-01-27T14:30:00'
				},
				{
					title: 'Chilaquiles',
					start: '2020-01-29T17:30:00'
				},
				{
					title: 'Desayuno toluqueño',
					start: '2020-01-21T20:00:00'
				},
				{
					title: 'Filete de pescado',
					start: '2020-01-13T07:00:00'
				}				
			]
		});
		
	});