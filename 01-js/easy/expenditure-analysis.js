/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(...transactions) {
  return transactions;
}

let transaction1 = {id:1, category: 'apple', price: 12}
let transaction2 = {id:2, category: 'pepsi', price: 100}

const result = calculateTotalSpentByCategory(transaction1, transaction2);
console.log(result);
module.exports = calculateTotalSpentByCategory;
