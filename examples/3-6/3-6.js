var name = 'CY Chiu';
var age = 21;
var affiliation = 'NTHU';

var profile = {
	name: 'CY Chiu',
	age: '21',
	affiliation: 'NTHU',
	height: 161,
	contact: {
		home: 8861234567,
		mobile:[134218502, 2838954024, 34565566655]
	}
};

console.log(profile.name);
console.log(profile['name']);

profile.gender = 'female';

console.log(profile.gender);

console.log(profile.contact.home);

console.log(profile.contact.mobile[1]);

console.log(name.length);

console.log(profile.contact.mobile.length);