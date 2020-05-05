var mySQLpointer, connObj;
// var foodArray = [];

mySQLpointer = require("mysql");

connObj = mySQLpointer.createConnection( 
			{ 
				host:     "sql.wpc-is.online", 
				user:     "sychang4",
				password: "sych6438",
				database: "db_test_TeamA05"
			} );

connObj.connect( function(err) {
	if (err) 
		console.log("Connection Error: " + err.stack);
	else 
		console.log("Connected to Db! :-)  ID= " + connObj.threadId);
});

let sqlStmt;
sqlStmt = "SELECT * FROM Food_List";

connObj.query(sqlStmt, 
	function(err, dataSet, colSet) {
		if (err) 
			throw err;
		
		else {
			for(i=0;i<dataSet.length;i++){
			// console.log(dataSet[i].Name, dataSet[i].Picture_Num);
			// console.log()
			foodArray.push([dataSet[i].Name, dataSet[i].Picture_Num]);
			
			}
			console.log(foodArray);

		}
});

connObj.end();
exports.foodArray;