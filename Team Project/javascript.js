// var foodArray = [];

function output() {

	// var output = document.getElementById("output");
	var day = document.getElementById("dropdown").selectedIndex;
	var foodName = document.getElementById("fv");
	var servingSize = document.getElementById("servingSize");
	var quantity = document.getElementById("quantity");
	var notes = document.getElementById("notes");
	// var foodArray = ['','Potato Meatballs', 'Lasagna', 'Chicken Pot Pie', 'Bow Tie Pasta', 'Chicken Tacos', 'Beef Stew'];
	
	document.getElementById("hiddenInput").removeAttribute("hidden");
	console.log(foodArray);

	foodName.value = foodArray[day];

	if (foodName.value == 'Potato Meatballs') {
		hidePicture()
		document.getElementById("potato").style.display = 'block';	
	}
	else if (foodName.value == 'Lasagna') {
		hidePicture()
		document.getElementById("lasagna").style.display = 'block';
	}
	else if (foodName.value == 'Chicken Pot Pie') {
		hidePicture()
		document.getElementById("chickenpotpie").style.display = 'block';
	}
	else if (foodName.value == 'Bow Tie Pasta') {
		hidePicture()
		document.getElementById("bow").style.display = 'block';
	}
	else if (foodName.value == 'Chicken Tacos') {
		hidePicture()
		document.getElementById("chickentacos").style.display = 'block';
	}
	else if (foodName.value == 'Beef Stew') {
		hidePicture()
		document.getElementById("beef").style.display = 'block';
	}
}

function hidePicture(){
	document.getElementById("potato").style.display = 'none';
	document.getElementById("lasagna").style.display = 'none';
	document.getElementById("chickenpotpie").style.display = 'none';
	document.getElementById("bow").style.display = 'none';
	document.getElementById("chickentacos").style.display = 'none';
	document.getElementById("beef").style.display = 'none';

}


var total = 0;

function submitOrder() {
	var day = document.getElementById("dropdown").selectedIndex;
	var foodName = document.getElementById("fv").value;
	var servingSize = document.getElementById("ssDropdown").selectedIndex;
	var quantity = document.getElementById("quantity").value;
	var notes = document.getElementById("notes").value;
	var customerName = document.getElementById("customerName").value;
	var address = document.getElementById("address").value;
	var phone = document.getElementById("phoneNumber").value;
	var price = 0;
	var tax = 0.07;
	var shippingFee = 0.01;
	var totalPrice = 0;


	if (servingSize == 1)
		price = 20;
	else if (servingSize == 2)
		price = 40;
	else if (servingSize == 3)
		price = 80;

	totalPrice = price + (price*tax) + (price*shippingFee);
	totalPrice = totalPrice * quantity;

	total = parseFloat(total) + parseFloat(totalPrice);
	total = parseFloat(total.toFixed(2));
	document.getElementById("total").value = total;
	console.log(total);
	window.alert("Order Submitted!");
	
}

function clear() {
	document.getElementById("dropdown").selectedIndex = "0";
	document.getElementById("fv").value = "";
	document.getElementById("ssDropdown").selectedIndex = "0";
	document.getElementById("quantity").value = "";
	document.getElementById("notes").value = "";
	document.getElementById("customerName").value = "";
	document.getElementById("address").value = "";
	document.getElementById("phoneNumber").value = "";

}

window.onload = function () {
	document.getElementById("dropdown").onchange = output;
	document.getElementById("submit").onclick = submitOrder;
	document.getElementById("clear").onclick = clear;
}
// db();;