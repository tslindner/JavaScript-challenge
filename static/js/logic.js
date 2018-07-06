// var dataSet = [
//   {
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green rowght at my front door."
//   },

var table = document.getElementById("myTable");

var i;

for (i = 0; i < dataSet.length; i++) { 
  var row = table.insertRow(0);

  var column0 = row.insertCell(0);
  var column1 = row.insertCell(1);
  var column2 = row.insertCell(2);
  var column3 = row.insertCell(3);
  var column4 = row.insertCell(4);
  var column5 = row.insertCell(5);
  var column6 = row.insertCell(6);


  column0.innerHTML = dataSet[i].datetime;
  column1.innerHTML = dataSet[i].city;
  column2.innerHTML = dataSet[i].state;
  column3.innerHTML = dataSet[i].country;
  column4.innerHTML = dataSet[i].shape;
  column5.innerHTML = dataSet[i].durationMinutes;
  column6.innerHTML = dataSet[i].comments;





};

var header = table.createTHead();

headerRow = header.insertRow(0);

headerRow0 = headerRow.insertCell(0);
headerRow1 = headerRow.insertCell(1);
headerRow2 = headerRow.insertCell(2);
headerRow3 = headerRow.insertCell(3);
headerRow4 = headerRow.insertCell(4);
headerRow5 = headerRow.insertCell(5);
headerRow6 = headerRow.insertCell(6);

headerRow0.innerHTML = "dateTime";
headerRow1.innerHTML = "city";
headerRow2.innerHTML = "state";
headerRow3.innerHTML = "country";
headerRow4.innerHTML = "shape";
headerRow5.innerHTML = "durationMinutes";
headerRow6.innerHTML = "comments";

function dateFilter() {
  var input, filter, table, row, dateTime, i;
  input = document.getElementById('dateInput');
  filter = input.value
  table = document.getElementsByTagName("table");
  table = table[0];
  row = table.getElementsByTagName('tr');

  for (i = 0; i < dataSet.length; i++) {
      loopRow = row[i];
      dateTime = loopRow.getElementsByTagName("td");
      dateTime = dateTime[0];
      if (dateTime.innerHTML.indexOf(filter) > -1) {
          row[i].style.display = "";
      } else {
          row[i].style.display = "none";
      }
  }
}