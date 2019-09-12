/**
 * Try parse a stringified JSON string.
 * @param value The value to parse
 */
export default function tryParse(value: string): object | string {
	try {
		return JSON.parse(value);
	} catch (err) {
		return value;
	}
}