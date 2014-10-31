// var formattedName = HTMLheaderName.replace("%data%", 'Jeffrey Reiher');
// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

// $("#header").prepend(formattedName);
// $("#header").prepend(formattedRole);

var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Francisco"
	},
	"welcomeMessage": "Welcome my bio page enjoy what you see",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
		],
	"bioPic": "images/fry.jpg"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
