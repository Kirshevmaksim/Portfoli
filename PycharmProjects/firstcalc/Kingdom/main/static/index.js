
let debit= [[10000, 20000, 4444, 5565],[10000, 30000, 4444, 5565],[12000, 20000, 4444, 5565],[10000, 20000]];
let credit=[[5000,4344,5465,2299],[5000,2323,5465,9999],[4444,2222,10500,99,77],[50,2323,9999]];
let totalDebit=0;
let totalCredit=0;
let balanceMonth=0;
let debitYear=[];
let creditYear=[];
let balanceYear=[];
let totalBalanceYear=0;

for (var i = 0; i < debit.length; i++) {
	for (var p = 0; p < debit[i].length; p++) {
		totalDebit+=debit[i][p];
	}
	debitYear.push(totalDebit);
	totalDebit=0;
	console.log(debitYear);
}
for (var i = 0; i < debitYear.length; i++) {
	totalDebit+=debitYear[i]
}
console.log(totalDebit)


for (var i = 0; i < credit.length; i++) {
	for (var p = 0; p < credit[i].length; p++) {
		totalCredit+=credit[i][p];
	}
	creditYear.push(totalCredit);
	totalCredit=0;
	console.log(creditYear);
}
for (var i = 0; i < creditYear.length; i++) {
	totalCredit+=creditYear[i]
}
console.log(totalCredit);
totalBalanceYear=totalDebit-totalCredit;
for (var i = 0; i < debitYear.length; i++) {
	balanceYear.push(debitYear[i]-creditYear[i]);
}
console.log(balanceYear);
console.log(totalBalanceYear);