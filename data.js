const stats = ["HP", "STR", "MAG", "SKL", "SPD", "LCK", "DEF", "RES", "CON", "MOV"];
const statsfull = ["HP", "Strength", "Magic", "Skill", "Speed", "Luck", "Defense", "Resistance", "Constitution", "Movement"];

const characters = ["Micaiah", "Edward", "Leonardo", "Nolan", "Laura", "Sothe", "Ilyana", "Aran", "Meg", "Volug", "Tauroneo", "Jill", "Zihark", "Fiona", "Tormod", "Muarim", "Vika", "Rafiel", "Nailah", 
	"Black Knight", "Elincia", "Marcia", "Nealuchi", "Leanne", "Haar", "Brom", "Nephenee", "Heather", "Lucia", "Lethe", "Mordecai", "Geoffrey", "Kieran", "Astrid", "Makalov", "Danved", "Calill", 
	"Ike", "Titania", "Soren", "Mist", "Rolf", "Boyd", "Oscar", "Shinon", "Gatrie", "Rhys", "Mia", "Ranulf", "Kyza", "Lyre", "Reyson", "Janaff", "Ulki", "Sigrun", "Tanith", 
	"Skirmir", "Sanaki", "Naesala", "Tibarn", "Pelleas", "Stefan", "Oliver", "Bastian", "Volke", "Caineghis", "Giffca", "Kurthnaga", "Ena", "Renning", "Gareth", "Nasir", "Sephiran"];

const charGrowths = new Map([
	["Micaiah", 	[40, 15, 80, 40, 35, 80, 20, 90, 0, 0]],
	["Edward", 		[75, 60,  6, 65, 60, 50, 35, 20, 0, 0]],
	["Leonardo", 	[60, 40, 15, 75, 35, 65, 35, 55, 0, 0]],
	["Nolan", 		[60, 45, 20, 70, 60, 60, 35, 40, 0, 0]],
	["Laura", 		[45, 20, 70, 70, 70, 50, 20, 35, 0, 0]],
	["Sothe",		[30, 60, 20, 80, 45, 65, 20, 30, 0, 0]],
	["Ilyana", 		[55, 45, 50, 60, 30, 40, 30, 50, 0, 0]],
	["Aran", 		[50, 75, 10, 75, 35, 35, 70, 25, 0, 0]],
	["Meg", 		[60, 35, 15, 40, 65, 75, 35, 50, 0, 0]],
	["Volug", 		[95, 25, 15, 35, 40, 90, 15, 10, 0, 0]],
	["Tauroneo", 	[55, 40,  5, 65, 50, 20, 45, 50, 0, 0]],
	["Jill", 		[50, 45, 15, 45, 65, 60, 35, 45, 0, 0]],
	["Zihark", 		[55, 35, 10, 75, 70, 40, 25, 35, 0, 0]],
	["Fiona", 		[45, 40, 15, 40, 60, 55, 55, 50, 0, 0]],
	["Tormod", 		[50, 55, 40, 45, 55, 25, 35, 45, 0, 0]],
	["Muarim", 		[60, 55,  5, 45, 20, 55, 35, 30, 0, 0]],
	["Vika", 		[60, 25, 50, 60, 60, 65, 15, 65, 0, 0]],
	["Rafiel", 		[60,  0, 40, 10, 20, 60, 10, 50, 0, 0]],
	["Nailah", 		[60, 30, 15, 20, 20, 45, 30, 30, 0, 0]],
	["Black Knight",[ 0,  0,  0,  0,  0,  0,  0,  0, 0, 0]],
	["Elincia", 	[45, 65, 40, 50, 70, 60, 20, 35, 0, 0]],
	["Marcia", 		[70, 30, 20, 40, 65, 50, 35, 35, 0, 0]],
	["Nealuchi", 	[55, 35, 10, 40, 40, 80, 40, 25, 0, 0]],
	["Leanne", 		[60,  0, 40, 10, 20, 80, 10, 40, 0, 0]],
	["Haar", 		[30, 70,  5, 70, 30, 45, 65, 20, 0, 0]],
	["Brom", 		[80, 40,  5, 40, 30, 70, 60, 25, 0, 0]],
	["Nephenee", 	[45, 35, 15, 70, 65, 40, 35, 45, 0, 0]],
	["Heather", 	[40, 25, 20, 50, 70, 75, 30, 40, 0, 0]],
	["Lucia", 		[50, 25, 20, 70, 60, 30, 15, 50, 0, 0]],
	["Lethe", 		[85, 35,  5, 30, 50, 45, 35, 20, 0, 0]],
	["Mordecai", 	[90, 35, 10, 25, 15, 80, 45, 15, 0, 0]],
	["Geoffrey", 	[60, 50, 10, 60, 35, 30, 30, 55, 0, 0]],
	["Kieran", 		[75, 60, 15, 40, 30, 30, 60, 25, 0, 0]],
	["Astrid", 		[55, 40, 20, 45, 40, 70, 30, 50, 0, 0]],
	["Makalov", 	[55, 40, 15, 40, 75, 45, 50, 25, 0, 0]],
	["Danved", 		[75, 40, 20, 30, 45, 60, 45, 25, 0, 0]],
	["Calill", 		[35, 25, 45, 60, 55, 55, 15, 50, 0, 0]],
	["Ike", 		[65, 55, 10, 60, 35, 30, 40, 15, 0, 0]],
	["Titania", 	[60, 60, 15, 55, 50, 40, 20, 30, 0, 0]],
	["Soren", 		[40, 25, 80, 60, 35, 35, 25, 70, 0, 0]],
	["Mist", 		[40, 25, 45, 55, 50, 70, 25, 40, 0, 0]],
	["Rolf", 		[85, 75, 10, 45, 45, 35, 35, 20, 0, 0]],
	["Boyd",		[80, 65,  5, 45, 45, 40, 50, 10, 0, 0]],
	["Oscar", 		[50, 35, 20, 65, 60, 55, 30, 20, 0, 0]],
	["Shinon", 		[50, 40, 15, 70, 65, 30, 45, 20, 0, 0]],
	["Gatrie", 		[50, 60,  5, 45, 60, 30, 60, 35, 0, 0]],
	["Rhys", 		[40, 25, 65, 35, 35, 60, 20, 75, 0, 0]],
	["Mia", 		[70, 45, 15, 60, 65, 35, 40, 25, 0, 0]],
	["Ranulf", 		[70, 30, 15, 40, 35, 55, 15, 10, 0, 0]],
	["Kyza", 		[85, 40,  5, 45, 35, 50, 40, 15, 0, 0]],
	["Lyre", 		[50, 35, 10, 65, 70, 50, 20, 30, 0, 0]],
	["Reyson", 		[65,  5, 30, 20, 20, 60, 20, 20, 0, 0]],
	["Janaff", 		[55, 40, 15, 45, 25, 50, 35, 10, 0, 0]],
	["Ulki", 		[65, 25, 30, 25, 40, 35, 30, 25, 0, 0]],
	["Sigrun", 		[40, 45, 10, 70, 25, 70, 10, 50, 0, 0]],
	["Tanith", 		[35, 55, 15, 75, 40, 35, 40, 30, 0, 0]],
	["Skirmir", 	[90, 35,  5, 35, 25, 20, 50,  5, 0, 0]],
	["Sanaki", 		[70, 40, 60, 60, 35, 55, 30, 50, 0, 0]],
	["Naesala", 	[40, 45, 15, 30, 45, 55, 15, 35, 0, 0]],
	["Tibarn", 		[75, 40,  5, 10, 20, 40, 40, 20, 0, 0]],
	["Pelleas", 	[35, 25, 55, 45, 60, 40, 30, 45, 0, 0]],
	["Stefan", 		[55, 50, 20, 60, 60, 15, 40, 50, 0, 0]],
	["Oliver", 		[65, 55, 35, 35, 45, 30, 30, 20, 0, 0]],
	["Bastian", 	[25, 20, 30, 70, 40, 40, 25, 50, 0, 0]],
	["Volke", 		[50, 50,  5, 60, 65, 20, 45, 15, 0, 0]],
	["Caineghis", 	[50, 40, 10, 40, 20, 40, 30, 10, 0, 0]],
	["Giffca", 		[40, 35, 10, 35, 50, 25, 30, 15, 0, 0]],
	["Kurthnaga", 	[95, 45, 15, 20, 35, 60, 25, 40, 0, 0]],
	["Ena", 		[50, 20, 50, 40, 40, 35, 15, 50, 0, 0]],
	["Renning", 	[40, 60, 10, 50, 40, 10, 70, 20, 0, 0]],
	["Gareth", 		[90, 40,  5, 30, 10, 65, 30, 25, 0, 0]],
	["Nasir", 		[70, 15, 45, 35, 20, 45, 15, 40, 0, 0]],
	["Sephiran", 	[ 0,  0,  0,  0,  0,  0,  0,  0, 0, 0]]
]);

