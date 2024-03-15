/** @format */

//const faworiteCat = {
//	catName,
//	catBreed,
//	catColor,
//};

const catName = 'Tom';
const catBreed = 'persian';
const catColor = 'someColor';
const catSex = 'femaleOrMale';

//const faworiteCat = {
//	catName: catName,
//	catBreed: catBreed,
//	catColor: catColor,
//};

//shorten- робимо короткий запис властивостей
//const faworiteCat = {
//	catName,
//	catBreed,
//    [catColor]: 'red',
//    [catSex]:'male'
//};

const faworiteCat = {
	catName,
	catBreed,
	[catColor]: 'red',
	[catSex]: 'male',
};

console.log(faworiteCat);
