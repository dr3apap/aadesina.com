export type Words = string;
export type ReadingTime = {
    wordCount:number,
    readingTime:number,
}
export const getReadingTime = (content:Words) => {
	const WPM = 350;
	let result:ReadingTime = {} as ReadingTime; 
	const regex = /\w+/g;
	result.wordCount = content.match(regex)!.length;
	result.readingTime = Math.ceil(result.wordCount / WPM);
	return result;
};