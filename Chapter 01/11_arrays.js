function myFunction() {
	const array1 = [1, 2, 45, 32, 21, 88];
	const array2 = ['Ross', 'Monica', 'Chandler', 'Phoebe', 'Joey', 'Rachel'];
	
	Logger.log(array1[0]); // output: 1
	Logger.log(array2[2]); // output: 'Chandler'

	const names = ["Alice", "Bob", "Carol", "Dave", "Eve"];
	Logger.log(names.length); // Output: 5
	Logger.log(names[names.length - 1]); // names[4] => "Eve"
	Logger.log(names[names.length]); // names[5] => undefined

	for (let i = 0; i < names.length; i++) {
		Logger.log(names[i]);
	}
}

