//Object Problem 1

/*
Create a sample object, then write a JavaScript function 
that deletes the property of an object passed to it.

Your JavaScript function should take in two parameters, 
the object and the key/property you want to delete.
*/

let testObject = {
	'track': 'sprints',
	'basketball': 'dunk',
	'baseball': 'homerun',
	'soccer': 'hat trick',
}

myFunction = (object, property) => {

	delete object[property];
//deletes the designated property of the identified object

	return object;
//returns the object without the deleted property
}

console.log(myFunction(testObject, 'basketball'));
//calls the function using the test object and identifies the property to be deleted