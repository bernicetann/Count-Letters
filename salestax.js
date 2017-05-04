

// function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  // to do a for loop through array in objects in order to find sales,
  // within sales i am going to add each element in array (for loop)

  // for(var i = 0; i < salesData.length; i++) {
  //   var currentSalesData = salesData[i];
  //   console.log(currentSalesData);
  //   var currentSales = salesData[i].sales
  //   console.log(currentSales);
  //   var total = 0;
  //   for (var j = 0; j < currentSales.length; j++) {
  //     console.log(currentSales[j]);
  //     total = total + currentSales[j];
  //   }
  //   console.log(total);
  // }




  // then add the total numbers in array
  // find tax rate for whatever province it matches to
  // multiply total sales to the appropriate tax rates

  //add companySalesData[sales] together for a total of property totalSales
  //multiply totalSales by salesTaxRates to appropriate province

function calculateSalesTax(salesData, taxRates) {
  var finalObject = {};

  for (var i = 0; i < salesData.length; i++) {
    var currentSales = salesData[i].sales;
    var currentProvince = salesData[i].province;
    var currentName = salesData[i].name;
    var provinceTax = taxRates[currentProvince];
    total = 0;

    for (var j = 0; j < currentSales.length; j++) {
      total += currentSales[j];
    }

        var salesTax = total * provinceTax;

    if (finalObject[currentName]) {
      finalObject[currentName].totalSales += total;
      finalObject[currentName].totalTaxes += salesTax;
    } else {
      finalObject[currentName] = { totalSales: total, totalTaxes: salesTax};
    }

  }



  return finalObject;

}





var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);




