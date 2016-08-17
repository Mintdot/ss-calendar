function SScalendar(ssYear, ssMonth) {
var today = new Date();
console.log(today);
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
var day = today.getDay();
var lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
if(ssYear==null) ssYear=year;
if(ssMonth==null) ssMonth=month;
    
ssToday = new Date();
ssToday.setFullYear(ssYear);
ssToday.setMonth(ssMonth);
ssToday.setDate(1);
var ssDay = ssToday.getDay();


if(ssYear%4==0 && ssYear%100!=0 || ssYear%400==0)
    lastDate[1] = 29;

var nowLastDate = lastDate[ssMonth];

var week = Math.ceil((ssDay+nowLastDate)/7);

var prevMonthToday = new Date(year, month-1, date);
var nextMonthToday = new Date(year, month+1, date);

console.log(prevMonthToday);
console.log(nextMonthToday);

var calendar = "<div class='calendar_div'>";
calendar += "<p>";
calendar += "<a href='#' onclick= 'javascript:SScalendar(\""+ssYear+"\", \""+(ssMonth-1)+"\")'><</a>";
calendar += ssToday.getFullYear() + '년' + (ssToday.getMonth()+1) + '월';
calendar += "<a href='#' onclick= 'javascript:SScalendar(\""+ssYear+"\", \""+(ssMonth+1)+"\")'>></>";
calendar += "</p>";
calendar += "<table class='calendar_table'>"
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
var prevCountDate = lastDate[ssMonth-1] - (ssDay-1);
var nextCountDate = 1;

for(var i=1; i<=week; i++) {
    calendar += "<tr>";
    for(var j=1; j<=7; j++) {
        if(i==1 && j<=ssDay) {
            calendar += "<td class='prev'>" + prevCountDate + "</td>";
            prevCountDate++;
        } else if(countDate>nowLastDate) {
            calendar += "<td class='next'>" + nextCountDate + "</td>";
            nextCountDate++;
        } else if(ssToday.getFullYear()==ssYear&&ssToday.getMonth()==ssMonth&&countDate==date) {
            calendar += "<td class='today'>" + countDate + "</td>";
            countDate++;
        } else if(count==0) {
            calendar += "<td class='sun'>" + countDate + "</td>";
            countDate++;
        } else if(count==6) {
            calendar += "<td class='sat'>" + countDate + "</td>";
            countDate++;
        } else {
            calendar += "<td>" + countDate + "</td>";
            countDate++;
        }
        count++;
        if(count==7) {
            count = 0;
        }
    }
    calendar += "</tr>";
}

document.getElementById("SScalendar").innerHTML = calendar;

}

/* function SScalendar(today) {

if(typeof(today)=='undifined') {
	var today = new Date();
}
console.log(today);
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
today.setDate(1);
var day = today.getDay();

var lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(year%4==0 && year%100!=0 || year%400==0)
    lastDate[1] = 29;

var nowLastDate = lastDate[month];

var week = Math.ceil((day+nowLastDate)/7);

var prevMonthToday = new Date(year, month-1, date);
var nextMonthToday = new Date(year, month+1, date);

console.log(prevMonthToday);
console.log(nextMonthToday);

var calendar = "<div class='calendar_div'>";
calendar += "<p>";
calendar += "<a href='#' onclick= 'SScalendar(\""+prevMonthToday+"\")'><</a>";
calendar += year + '년' + (month+1) + '월';
calendar += "<input type='button' onclick= 'SScalendar(\""+nextMonthToday+"\")' value='다음 달' />";
calendar += "</p>";
calendar += "<table class='calendar_table'>"
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
var prevCountDate = lastDate[month-1] - (day-1);
var nextCountDate = 1;

for(var i=1; i<=week; i++) {
    calendar += "<tr>";
    for(var j=1; j<=7; j++) {
        if(i==1 && j<=day) {
            calendar += "<td class='prev'>" + prevCountDate + "</td>";
            prevCountDate++;
        } else if(countDate>nowLastDate) {
            calendar += "<td class='next'>" + nextCountDate + "</td>";
            nextCountDate++;
        } else if(countDate==date) {
            calendar += "<td class='today'>" + countDate + "</td>";
            countDate++;
        } else if(count==0) {
            calendar += "<td class='sun'>" + countDate + "</td>";
            countDate++;
        } else if(count==6) {
            calendar += "<td class='sat'>" + countDate + "</td>";
            countDate++;
        } else {
            calendar += "<td>" + countDate + "</td>";
            countDate++;
        }
        count++;
        if(count==7) {
            count = 0;
        }
    }
    calendar += "</tr>";
}

document.getElementById("SScalendar").innerHTML = calendar;

} */
