/*Easypiechart Init*/

$(document).ready(function() {
	"use strict";
	
	if( $('#pie_chart_1').length > 0 ){
		$('#pie_chart_1').easyPieChart({
			barColor : '#faae8a',
			lineWidth: 3,
			animate: 3000,
			size:	100,
			lineCap: 'square',
			scaleColor: 'rgba(33,33,33,.1)',
			trackColor: '#fff',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if( $('#pie_chart_2').length > 0 ){
		$('#pie_chart_2').easyPieChart({
			barColor : '#faae8a',
			lineWidth: 3,
			animate: 3000,
			size:	100,
			lineCap: 'square',
			scaleColor: 'rgba(33,33,33,.1)',
			trackColor: '#fff',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if( $('#pie_chart_3').length > 0 ){
		$('#pie_chart_3').easyPieChart({
			animate: 3000,
			barColor : '#faae8a',
			lineWidth: 3,
			scaleColor: 'rgba(33,33,33,.1)',
			size:	100,
			lineCap: 'square',
			trackColor: '#fff',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}	
	if( $('#pie_chart_4').length > 0 ){
		$('#pie_chart_4').easyPieChart({
			barColor : '#faae8a',
			lineWidth: 3,
			animate: 3000,
			size:	100,
			lineCap: 'square',
			trackColor: false,
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if( $('#pie_chart_5').length > 0 ){
		$('#pie_chart_5').easyPieChart({
			barColor : '#faae8a',
			lineWidth: 3,
			animate: 3000,
			size:	100,
			lineCap: 'square',
			trackColor: false,
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
    if( $('#pie_chart_6').length > 0 ){	
		$('#pie_chart_6').easyPieChart({
			animate: 3000,
			barColor : '#faae8a',
			lineWidth: 3,
			scaleColor: false,
			size:	100,
			lineCap: 'square',
			trackColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if( $('#pie_chart_7').length > 0 ){
		$('#pie_chart_7').easyPieChart({
			barColor : '#f1a1c7',
			lineWidth: 6,
			animate: 3000,
			size:	90,
			lineCap: 'square',
			scaleColor: '#dededeb5',
			trackColor: '#dededeb5',
		});
	}
	if( $('#pie_chart_8').length > 0 ){
		$('#pie_chart_8').easyPieChart({
			barColor : '#2A2731',
			lineWidth: 6,
			animate: 3000,
			size:	90,
			lineCap: 'square',
			scaleColor: '#dededeb5',
			trackColor: '#dededeb5',
		});
	}
    if( $('#pie_chart_9').length > 0 ){	
		$('#pie_chart_9').easyPieChart({
			animate: 3000,
			barColor : '#faae8a',
			lineWidth: 6,
			size:	90,
			lineCap: 'square',
			scaleColor: '#dededeb5',
			trackColor: '#dededeb5',
		});
	}
	if( $('#pie_chart_10').length > 0 ){
		$('#pie_chart_10').easyPieChart({
			barColor : '#f1a1c7b6',
			lineWidth: 7,
			animate: 3000,
			size:	81,
			lineCap: 'square',
			trackColor: '#dededeb5',
			scaleColor: false,
		});
	}
	if( $('#pie_chart_11').length > 0 ){
		$('#pie_chart_11').easyPieChart({
			barColor : '#2A2731b6',
			lineWidth: 7,
			animate: 3000,
			size:	81,
			lineCap: 'square',
			trackColor: '#dededeb5',
			scaleColor: false,
		});
	}
    if( $('#pie_chart_12').length > 0 ){	
		$('#pie_chart_12').easyPieChart({
			barColor : '#faae8ab6',
			lineWidth: 7,
			animate: 3000,
			size:	81,
			lineCap: 'square',
			trackColor: '#dededeb5',
			scaleColor: false,
		});
	}
});