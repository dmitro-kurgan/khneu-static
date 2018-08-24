import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min.js';

import '../../components/js/header.js';

import '../../components/js/lang.js';

import '../../components/js/map.js';

$(document).ready(function() {
  startTime();
})

'use strict';
function getRuLocaleWeekDay(computed_day) {
    return (computed_day + 6) % 7;
}
 
var calendarDate = new Date(),
    year = calendarDate.getFullYear(),
    month = calendarDate.getMonth(),
    lastDayMonth = new Date(year,month+1,0).getDate(),
    weekDay = ['Mo','Tu','We','Th','Fr','Sa','Su'],
    divTable = document.createElement('table'),
    newRow = divTable.insertRow(-1),
    newCell,
    firstWeekDay = new Date(year, month, 1).getDay();
 
divTable.className = "table";
 
for (var i = 0, I = weekDay.length; i < I; i++){
    newCell = newRow.insertCell(-1);
    newCell.className = 'odd';
    newCell.appendChild(document.createTextNode(weekDay[i]));
}
 
newRow = divTable.insertRow(-1);
 
lastDayMonth = lastDayMonth + getRuLocaleWeekDay(firstWeekDay);
 
for (var j = 1; j <= lastDayMonth; j++){
    newCell = newRow.insertCell(-1);
    newCell.className = (j%7==0) ? 'odd' : 'even';
    if(j-firstWeekDay > 0){
        newCell.appendChild(document.createTextNode(j-firstWeekDay));
    }else{
        newCell.appendChild(document.createTextNode(''));
    }
 
    if(j%7==1){
        newRow = divTable.insertRow(-1);
    }
}
 
// divTable.appendChild(newRow);
document.getElementById('calendar').appendChild(divTable);

function DayToday() {
  var d = new Date();
  var month=new Array("january","february","march","april","may","june",
  "july","august","september","october","november","december");
  document.getElementById('day').innerHTML=(d.getDate());
  document.getElementById('month').innerHTML=(month[d.getMonth()]);
}
DayToday();

function ClassTime() {
    var tm=new Date();
    var h=tm.getHours();
    var m=tm.getMinutes();

    if (h >= 8) {
      $('.schedule_classes').find('tr').removeClass('active');
      $('.schedule_classes').find('#tr1').addClass('active');
      if (m == 30){
        $('.schedule_classes').find('tr').removeClass('active');
        $('.schedule_classes').find('#tr1').addClass('active');
      }
    }
    if (h >= 10) {
      $('.schedule_classes').find('tr').removeClass('active');
      $('.schedule_classes').find('#tr2').addClass('active');
      if (m == 15){
        $('.schedule_classes').find('tr').removeClass('active');
        $('.schedule_classes').find('#tr2').addClass('active');
      }
    }
    if (h >= 12) {
      $('.schedule_classes').find('tr').removeClass('active');
      $('.schedule_classes').find('#tr3').addClass('active');
      if (m == 10){
        $('.schedule_classes').find('tr').removeClass('active');
        $('.schedule_classes').find('#tr3').addClass('active');
      }
    }
    if (h >= 13) {
      $('.schedule_classes').find('tr').removeClass('active');
      $('.schedule_classes').find('#tr4').addClass('active');
      if (m == 55){
        $('.schedule_classes').find('tr').removeClass('active');
        $('.schedule_classes').find('#tr4').addClass('active');
      }
    }
    if (h >= 15) {
      $('.schedule_classes').find('tr').removeClass('active');
      $('.schedule_classes').find('#tr5').addClass('active');
      if (m == 50){
        $('.schedule_classes').find('tr').removeClass('active');
        $('.schedule_classes').find('#tr5').addClass('active');
      }
    }
     if (h >= 17) {
      $('.schedule_classes').find('tr').removeClass('active');
      $('.schedule_classes').find('#tr6').addClass('active');
      if (m == 35){
        $('.schedule_classes').find('tr').removeClass('active');
        $('.schedule_classes').find('#tr6').addClass('active');
      }
    }
    if (h >= 19) {
      $('.schedule_classes').find('tr').removeClass('active');
      $('.schedule_classes').find('#tr7').addClass('active');
      if (m == 20){
        $('.schedule_classes').find('tr').removeClass('active');
        $('.schedule_classes').find('#tr7').addClass('active');
      }
    }
}
ClassTime();