function displayCalendar(month, year) {
  let monthNow = new Date().getMonth();
  let yearNow = new Date().getFullYear();
  let nextMonth = month + 1;
  let prevMonth = month - 1;
  let day = 0;

  if (month == monthNow && year == yearNow) {
    let day = new Date().getDate();
  }

  let htmlContent = "";
  let FebNumberOfDays = "";
  let counter = 1;
  let Nameday = 1;

  if (month == 1) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
      FebNumberOfDays = 29;
    } else {
      FebNumberOfDays = 28;
    }
  }

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthNum = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let dayPerMonth = [
    "31",
    "" + FebNumberOfDays + "",
    "31",
    "30",
    "31",
    "30",
    "31",
    "31",
    "30",
    "31",
    "30",
    "31",
  ];
  let nextDate = new Date(nextMonth + " 1 ," + year);
  let weekdays = nextDate.getDay();
  let weekdays2 = weekdays;
  let numOfDays = dayPerMonth[month];

  while (weekdays > 0) {
    htmlContent += "<li style='padding:1 0 0;'></li>";
    weekdays--;
  }

  while (counter <= numOfDays) {
    if (weekdays2 > 6) {
      weekdays2 = 0;
      htmlContent += "</ul><ul>";
    }
    if (counter == day) {
      htmlContent += "<li class='dayNow'>" + counter + "</li>";
      Nameday = counter;
    } else {
      htmlContent += "<li>" + counter + "</li>";
    }
    weekdays2++;
    counter++;
  }

  document.getElementById("monthNow").innerHTML =
    monthNames[month] + " " + year;
  document.getElementById("daysNum").innerHTML =
    "<ul id=" +
    monthNum[month] +
    " class=" +
    year +
    ">" +
    htmlContent +
    "</ul>";
}

(function () {
  let dateNow = new Date();
  let month = dateNow.getMonth();
  let year = dateNow.getFullYear();
  displayCalendar(month, year);
})(window);

document.getElementById("nextMonth").addEventListener("click", function () {
  let idmonth = document.getElementById("daysNum");
  let month = idmonth.getElementsByTagName("ul")[0].id;
  let nextYear = idmonth.getElementsByTagName("ul")[0].className;
  let nextMonth = Number(month);
  if (nextMonth == 12) {
    nextMonth = 0;
    nextYear = Number(nextYear) + 1;
  }
  displayCalendar(nextMonth, nextYear);
});

document.getElementById("prevMonth").addEventListener("click",function ()  {
  let idmonth = document.getElementById("daysNum");
  let month = idmonth.getElementsByTagName("ul")[0].id;
  let prevYear = idmonth.getElementsByTagName("ul")[0].className;
  let prevMonth = Number(month) - 2;
  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear = Number(prevYear) - 1;
  }
  displayCalendar(prevMonth, prevYear);
});
