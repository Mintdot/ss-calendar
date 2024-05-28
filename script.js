function SScalendar(id, today) {
	
if( typeof(today) != 'undefined' ) {
      today = today.split('-');
      today[1] = today[1] - 1;
      today = new Date(today[0], today[1], today[2]);
   } else {
	   var today = new Date();
   }
var year = today.getFullYear();
var month = today.getMonth() + 1;
var date = today.getDate();
today.setDate(1);
var day = today.getDay();
var d = new Date();

var lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    lastDate[1] = 29;
	
var nowLastDate = lastDate[month - 1];

var week = Math.ceil((day+nowLastDate)/7);

//var prevMonthToday = new Date(year, month-1, date);
//var nextMonthToday = new Date(year, month+1, date);
	
var prevMonthToday = year + '-' + (month - 1) + '-' + date;
var nextMonthToday = year + '-' + (month + 1) + '-' + date;
var prevYearToday = (year - 1) + '-' + month + '-' + date;
var nextYearToday = (year + 1) + '-' + month + '-' + date;

var calendar = "<div class='calendar_div'>";
calendar += "<p>";
calendar += "<a href='#' class='button' onclick= 'SScalendar(\""+id+"\", \""+prevYearToday+"\")'><img src='btn_year_prev.gif'/></a>";
calendar += "<a href='#' class='button' onclick= 'SScalendar(\""+id+"\", \""+prevMonthToday+"\")'><img src='btn_month_prev.gif'/></a>";
calendar += year + '년' + month + '월';
calendar += "<a href=#' class='button' onclick= 'SScalendar(\""+id+"\", \""+nextMonthToday+"\")'><img src='btn_month_next.gif'/></a>";
calendar += "<a href='#' class='button' onclick= 'SScalendar(\""+id+"\", \""+nextYearToday+"\")'><img src='btn_year_next.gif'/></a>";
calendar += "</p>";
calendar += "<table class='calendar_table'>";
calendar += "<tr>";
calendar += "<th class='sun'>일</th>";
calendar += "<th>월</th>";
calendar += "<th>화</th>";
calendar += "<th>수</th>";
calendar += "<th>목</th>";
calendar += "<th>금</th>";
calendar += "<th class='sat'>토</th>";
calendar += "</tr>";

var countDate = 1;
var count = 0;
var prevCountDate = lastDate[month-2] - (day - 1);
if(month == 1) {
	prevCountDate = lastDate[11] - (day - 1);
}
var nextCountDate = 1;

for(var i = 1; i <= week; i++) {
    calendar += "<tr>";
    for(var j = 1; j <= 7; j++) {
        if(year == d.getFullYear() && month == d.getMonth() + 1 && countDate == d.getDate()) {
            calendar += "<td style='background-color: #cccccc'>" + countDate + "</td>";
            countDate++;
        } else if(i == 1 && j <= day) {
            calendar += "<td class='prev'>" + prevCountDate + "</td>";
            prevCountDate++;
        } else if(countDate > nowLastDate) {
            calendar += "<td class='next'>" + nextCountDate + "</td>";
            nextCountDate++;
        } else if(count == 0) {
            calendar += "<td class='sun'>" + countDate + "</td>";
            countDate++;
        } else if(count == 6) {
            calendar += "<td class='sat'>" + countDate + "</td>";
            countDate++;
        } else {
            calendar += "<td>" + countDate + "</td>";
            countDate++;
        }
        count++;
        if(count == 7) {
            count = 0;
        }
    }
    calendar += "</tr>";
}
document.getElementById("SScalendar").innerHTML = calendar;
}
