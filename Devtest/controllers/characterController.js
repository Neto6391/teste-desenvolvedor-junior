/**
 * Function to Filter JSON Data and return Data filtered
 *
 * This function Get Data from Characters Rick And Morty
 * Get only characters 'Alive', and order By Quantity of
 * episodes by form descent and name by form ascent, using
 * function loacalCompare from JS
 *
 */
function filteredCharacters(charactersData) {
	const filterData = charactersData
		.filter(character => {
			return character.status === "Alive";
		})
		.sort((characterA, characterB) => {
			return (
				characterB.episode.length - characterA.episode.length ||
				characterA.name.localeCompare(characterB.name)
			);
		});
	return filterData;
}

//Get Characters and return to html
export function getCharacters(req, res, next) {
	//Load Json from folder Data
	const characterData = require("../data/characters.json");

	//Filter Json Data from function
	const filterCharacterData = filteredCharacters(characterData);

	res.render("index", {
		title: "Personagens",
		characters: filterCharacterData,
		episodeCounterSeasonOne: 0,
		episodeCounterSeasonTwo: 0,
		episodeCounterSeasonThree: 0
	});
}
