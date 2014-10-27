var formattedName = HTMLheaderName.replace("%data%", 'Jeffrey Reiher');
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);