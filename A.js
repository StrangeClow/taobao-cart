//开始编码

function changeNum(numId,flag) {
	var numId = document.getElementById(numId);
	if (flag == "minus") {
		if (numId.value<=1) {
			alert("出错了");
			return false;
		}
		else {
			numId.value=parseInt(numId.value)-1;
			productCount();
		}
	}
	else {
		numId.value = parseInt(numId.value)+1;
		productCount();
	}
}

function productCount () {
	var total = 0;
	var integral = 0;;
	var point;
	var price;
	var number;
	var subtotal;
	
	var myTableTr = document.getElementById("shopping").getElementsByTagName("tr");
	if (myTableTr.length>0) {
		for (var i = 1;i<myTableTr.length;i++) {
			if (myTableTr[i].getElementsByTagName("td").length>2) {
				point = myTableTr[i].getElementsByTagName("td")[3].innerHTML;
				price = myTableTr[i].getElementsByTagName("td")[4].innerHTML;
				number = myTableTr[i].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value;
				integral+=point*number;
				total+=price*number;
				myTableTr[i].getElementsByTagName("td")[6].innerHTML = price*number;
			}
		}
		document.getElementById("total").innerHTML = total;
		document.getElementById("integral").innerHTML = integral;
	}
}
window.onload = productCount;


function selectAll() {
	var oInput = document.getElementsByName("cartCheckBox");
	for (var i = 0; i<oInput.length;i++) {
		oInput[i].checked = document.getElementById("allCheckBox").checked;
	}
}


function selectSingle() {
	var k =0;
	var oInput=document.getElementsByName("cartCheckBox");
	 for (var i=0; i<oInput.length; i++) {
		if (oInput[i].checked==false) {
			k=1; 
			break;
		}
	}
	if(k==0) {
		document.getElementById("allCheckBox").checked=true;
	}
	else {
		document.getElementById("allCheckBox").checked=false;
	}
}



function deleteRow(rowId) {
	var Index = document.getElementById(rowId).rowIndex;
	document.getElementById("shopping").deleteRow(Index);
	document.getElementById("shopping").deleteRow(Index-1);
	productCount();
}

function deleteSelectRow () {
	var oInput = document.getElementsByName("cartCheckBox");
	var Index;
	for (var i = oInput.length-1;i>=0;i--) {
		if (oInput[i].checked==true) {
			Index = document.getElementById(oInput[i].value).rowIndex;
			document.getElementById("shopping").deleteRow(Index);
			document.getElementById("shopping").deleteRow(Index-1);
		}
	}
	productCount();
}
