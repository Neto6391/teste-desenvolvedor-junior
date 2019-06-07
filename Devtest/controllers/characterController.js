import fs from "fs";

//Filter Data of Json Objects
function filterCharacters(data) {
	//Filter characters by for status 'Alive'
	const filterData = data
		.filter(element => {
			return element.status != "Dead";
		})
		//Sort characters by order Ascendent
		.sort((a, b) => {
			return a.name.substr(0, 1) <= b.name.substr(0, 1) ? -1 : 1;
		});
	//Sort Characters by Episode Ocorrence
	filterData.sort((a, b) => {
		return a.episode.length > b.episode.length ? -1 : 1;
	});

	return filterData;
}

//Get Characters and return to html
export function getCharacters(req, res, next) {
	const characterData = JSON.parse(
		fs.readFileSync("data/characters.json", "utf-8")
	);
	const filterCharacterData = filterCharacters(characterData);

	res.render("index", {
		title: "Personagens",
		characters: filterCharacterData,
		episodeCounterSeasonOne: 0,
		episodeCounterSeasonTwo: 0,
		episodeCounterSeasonThree: 0
	});
}
