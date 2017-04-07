var thelist = function () {
	var objJson = {
		"GroupName": "D",
		"count" : 4,
		"teams" : [
		{"country": "England" },
		{"country": "Australia" },
		{"country": "Sweden" },
		{"country": "India"} ]
	};
	return objJson;
};
exports.teamList = thelist();