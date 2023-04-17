import {
	characters,
	getCharactersFromResultCode,
	validateResultCode,
} from "@/app/lib/characters";
import { getResult } from "@/app/lib/result";

test("getCharactersFromResultCode should return characters with correct names", () => {
	const code = "123";
	const result = getCharactersFromResultCode(code, characters);
	const expected = [
		{ id: "1", name: "Jon Snow" },
		{ id: "2", name: "Petyr Baelish" },
		{ id: "3", name: "Daenerys Targaryen" },
	];

	expect(result).toEqual(expected);
});

test("getCharactersFromResultCode should return an empty array for empty code", () => {
	const code = "";
	const result = getCharactersFromResultCode(code, characters);

	expect(result).toEqual([]);
});

test("getResult returns correct result string", () => {
	const characterScore = {
		"1": 2,
		"2": -1,
		"3": 0,
		"4": 4,
		"5": 0,
		"6": -1,
	};
	const expectedResult = "4162";

	const result = getResult(characterScore);

	expect(result).toEqual(expectedResult);
});

test("validateResultCode handles a code with four valid characters correctly", () => {
	const code = "1234";
	const result = validateResultCode(code);
	expect(result).toBe(true);
});

it("validateResultCode handles a code with only three characters correctly", () => {
	const code = "123";
	const result = validateResultCode(code);
	expect(result).toBe(false);
});

it("validateResultCode handles a code with an invalid character correctly", () => {
	const code = "1274";
	const result = validateResultCode(code);
	expect(result).toBe(false);
});

test("getResult handles equal character scores", () => {
	const characterScore = {
		"1": 2,
		"2": -1,
		"3": 0,
		"4": 2,
		"5": 0,
		"6": -1,
	};
	const expectedResult = "1460";

	const result = getResult(characterScore);

	expect(result).toEqual(expectedResult);
});

test("getResult handles empty characterScore object", () => {
	const characterScore = {};
	const expectedResult = "";

	const result = getResult(characterScore);

	expect(result).toEqual(expectedResult);
});