const charBases = new Map([
	["Micaiah", 	[ 1, 15,  2,  7,  8,  7, 10,  2,  4,  5,  5]],
	["Edward", 		[ 4, 19,  7,  0, 11, 12,  8,  5,  0,  7,  6]],
	["Leonardo", 	[ 4, 17,  8,  0, 12, 10,  6,  5,  4,  7,  6]],
	["Nolan", 		[ 9, 29, 12,  0, 11, 10,  7,  9,  3, 13,  6]],
	["Laura", 		[ 1, 16,  3,  8,  3,  5,  8,  2, 10,  5,  5]],
	["Sothe",		[ 1, 35, 18,  4, 20, 20, 15, 14,  9,  8,  7]],
	["Ilyana", 		[12, 22,  6, 12, 12, 13,  6,  3,  9,  5,  5]],
	["Aran", 		[ 7, 24, 10,  0, 12, 10,  6, 11,  2, 11,  6]],
	["Meg", 		[ 3, 21, 10,  1,  7,  8,  8, 10,  5,  6,  5]],
	["Volug", 		[15, 49, 11,  2, 12, 13, 13,  9,  5, 11,  7]],
	["Tauroneo", 	[14, 38, 24, 12, 22, 20, 18, 21, 15, 11,  6]],
	["Jill", 		[14, 24, 11,  1, 12, 15, 14, 13, 11, 11,  7]],
	["Zihark", 		[ 3, 30, 17,  6, 22, 23, 11, 13, 11, 11,  7]],
	["Fiona", 		[ 9, 25,  8,  6,  8, 10,  7,  8,  6,  7,  8]],
	["Tormod", 		[ 5, 34, 13, 17, 16, 20, 14, 12, 14,  7,  6]],
	["Muarim", 		[19, 58, 18,  3, 14, 11, 12, 15,  9, 14,  7]],
	["Vika", 		[13, 38,  9,  5, 13, 15, 14,  7,  7,  6,  6]],
	["Rafiel", 		[12, 31,  1,  6,  1,  6, 31,  3, 13,  8,  5]],
	["Nailah", 		[33, 66, 17,  5, 23, 19, 35, 16, 13,  9,  7]],
	["Black Knight",[20, 70, 38, 18, 40, 30, 20, 35, 25, 13,  6]],
	["Elincia", 	[ 1, 36, 19, 17, 21, 22, 29, 18, 24,  6,  9]],
	["Marcia", 		[ 5, 34, 16,  6, 17, 20, 12, 16, 15,  7,  9]],
	["Nealuchi", 	[22, 53, 10,  4,  9, 18, 24, 10, 10,  7,  6]],
	["Leanne", 		[ 5, 25,  0,  3,  1,  6, 27,  2, 11,  5,  5]],
	["Haar", 		[11, 46, 23,  2, 24, 20, 13, 23,  7, 12,  9]],
	["Brom", 		[ 2, 36, 19,  4, 17, 16, 13, 21,  9, 11,  6]],
	["Nephenee", 	[ 1, 32, 15,  6, 19, 20, 12, 15, 14,  7,  7]],
	["Heather", 	[ 7, 32, 15,  9, 21, 25, 16, 10, 14,  7,  7]],
	["Lucia", 		[14, 38, 18, 10, 27, 27, 19, 14, 15,  8,  7]],
	["Lethe", 		[21, 51,  9,  6, 13, 12, 18,  9, 10,  6,  7]],
	["Mordecai", 	[16, 57, 14,  1,  9,  9, 15, 16,  4, 18,  7]],
	["Geoffrey", 	[15, 37, 24,  8, 23, 20, 19, 18, 15, 11,  9]],
	["Kieran", 		[11, 41, 21,  6, 20, 20, 16, 18, 11, 11,  9]],
	["Astrid", 		[ 2, 33, 13,  8, 16, 15, 17, 10, 14,  7,  9]],
	["Makalov", 	[ 7, 37, 18,  5, 17, 18, 20, 17,  9, 10,  9]],
	["Danved", 		[ 9, 39, 17,  8, 23, 21, 18, 15, 12, 12,  7]],
	["Calill", 		[ 6, 32,  9, 19, 18, 18, 16, 11, 17,  7,  6]],
	["Ike", 		[11, 44, 24,  2, 28, 23, 14, 21,  7, 12,  7]],
	["Titania", 	[16, 36, 25, 10, 22, 21, 19, 20, 14,  8,  9]],
	["Soren", 		[ 5, 28,  9, 23, 21, 18, 11,  9, 21,  6,  6]],
	["Mist", 		[ 1, 28,  8, 13, 13, 15, 16,  7, 16,  5,  7]],
	["Rolf", 		[ 1, 32, 17,  3, 20, 19, 13, 13,  9,  6,  7]],
	["Boyd",		[ 8, 45, 22,  1, 20, 18, 13, 15,  8, 12,  7]],
	["Oscar", 		[12, 38, 20,  7, 22, 21, 18, 17, 13, 11,  9]],
	["Shinon", 		[13, 43, 21,  7, 28, 24, 15, 20, 14, 10,  7]],
	["Gatrie", 		[10, 44, 25,  5, 18, 20, 15, 24, 11, 13,  6]],
	["Rhys", 		[ 3, 27,  8, 23, 16, 14, 21,  7, 24,  9,  6]],
	["Mia", 		[ 7, 34, 17,  5, 26, 28, 18, 13,  8,  7,  7]],
	["Ranulf", 		[26, 55, 14,  6, 16, 15, 23, 13, 10,  9,  7]],
	["Kyza", 		[18, 55, 10,  3, 10, 11, 14, 10,  5, 12,  7]],
	["Lyre", 		[17, 47,  7,  6, 11, 11, 16,  7,  8,  6,  7]],
	["Reyson", 		[15, 40,  3,  5,  5, 11, 31,  6, 17,  8,  6]],
	["Janaff", 		[29, 57, 16,  2, 19, 17, 30, 12,  8,  6,  7]],
	["Ulki", 		[28, 59, 14,  3, 17, 18, 25, 11, 10, 10,  7]],
	["Sigrun", 		[19, 34, 18, 13, 22, 24, 28, 20, 22,  7,  9]],
	["Tanith", 		[16, 35, 20, 10, 21, 23, 22, 19, 20,  8,  9]],
	["Skirmir", 	[25, 66, 19,  3, 14, 13, 24, 16,  9, 16,  7]],
	["Sanaki", 		[ 1, 28,  2, 33, 22, 23, 32, 10, 28,  4,  6]],
	["Naesala", 	[27, 60, 17,  7, 20, 21, 20, 13, 14, 11,  7]],
	["Tibarn", 		[31, 68, 18,  2, 24, 20, 29, 16, 10, 14,  8]],
	["Pelleas", 	[12, 33, 13, 24, 20, 21, 14, 14, 19,  9,  6]],
	["Stefan", 		[ 8, 53, 27,  7, 37, 36, 20, 21, 16, 13,  7]],
	["Oliver", 		[ 8, 48, 22, 31, 22, 20, 28, 18, 32, 12,  6]],
	["Bastian", 	[10, 45, 21, 35, 27, 24, 21, 20, 32, 10,  6]],
	["Volke", 		[13, 52, 30,  5, 36, 35, 19, 26, 22, 11,  7]],
	["Caineghis", 	[36, 76, 22,  4, 23, 17, 30, 22, 10, 17,  7]],
	["Giffca", 		[36, 73, 21,  4, 22, 18, 28, 20, 11, 17,  7]],
	["Kurthnaga", 	[20, 55, 15,  7,  8, 10, 21, 15, 15,  7,  6]],
	["Ena", 		[22, 59, 10, 15, 13, 11, 18, 13, 17,  6,  5]],
	["Renning", 	[16, 56, 31, 18, 32, 29, 24, 27, 23, 11,  9]],
	["Gareth", 		[31, 82, 22,  5, 10,  7, 20, 21,  9, 18,  5]],
	["Nasir", 		[34, 74,  7, 24, 13,  8, 19, 12, 21, 11,  5]],
	["Sephiran", 	[20, 50, 11, 40, 40, 40, 40, 23, 40,  9,  6]]
]);

