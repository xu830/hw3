/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const table = document.createElement("table");
document.body.appendChild(table);

const tr = document.createElement("tr");
table.appendChild(tr);
for (let i = 0; i < tableInfo.tableHeader.length; i++) {
  const th = document.createElement("th");
  const text = document.createTextNode(tableInfo.tableHeader[i]);
  th.appendChild(text);
  tr.appendChild(th);
}
for (let i = 0; i < tableInfo.tableContent.length; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < tableInfo.tableHeader.length; j++) {
    const td = document.createElement("td");
    let title = tableInfo.tableHeader[j];
    const text = document.createTextNode(tableInfo.tableContent[i][title]);
    td.appendChild(text);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const orderList = document.createElement("OL");
document.body.appendChild(orderList);
for (let i = 0; i < list.length; i++) {
  const item = document.createElement("li");
  const text = document.createTextNode(list[i]);
  item.appendChild(text);
  orderList.appendChild(item);
}

const unorderList = document.createElement("OL");
document.body.appendChild(unorderList);
for (let i = 0; i < list.length; i++) {
  const item = document.createElement("ol");
  const text = document.createTextNode(list[i]);
  item.appendChild(text);
  unorderList.appendChild(item);
}

/*

Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list

*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
const dropDown = document.createElement("select");
document.body.appendChild(dropDown);
for (let i = 0; i < dropDownList.length; i++) {
  const ele = document.createElement("option");
  ele.setAttribute("value", dropDownList[i].value);
  const val = document.createTextNode(dropDownList[i].content);
  ele.appendChild(val);
  dropDown.appendChild(ele);
}