const promotions1 = new Map([
	["Micaiah", 	[2, 3, 1, 1, 1, 0, 3, 1, 1, 1]],
	["Edward", 		[2, 1, 2, 1, 1, 0, 1, 2, 1, 1]],
	["Leonardo", 	[2, 1, 2, 1, 1, 0, 1, 2, 1, 1]],
	["Nolan", 		[2, 1, 2, 1, 1, 0, 1, 2, 1, 1]],
	["Laura", 		[2, 3, 1, 1, 1, 0, 3, 1, 1, 1]],
	["Ilyana", 		[2, 3, 1, 1, 1, 0, 3, 1, 1, 1]],
	["Aran", 		[2, 1, 2, 1, 1, 0, 1, 2, 1, 1]],
	["Meg", 		[2, 2, 2, 1, 1, 0, 2, 2, 0, 1]],
	["Jill", 		[2, 2, 2, 1, 1, 0, 2, 2, 1, 1]],
	["Fiona", 		[2, 1, 2, 1, 1, 0, 1, 2, 0, 1]],
]);

const promotions2 = new Map([
	["Micaiah", 	[4, 5, 2, 2, 2, 0, 5, 2, 0, 0]],
	["Edward", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Leonardo", 	[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Nolan", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Laura", 		[4, 5, 2, 2, 2, 0, 5, 2, 0, 0]],
	["Sothe",		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Ilyana", 		[4, 5, 2, 2, 2, 0, 5, 2, 0, 0]],
	["Aran", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Meg", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Tauroneo", 	[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Jill", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Zihark", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Fiona", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Tormod", 		[4, 4, 2, 2, 2, 0, 4, 2, 0, 0]],
	["Marcia", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Haar", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Brom", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Nephenee", 	[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Heather", 	[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Lucia", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Geoffrey", 	[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Kieran", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Astrid", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Makalov", 	[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Danved", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Calill", 		[4, 5, 2, 2, 2, 0, 5, 2, 0, 0]],
	["Ike", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Titania", 	[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Soren", 		[4, 4, 2, 2, 2, 0, 4, 2, 0, 0]],
	["Mist", 		[4, 5, 2, 2, 2, 0, 5, 2, 0, 2]],
	["Rolf", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Boyd",		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Oscar", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Shinon", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Gatrie", 		[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]],
	["Rhys", 		[4, 4, 2, 2, 2, 0, 4, 2, 0, 0]],
	["Mia", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Sigrun", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Tanith", 		[4, 3, 4, 2, 2, 0, 3, 4, 0, 0]],
	["Pelleas", 	[4, 2, 4, 2, 2, 0, 2, 4, 0, 0]]
]);

const caps1 = new Map([
	["Micaiah", 	[30, 10, 20, 20, 20, 40, 10, 20]],
	["Edward", 		[30, 20, 10, 20, 20, 30, 20, 10]],
	["Leonardo", 	[40, 20, 10, 20, 20, 30, 20, 10]],
	["Nolan", 		[45, 20,  5, 20, 20, 30, 20, 10]],
	["Laura", 		[30, 10, 20, 15, 15, 40, 10, 20]],
	["Ilyana", 		[30, 10, 20, 20, 20, 30, 10, 20]],
	["Aran", 		[40, 20, 10, 20, 20, 30, 20, 10]],
	["Meg", 		[40, 20, 10, 20, 20, 30, 20, 10]],
	["Jill", 		[40, 20,  5, 20, 20, 30, 20, 10]],
	["Fiona", 		[40, 20, 10, 20, 20, 30, 20, 10]],
]);

const caps2 = new Map([
	["Micaiah", 	[40, 15, 30, 23, 25, 40, 15, 30]],
	["Edward", 		[40, 24, 15, 30, 30, 30, 23, 15]],
	["Leonardo", 	[45, 27, 10, 30, 26, 30, 24, 16]],
	["Nolan", 		[53, 30,  5, 26, 27, 30, 23, 13]],
	["Laura", 		[40, 15, 25, 22, 23, 40, 17, 32]],
	["Sothe",		[40, 22, 15, 26, 30, 40, 20, 15]],
	["Ilyana", 		[40, 15, 26, 23, 24, 30, 15, 25]],
	["Aran", 		[45, 26, 15, 26, 26, 30, 25, 17]],
	["Meg", 		[45, 27, 15, 24, 22, 30, 30, 22]],
	["Tauroneo", 	[45, 27, 15, 25, 23, 30, 30, 20]],
	["Jill", 		[50, 28,  5, 26, 25, 30, 25, 14]],
	["Zihark", 		[40, 24, 15, 30, 30, 30, 23, 15]],
	["Fiona", 		[45, 25, 15, 24, 24, 30, 23, 18]],
	["Tormod", 		[40, 15, 25, 23, 25, 30, 17, 23]],
	["Marcia", 		[40, 24, 15, 24, 27, 35, 22, 25]],
	["Haar", 		[50, 29,  5, 26, 24, 30, 26, 13]],
	["Brom", 		[45, 28, 15, 25, 22, 30, 30, 20]],
	["Nephenee", 	[45, 25, 15, 26, 27, 30, 24, 18]],
	["Heather", 	[40, 21, 15, 25, 30, 30, 20, 17]],
	["Lucia", 		[40, 23, 15, 30, 30, 30, 22, 17]],
	["Geoffrey", 	[45, 25, 15, 24, 24, 30, 25, 16]],
	["Kieran", 		[45, 26, 15, 25, 23, 30, 24, 16]],
	["Astrid", 		[40, 23, 15, 27, 26, 30, 23, 20]],
	["Makalov", 	[45, 24, 15, 24, 25, 30, 25, 16]],
	["Danved", 		[45, 26, 15, 26, 26, 30, 25, 17]],
	["Calill", 		[40, 15, 25, 23, 25, 30, 15, 25]],
	["Ike", 		[50, 27, 10, 30, 30, 30, 26, 15]],
	["Titania", 	[45, 26, 15, 25, 25, 30, 22, 16]],
	["Soren", 		[40, 15, 27, 23, 23, 30, 17, 23]],
	["Mist", 		[40, 17, 24, 25, 24, 40, 18, 28]],
	["Rolf", 		[45, 27, 10, 30, 26, 30, 24, 16]],
	["Boyd",		[53, 30,  5, 26, 27, 30, 23, 13]],
	["Oscar", 		[45, 25, 15, 24, 24, 30, 25, 16]],
	["Shinon", 		[45, 27, 10, 30, 26, 30, 24, 16]],
	["Gatrie", 		[45, 27, 15, 25, 23, 30, 30, 20]],
	["Rhys", 		[40, 15, 25, 22, 23, 25, 19, 30]],
	["Mia", 		[40, 23, 15, 30, 30, 30, 22, 17]],
	["Sigrun", 		[40, 24, 15, 24, 27, 35, 22, 25]],
	["Tanith", 		[40, 24, 15, 24, 27, 35, 22, 25]],
	["Pelleas", 	[40, 15, 26, 23, 24, 30, 17, 23]]
]);

const caps3 = new Map([
	["Micaiah", 	[50, 22, 40, 35, 33, 40, 23, 40]],
	["Edward", 		[55, 32, 20, 40, 40, 30, 25, 24]],
	["Leonardo", 	[45, 27, 10, 30, 26, 30, 24, 16]],
	["Nolan", 		[68, 40, 10, 36, 35, 30, 30, 20]],
	["Laura", 		[45, 23, 38, 30, 31, 40, 21, 40]],
	["Sothe",		[50, 28, 20, 38, 40, 35, 26, 25]],
	["Ilyana", 		[45, 24, 39, 34, 30, 30, 24, 38]],
	["Aran", 		[60, 35, 20, 35, 33, 30, 34, 27]],
	["Meg", 		[60, 36, 20, 33, 32, 30, 35, 32]],
	["Volug", 		[70, 20,  7, 23, 18, 35, 15, 10]],
	["Tauroneo", 	[60, 36, 20, 34, 31, 30, 37, 30]],
	["Jill", 		[55, 35, 10, 38, 35, 35, 36, 22]],
	["Zihark", 		[55, 32, 20, 40, 40, 30, 25, 24]],
	["Fiona", 		[55, 33, 20, 34, 34, 35, 28, 27]],
	["Tormod", 		[50, 24, 38, 34, 32, 30, 25, 36]],
	["Muarim", 		[75, 23,  5, 18, 15, 30, 22, 10]],
	["Vika", 		[60, 16, 10, 19, 23, 35, 12, 18]],
	["Rafiel", 		[60,  5, 15, 10, 15, 50, 10, 25]],
	["Nailah", 		[70, 20,  7, 24, 20, 40, 20, 15]],
	["Black Knight",[70, 40, 20, 40, 35, 30, 40, 35]],
	["Elincia", 	[50, 30, 30, 36, 35, 40, 26, 36]],
	["Marcia", 		[50, 32, 20, 36, 36, 35, 28, 34]],
	["Nealuchi", 	[60, 16, 10, 19, 23, 35, 13, 17]],
	["Leanne", 		[60,  5, 15, 10, 15, 50, 10, 25]],
	["Haar", 		[60, 38, 10, 38, 32, 30, 38, 20]],
	["Brom", 		[60, 37, 20, 35, 30, 30, 36, 30]],
	["Nephenee", 	[58, 34, 20, 35, 34, 30, 33, 30]],
	["Heather", 	[50, 28, 20, 38, 40, 35, 25, 26]],
	["Lucia", 		[50, 31, 20, 40, 40, 35, 25, 26]],
	["Lethe", 		[65, 18, 10, 20, 20, 30, 14, 16]],
	["Mordecai", 	[75, 23,  5, 18, 15, 30, 22, 10]],
	["Geoffrey", 	[60, 35, 20, 34, 32, 30, 30, 25]],
	["Kieran", 		[60, 36, 20, 35, 31, 30, 30, 24]],
	["Astrid", 		[50, 33, 20, 36, 35, 35, 27, 30]],
	["Makalov", 	[60, 34, 20, 34, 33, 30, 30, 25]],
	["Danved", 		[60, 35, 20, 35, 33, 30, 34, 27]],
	["Calill", 		[50, 24, 38, 34, 32, 30, 23, 38]],
	["Ike", 		[65, 37, 15, 40, 37, 30, 32, 23]],
	["Titania", 	[60, 34, 20, 35, 33, 30, 28, 26]],
	["Soren", 		[50, 23, 40, 34, 32, 30, 24, 36]],
	["Mist", 		[50, 25, 35, 35, 34, 35, 24, 36]],
	["Rolf", 		[45, 27, 10, 30, 26, 30, 24, 16]],
	["Boyd",		[68, 40, 10, 36, 35, 30, 30, 20]],
	["Oscar", 		[60, 35, 20, 34, 32, 30, 30, 25]],
	["Shinon", 		[45, 27, 10, 30, 26, 30, 24, 16]],	
	["Gatrie", 		[60, 36, 20, 34, 31, 30, 37, 30]],
	["Rhys", 		[50, 25, 36, 30, 30, 35, 22, 40]],
	["Mia", 		[50, 31, 20, 40, 40, 35, 25, 26]],
	["Ranulf", 		[65, 18, 10, 20, 20, 30, 16, 14]],
	["Kyza", 		[75, 23,  5, 18, 15, 30, 22, 10]],
	["Lyre", 		[65, 18, 10, 20, 20, 30, 14, 16]],
	["Reyson", 		[60,  5, 13, 10, 16, 50, 12, 24]],
	["Janaff", 		[65, 19,  5, 23, 21, 35, 16, 12]],
	["Ulki", 		[65, 19,  5, 23, 21, 35, 16, 12]],
	["Sigrun", 		[50, 32, 20, 36, 36, 35, 28, 34]],
	["Tanith", 		[50, 32, 20, 36, 36, 35, 28, 34]],
	["Skirmir", 	[80, 24,  5, 23, 17, 30, 23, 12]],
	["Sanaki", 		[45, 20, 40, 33, 32, 40, 20, 40]],
	["Naesala", 	[70, 20, 10, 22, 25, 30, 17, 19]],
	["Tibarn", 		[75, 22,  6, 25, 23, 35, 20, 14]],
	["Pelleas", 	[50, 25, 39, 34, 31, 30, 24, 36]],
	["Stefan", 		[55, 32, 20, 40, 40, 30, 25, 24]],
	["Oliver", 		[50, 25, 36, 30, 30, 35, 22, 40]],
	["Bastian", 	[50, 23, 40, 34, 32, 30, 24, 36]],
	["Volke", 		[55, 32, 15, 40, 40, 25, 30, 25]],
	["Caineghis", 	[80, 24,  5, 23, 20, 35, 23, 12]],
	["Giffca", 		[80, 24,  5, 23, 20, 35, 23, 12]],
	["Kurthnaga", 	[80, 23, 12, 18, 16, 30, 23, 19]],
	["Ena", 		[70, 20, 20, 15, 14, 30, 20, 20]],
	["Renning", 	[60, 34, 20, 34, 33, 30, 30, 25]],
	["Gareth", 		[90, 25, 10, 15, 10, 30, 23, 15]],
	["Nasir", 		[90, 10, 25, 15, 10, 30, 15, 23]],
	["Sephiran", 	[50, 25, 40, 40, 40, 40, 25, 40]]
]);

const laguz = ["Volug", "Muarim", "Vika", "Rafiel", "Nailah", "Nealuchi", "Leanne", "Lethe", "Mordecai", "Ranulf", "Kyza", "Lyre", 
	"Reyson", "Janaff", "Ulki", "Skirmir", "Naesala", "Tibarn","Caineghis", "Giffca", "Kurthnaga", "Ena", "Gareth", "Nasir"];

const transfers = ["Sothe", "Ilyana", "Tauroneo", "Jill", "Zihark", "Tormod", "Muarim", "Elincia", "Marcia", "Haar", "Brom", "Nephenee", "Lucia", "Lethe", "Mordecai", 
	"Geoffrey", "Kieran", "Astrid", "Makalov", "Danved", "Calill", "Ike", "Titania", "Soren", "Mist", "Rolf", "Boyd", "Oscar", "Shinon", "Gatrie", "Rhys", "Mia", 
	"Ranulf", "Reyson", "Janaff", "Ulki", "Sigrun", "Tanith", "Naesala", "Tibarn", "Stefan", "Bastian", "Volke", "Giffca", "Ena", "Nasir", ];

function updateHit(){
	trueHitRate = ((displayedHit.value * (2 * displayedHit.value + 1) - (Math.abs(displayedHit.value - 50.5) / (displayedHit.value - 50.5) + 1) * ((displayedHit.value - 50) * (2 * displayedHit.value - 99))) / 100).toString() + "%";
	spaces = 1.75*(6 - trueHitRate.length);
	if (displayedHit.value == 100){
		spaces -= 1;
	}
	for (let i = 0; i < spaces; i++){
		trueHitRate += "&nbsp";
	}
	trueHit.innerHTML = trueHitRate;
}

function updatePL(){
	if (!playerLaguz.checked){
		playerTransformed.checked = false;
	}
	updateEXP();
}

function updatePT(){
	if (playerTransformed.checked){
		playerLaguz.checked = true;
	}
	updateEXP();
}

function updateEL(){
	if (!enemyLaguz.checked){
		enemyTransformed.checked = false;
	}
	updateEXP();
}

function updateET(){
	if (enemyTransformed.checked){
		enemyLaguz.checked = true;
	}
	updateEXP();
}

function updateEXP(){
	if (!playerLaguz.checked){
		if (playerLevel.length < 60){
			currentLevel = playerLevel.value;
			for (let i = 0; i < 60; i++) {
				playerLevel[i] = new Option(60-i);
			}
			playerLevel.value = currentLevel;
		}
	}
	else{
		while (playerLevel.length > 40){
			playerLevel.remove(0);
		}
	}
	if (!enemyLaguz.checked){
		if (enemyLevel.length < 60){
			currentLevel = enemyLevel.value;
			for (let i = 0; i < 60; i++) {
				enemyLevel[i] = new Option(60-i);
			}
			enemyLevel.value = currentLevel;
		}
	}
	else{
		while (enemyLevel.length > 40){
			enemyLevel.remove(0);
		}
	}
	let mode = 31 - difficulty.selectedIndex * 10;
	if (difficulty.selectedIndex == 0){
		mode += 8;
	}
	let laguzBonus = 0;
	if (enemyLaguz){
		laguzBonus = 5;
		if (difficulty.selectedIndex == 2){
			laguzBonus = 10;
		}
	}
	let expGain = Math.max(Math.floor((mode + enemyLevel.value * (enemyTransformed.checked + 1) - playerLevel.value * 1 * (playerTransformed.checked + 1)) / 2) + laguzBonus, 1);
	if (killEXP.checked){
		let playerClassBonus = 0;
		let enemyClassBonus = 0;
		if (difficulty.selectedIndex < 2){
			if (playerLaguz.checked && playerLevel.value >= 15){
				playerClassBonus = 15;
			}
			else if ((playerLaguz.checked && playerLevel.value < 15) || (!playerLaguz.checked && playerLevel.value <= 20)){
				playerClassBonus = 5;
			}
			else {
				playerClassBonus = 10;
			}
			if (enemyLaguz.checked && enemyLevel.value >= 15){
				enemyClassBonus = 15;
			}
			else if ((enemyLaguz.checked && enemyLevel.value < 15) || (!enemyLaguz.checked && enemyLevel.value <= 20)){
				enemyClassBonus = 5;
			}
			else {
				enemyClassBonus = 10;
			}
		}
		let modeBonus = 15;
		if (difficulty.selectedIndex == 0){
			modeBonus = 28;
		}
		let bossBonus = 0;
		if (bossEXP.checked){
			bossBonus = 50 - 10 * difficulty.selectedIndex;
			if (difficulty.selectedIndex == 0){
				bossBonus += 10;
			}
		}
		let thiefBonus = 0;
		if (thiefEXP.checked){
			thiefBonus = 30 - 10 * difficulty.selectedIndex;
		}
		expGain += Math.max(enemyLevel.value * (enemyTransformed.checked + 1) - playerLevel.value * 1 * (playerTransformed.checked + 1) + enemyClassBonus - playerClassBonus + modeBonus + bossBonus + thiefBonus, 0);
	}
	expGain = Math.min(Math.floor(expGain * (1 + paragonEXP.checked) * (1 - 0.5 * blossomEXP.checked)), 100);
	exp.innerHTML = expGain + " EXP";
}

function updateCharacter(){
	if (["Rafiel", "Leanne", "Reyson"].includes(character.value)){
		if (transformation.length > 2){
			transformation.remove(2);
			transformation2.remove(2);
		}
	}
	else{
		transformation[2] = new Option("Wildheart");
		transformation2[2] = new Option("Wildheart");
	}
	transferHP.checked = false;
	transferSTR.checked = false;
	transferMAG.checked = false;
	transferSKL.checked = false;
	transferSPD.checked = false;
	transferLCK.checked = false;
	transferDEF.checked = false;
	transferRES.checked = false;
	if (transfers.includes(character.value)){
		transferHP.disabled = false;
		transferSTR.disabled = false;
		transferMAG.disabled = false;
		transferSKL.disabled = false;
		transferSPD.disabled = false;
		transferLCK.disabled = false;
		transferDEF.disabled = false;
		transferRES.disabled = false;
	}
	else{
		transferHP.disabled = true;
		transferSTR.disabled = true;
		transferMAG.disabled = true;
		transferSKL.disabled = true;
		transferSPD.disabled = true;
		transferLCK.disabled = true;
		transferDEF.disabled = true;
		transferRES.disabled = true;
	}
	updateTable();
}

function updateTable(checked, sHP=36, sStr=20, sMag=5, sSkl=20, sSpd=20, sLck=20, sDef=15, sRes=10){
	char = character.value;
	if (character.value == "Sothe"){
		for (let i = 0; i < 8; i++){
			this["transfer"+stats[i]].checked = checked;
		}
	}
	var growthsTable = document.getElementById("growthsTable");
	while (growthsTable.rows.length > 3){
		growthsTable.deleteRow(2);
	}
	row = growthsTable.insertRow(2);
	if (laguz.includes(char)){
		level = row.insertCell(0).innerHTML = "<b>Laguz</b>";
	}
	else if (caps1.get(char) != undefined){
		level = row.insertCell(0).innerHTML = "<b>Tier 1</b>";
	}
	else if (caps2.get(char) != undefined){
		level = row.insertCell(0).innerHTML = "<b>Tier 2</b>";
	}
	else {
		level = row.insertCell(0).innerHTML = "<b>Tier 3</b>";
	}
	hp = row.insertCell(1).innerHTML = "<span id=\"BaseHP\"></span>";
	str = row.insertCell(2).innerHTML = "<span id=\"BaseSTR\"></span>";
	mag = row.insertCell(3).innerHTML = "<span id=\"BaseMAG\"></span>";
	skl = row.insertCell(4).innerHTML = "<span id=\"BaseSKL\"></span>";
	spd = row.insertCell(5).innerHTML = "<span id=\"BaseSPD\"></span>";
	lck = row.insertCell(6).innerHTML = "<span id=\"BaseLCK\"></span>";
	def = row.insertCell(7).innerHTML = "<span id=\"BaseDEF\"></span>";
	res = row.insertCell(8).innerHTML = "<span id=\"BaseRES\"></span>";
	con = row.insertCell(9).innerHTML = "<span id=\"BaseCON\"></span>";
	mov = row.insertCell(10).innerHTML = "<span id=\"BaseMOV\"></span>";
	for (let i = 0; i < 10; i++){
		let stat = charBases.get(char)[i+1];
		if (i < 8) {
			if (this["transfer"+stats[i]].checked && char != "Sothe"){
				stat += 2;
				if (i == 0){
					stat += 3;
				}
			}
			if (caps1.get(char) != undefined){
				stat = Math.min(stat, caps1.get(char)[i]);
			}
			else if (caps2.get(char) != undefined){
				stat = Math.min(stat, caps2.get(char)[i]);
			}
			else if ([1, 2, 3, 4, 6, 7].includes(i) && laguz.includes(char) && transformation.value == "Transformed"){
				stat = Math.min(stat, caps3.get(char)[i]) * 2;
			}
			else if ([1, 2, 3, 4, 6, 7].includes(i) && laguz.includes(char) && transformation.value == "Wildheart"){
				stat = Math.floor(Math.min(stat, Math.floor(caps3.get(char)[i])) * 1.5);
			}
			else {
				stat = Math.min(stat, caps3.get(char)[i]);
			}
		}
		if (i < 8){
			if (char == "Sothe" && this["transfer"+stats[i]].checked){
				this["Base"+(stats[i])].innerHTML = "<select id=\"sothe"+stats[i]+"\" onChange=\"updateTable(true, sotheHP.value, sotheSTR.value, sotheMAG.value, sotheSKL.value, sotheSPD.value, sotheLCK.value, sotheDEF.value, sotheRES.value)\"></select>"
				let PoRbase = 5;
				let PoRcap = 20;
				if (i == 0){
					PoRbase = 20;
					PoRcap = 40;
				}
				if (i == 2){
					PoRbase = 1;
					PoRcap = 15;
				}
				if (i == 3){
					PoRbase = 7;
				}
				if (i == 4){
					PoRbase = 11;
				}
				if (i == 5){
					PoRcap = 40;
				}
				if (i == 6){
					PoRbase = 4;
				}
				if (i == 7){
					PoRbase = 0;
					PoRcap = 15;
				}
				for (let j = PoRcap; j >= PoRbase; j--){
					this["sothe"+stats[i]][this["sothe"+stats[i]].length] = new Option(j);
				}
				if (i == 0){
					sotheHP.value = sHP;
				}
				else if (i == 1){
					sotheSTR.value = sStr;
				}
				else if (i == 2){
					sotheMAG.value = sMag;
				}
				else if (i == 3){
					sotheSKL.value = sSkl;
				}
				else if (i == 4){
					sotheSPD.value = sSpd;
				}
				else if (i == 5){
					sotheLCK.value = sLck;
				}
				else if (i == 6){
					sotheDEF.value = sDef;
				}
				else if (i == 7){
					sotheRES.value = sRes;
				}
			}
			else{
				this["Base"+(stats[i])].innerHTML = stat;
			}
		}
		else{
			this["Base"+(stats[i])].innerHTML = stat;
		}
	}
	if (this["transferHP"].checked && char == "Sothe"){
		currentHP = sotheHP.value * 1;
		currentSTR = sotheSTR.value * 1;
		currentMAG = sotheMAG.value * 1;
		currentSKL = sotheSKL.value * 1;
		currentSPD = sotheSPD.value * 1;
		currentLCK = sotheLCK.value * 1;
		currentDEF = sotheDEF.value * 1;
		currentRES = sotheRES.value * 1;
	}
	else{
		currentHP = charBases.get(char)[1];
		currentSTR = charBases.get(char)[2];
		currentMAG = charBases.get(char)[3];
		currentSKL = charBases.get(char)[4];
		currentSPD = charBases.get(char)[5];
		currentLCK = charBases.get(char)[6];
		currentDEF = charBases.get(char)[7];
		currentRES = charBases.get(char)[8];
	}
	if (laguz.includes(char) && transformation.value == "Transformed"){
		currentSTR *= 2;
		currentMAG *= 2;
		currentSKL *= 2;
		currentSPD *= 2;
		currentDEF *= 2;
		currentRES *= 2;
	}
	else if (laguz.includes(char) && transformation.value == "Wildheart"){
		currentSTR = Math.floor(currentSTR * 1.5);
		currentMAG = Math.floor(currentMAG * 1.5);
		currentSKL = Math.floor(currentSKL * 1.5);
		currentSPD = Math.floor(currentSPD * 1.5);
		currentDEF = Math.floor(currentDEF * 1.5);
		currentRES = Math.floor(currentRES * 1.5);
	}
	currentCON = charBases.get(char)[9];
	currentMOV = charBases.get(char)[10];
	for (let i = 0; i < 8; i++){
		if (this["transfer"+stats[i]].checked && char != "Sothe"){
			this["current"+stats[i]] += 2;
			if (i == 0){
				this["current"+stats[i]] += 3;
			}
		}
	}
	if (caps1.get(char) != undefined){
		let baseLevel = charBases.get(char)[0];
		for (let i = baseLevel-1; i < promoLevel1.value - 1; i++){
			row = growthsTable.insertRow(growthsTable.rows.length - 1);
			let level = row.insertCell(0);
			let hp = row.insertCell(1);
			let str = row.insertCell(2);
			let mag = row.insertCell(3);
			let skl = row.insertCell(4);
			let spd = row.insertCell(5);
			let lck = row.insertCell(6);
			let def = row.insertCell(7);
			let res = row.insertCell(8);
			let con = row.insertCell(9);
			let mov = row.insertCell(10);
			level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
			hp.innerHTML = "<span id=\"T1level"+(i+2).toString()+"HP\"></span>";
			str.innerHTML = "<span id=\"T1level"+(i+2).toString()+"STR\"></span>";
			mag.innerHTML = "<span id=\"T1level"+(i+2).toString()+"MAG\"></span>";
			skl.innerHTML = "<span id=\"T1level"+(i+2).toString()+"SKL\"></span>";
			spd.innerHTML = "<span id=\"T1level"+(i+2).toString()+"SPD\"></span>";
			lck.innerHTML = "<span id=\"T1level"+(i+2).toString()+"LCK\"></span>";
			def.innerHTML = "<span id=\"T1level"+(i+2).toString()+"DEF\"></span>";
			res.innerHTML = "<span id=\"T1level"+(i+2).toString()+"RES\"></span>";
			con.innerHTML = "<span id=\"T1level"+(i+2).toString()+"CON\"></span>";
			mov.innerHTML = "<span id=\"T1level"+(i+2).toString()+"MOV\"></span>";
			for (let j = 0; j < 10; j++){
				this["current"+stats[j]] += charGrowths.get(char)[j] / 100;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;

				if (this["current"+stats[j]] >= caps1.get(char)[j]){
					this["current"+stats[j]] = caps1.get(char)[j];
					this["T1level"+(i+2).toString()+stats[j]].innerHTML = "<b>"+this["current"+stats[j]]+"</b>";
				}
				else{
					this["T1level"+(i+2).toString()+stats[j]].innerHTML = this["current"+stats[j]];
				}
			}
		}
		currentHP += promotions1.get(char)[0];
		currentSTR += promotions1.get(char)[1];
		currentMAG += promotions1.get(char)[2];
		currentSKL += promotions1.get(char)[3];
		currentSPD += promotions1.get(char)[4];
		currentLCK += promotions1.get(char)[5];
		currentDEF += promotions1.get(char)[6];
		currentRES += promotions1.get(char)[7];
		currentCON += promotions1.get(char)[8];
		currentMOV += promotions1.get(char)[9];
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		let level = row.insertCell(0).innerHTML = "<b>Tier 2</b>";
		let hp = row.insertCell(1).innerHTML = "<b>"+Math.round(currentHP * 100) / 100+"</b>";
		let str = row.insertCell(2).innerHTML = "<b>"+Math.round(currentSTR * 100) / 100+"</b>";
		let mag = row.insertCell(3).innerHTML = "<b>"+Math.round(currentMAG * 100) / 100+"</b>";
		let skl = row.insertCell(4).innerHTML = "<b>"+Math.round(currentSKL * 100) / 100+"</b>";
		let spd = row.insertCell(5).innerHTML = "<b>"+Math.round(currentSPD * 100) / 100+"</b>";
		let lck = row.insertCell(6).innerHTML = "<b>"+Math.round(currentLCK * 100) / 100+"</b>";
		let def = row.insertCell(7).innerHTML = "<b>"+Math.round(currentDEF * 100) / 100+"</b>";
		let res = row.insertCell(8).innerHTML = "<b>"+Math.round(currentRES * 100) / 100+"</b>";
		let con = row.insertCell(9).innerHTML = "<b>"+Math.round(currentCON * 100) / 100+"</b>";
		let mov = row.insertCell(10).innerHTML = "<b>"+Math.round(currentMOV * 100) / 100+"</b>";
	}
	let baseLevel = 1;
	if (caps1.get(char) == undefined){
		baseLevel = charBases.get(char)[0];
	}
	if (caps2.get(char) != undefined){
		for (let i = baseLevel-1; i < promoLevel2.value - 1; i++){
			row = growthsTable.insertRow(growthsTable.rows.length - 1);
			let level = row.insertCell(0).innerHTML = (i+1).toString() + " → " + (i+2).toString();
			let hp = row.insertCell(1).innerHTML = "<span id=\"T2level"+(i+2).toString()+"HP\"></span>";
			let str = row.insertCell(2).innerHTML = "<span id=\"T2level"+(i+2).toString()+"STR\"></span>";
			let mag = row.insertCell(3).innerHTML = "<span id=\"T2level"+(i+2).toString()+"MAG\"></span>";
			let skl = row.insertCell(4).innerHTML = "<span id=\"T2level"+(i+2).toString()+"SKL\"></span>";
			let spd = row.insertCell(5).innerHTML = "<span id=\"T2level"+(i+2).toString()+"SPD\"></span>";
			let lck = row.insertCell(6).innerHTML = "<span id=\"T2level"+(i+2).toString()+"LCK\"></span>";
			let def = row.insertCell(7).innerHTML = "<span id=\"T2level"+(i+2).toString()+"DEF\"></span>";
			let res = row.insertCell(8).innerHTML = "<span id=\"T2level"+(i+2).toString()+"RES\"></span>";
			let con = row.insertCell(9).innerHTML = "<span id=\"T2level"+(i+2).toString()+"CON\"></span>";
			let mov = row.insertCell(10).innerHTML = "<span id=\"T2level"+(i+2).toString()+"MOV\"></span>";
			for (let j = 0; j < 10; j++){
				this["current"+stats[j]] += charGrowths.get(char)[j] / 100;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				if (this["current"+stats[j]] >= caps2.get(char)[j]){
					this["current"+stats[j]] = caps2.get(char)[j];
				}
				let stat = this["current"+stats[j]];
				if (this["current"+stats[j]] == caps2.get(char)[j]){
					this["T2level"+(i+2).toString()+stats[j]].innerHTML = "<b>"+stat+"</b>";
				}
				else{
					this["T2level"+(i+2).toString()+stats[j]].innerHTML = stat;
				}
			}
		}
		currentHP += promotions2.get(char)[0];
		currentSTR += promotions2.get(char)[1];
		currentMAG += promotions2.get(char)[2];
		currentSKL += promotions2.get(char)[3];
		currentSPD += promotions2.get(char)[4];
		currentLCK += promotions2.get(char)[5];
		currentDEF += promotions2.get(char)[6];
		currentRES += promotions2.get(char)[7];
		currentCON += promotions2.get(char)[8];
		currentMOV += promotions2.get(char)[9];
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		let level = row.insertCell(0).innerHTML = "<b>Tier 3</b>";
		let hp = row.insertCell(1).innerHTML = "<b>"+Math.round(currentHP * 100) / 100+"</b>";
		let str = row.insertCell(2).innerHTML = "<b>"+Math.round(currentSTR * 100) / 100+"</b>";
		let mag = row.insertCell(3).innerHTML = "<b>"+Math.round(currentMAG * 100) / 100+"</b>";
		let skl = row.insertCell(4).innerHTML = "<b>"+Math.round(currentSKL * 100) / 100+"</b>";
		let spd = row.insertCell(5).innerHTML = "<b>"+Math.round(currentSPD * 100) / 100+"</b>";
		let lck = row.insertCell(6).innerHTML = "<b>"+Math.round(currentLCK * 100) / 100+"</b>";
		let def = row.insertCell(7).innerHTML = "<b>"+Math.round(currentDEF * 100) / 100+"</b>";
		let res = row.insertCell(8).innerHTML = "<b>"+Math.round(currentRES * 100) / 100+"</b>";
		let con = row.insertCell(9).innerHTML = "<b>"+Math.round(currentCON * 100) / 100+"</b>";
		let mov = row.insertCell(10).innerHTML = "<b>"+Math.round(currentMOV * 100) / 100+"</b>";
	}
	baseLevel = 1;
	if (caps2.get(char) == undefined){
		baseLevel = charBases.get(char)[0];
	}
	let levelUps = 19;
	if (laguz.includes(char)){
		levelUps = 39;
	}
	for (let i = baseLevel-1; i < levelUps; i++){
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		level = row.insertCell(0).innerHTML = (i+1).toString() + " → " + (i+2).toString();
		hp = row.insertCell(1).innerHTML = "<span id=\"T3level"+(i+2).toString()+"HP\"></span>";
		str = row.insertCell(2).innerHTML = "<span id=\"T3level"+(i+2).toString()+"STR\"></span>";
		mag = row.insertCell(3).innerHTML = "<span id=\"T3level"+(i+2).toString()+"MAG\"></span>";
		skl = row.insertCell(4).innerHTML = "<span id=\"T3level"+(i+2).toString()+"SKL\"></span>";
		spd = row.insertCell(5).innerHTML = "<span id=\"T3level"+(i+2).toString()+"SPD\"></span>";
		lck = row.insertCell(6).innerHTML = "<span id=\"T3level"+(i+2).toString()+"LCK\"></span>";
		def = row.insertCell(7).innerHTML = "<span id=\"T3level"+(i+2).toString()+"DEF\"></span>";
		res = row.insertCell(8).innerHTML = "<span id=\"T3level"+(i+2).toString()+"RES\"></span>";
		con = row.insertCell(9).innerHTML = "<span id=\"T3level"+(i+2).toString()+"CON\"></span>";
		mov = row.insertCell(10).innerHTML = "<span id=\"T3level"+(i+2).toString()+"MOV\"></span>";
		for (let j = 0; j < 10; j++){
			if ([1, 2, 3, 4, 6, 7].includes(j) && laguz.includes(char) && transformation.value == "Transformed"){
				this["current"+stats[j]] += charGrowths.get(char)[j] / 50;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				if (this["current"+stats[j]] >= caps3.get(char)[j] * 2){
					this["current"+stats[j]] = caps3.get(char)[j] * 2;
				}
				let stat = this["current"+stats[j]];
				if (this["current"+stats[j]] == caps3.get(char)[j] * 2){
					this["T3level"+(i+2).toString()+stats[j]].innerHTML = "<b>"+stat+"</b>";
				}
				else{
					this["T3level"+(i+2).toString()+stats[j]].innerHTML = stat;
				}
			}
			else if ([1, 2, 3, 4, 6, 7].includes(j) && laguz.includes(char) && transformation.value == "Wildheart"){
				this["current"+stats[j]] += charGrowths.get(char)[j] * 1.5 / 100;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				if (this["current"+stats[j]] >= Math.floor(caps3.get(char)[j] * 1.5)){
					this["current"+stats[j]] = Math.floor(caps3.get(char)[j] * 1.5);
				}
				let stat = this["current"+stats[j]];
				if (this["current"+stats[j]] == Math.floor(caps3.get(char)[j] * 1.5)){
					this["T3level"+(i+2).toString()+stats[j]].innerHTML = "<b>"+stat+"</b>";
				}
				else{
					this["T3level"+(i+2).toString()+stats[j]].innerHTML = stat;
				}
			}
			else{
				this["current"+stats[j]] += charGrowths.get(char)[j] / 100;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				if (this["current"+stats[j]] >= caps3.get(char)[j]){
					this["current"+stats[j]] = caps3.get(char)[j];
				}
				let stat = this["current"+stats[j]];
				if (this["current"+stats[j]] == caps3.get(char)[j]){
					this["T3level"+(i+2).toString()+stats[j]].innerHTML = "<b>"+stat+"</b>";
				}
				else{
					this["T3level"+(i+2).toString()+stats[j]].innerHTML = stat;
				}
			}
		}
	}
}

var displayedHit = document.getElementById("displayedHit");
var trueHit = document.getElementById("trueHit");
for (let i = 0; i <= 100; i++){
	displayedHit[i] = new Option(100-i);
}
displayedHit.selectedIndex = 25;
updateHit();

var playerLevel = document.getElementById("playerLevel")
var enemyLevel = document.getElementById("enemyLevel");
var difficulty = document.getElementById("difficulty");
var paragonEXP = document.getElementById("paragonEXP");
var blossomEXP = document.getElementById("blossomEXP");
var playerLaguz = document.getElementById("playerLaguz");
var playerTransformed = document.getElementById("playerTransformed");
var killEXP = document.getElementById("killEXP");
var bossEXP = document.getElementById("bossEXP");
var thiefEXP = document.getElementById("thiefEXP");
var enemyLaguz = document.getElementById("enemyLaguz");
var enemyTransformed = document.getElementById("enemyTransformed");
var exp = document.getElementById("exp");
for (let i = 0; i < 60; i++){
	playerLevel[i] = new Option(60-i);
	enemyLevel[i] = new Option(60-i);
}
playerLevel.selectedIndex = 30;
enemyLevel.selectedIndex = 30;
difficulty.selectedIndex = 2;
paragonEXP.checked = false;
blossomEXP.checked = false;
playerLaguz.checked = false;
playerTransformed.checked = false;
killEXP.checked = true;
bossEXP.checked = false;
thiefEXP.checked = false;
enemyLaguz.checked = false;
enemyTransformed.checked = false;
updateEXP();

var character = document.getElementById("character");
var promoLevel1 = document.getElementById("promoLevel1");
var promoLevel2 = document.getElementById("promoLevel2");
var transformation = document.getElementById("transformation");
var characterB = document.getElementById("character2");
var promoLevel1B = document.getElementById("promoLevel1B");
var promoLevel2B = document.getElementById("promoLevel2B");
var transformationB = document.getElementById("transformation2");
transformation.selectedIndex = 0;
transformation2.selectedIndex = 0;
for (let i = 0; i < characters.length; i++) {
	character[i] = new Option(characters[i]);
	character2[i] = new Option(characters[i]);
}
for (let i = 20; i >= 10; i--) {
	promoLevel1[20-i] = new Option(i);
	promoLevel2[20-i] = new Option(i);
	promoLevel1B[20-i] = new Option(i);
	promoLevel2B[20-i] = new Option(i);
}
var transferHP = document.getElementById("transferHP");
var transferSTR = document.getElementById("transferSTR");
var transferMAG = document.getElementById("transferMAG");
var transferSKL = document.getElementById("transferSKL");
var transferSPD = document.getElementById("transferSPD");
var transferLCK = document.getElementById("transferLCK");
var transferDEF = document.getElementById("transferDEF");
var transferRES = document.getElementById("transferRES");
transferHP.checked = false;
transferSTR.checked = false;
transferMAG.checked = false;
transferSKL.checked = false;
transferSPD.checked = false;
transferLCK.checked = false;
transferDEF.checked = false;
transferRES.checked = false;
updateCharacter();