export class ParserContext {
	input: string;
	pos: number;
	result: any;

	constructor(input: string) {
		this.input = input;
		this.pos = 0;
	}

	seek(length: number, offset: number = 0) {
		return this.input.substr(this.pos + offset, length);
	}

	read(length: number) {
		const slice = this.input.substr(this.pos, length);
		this.pos += slice.length;
		return slice;
	}

	move(offset: number) {
		if (this.pos + offset < 0) {
			this.pos = 0;
		}
		else if (this.pos + offset < this.input.length) {
			this.pos += offset;
		}
		else {
			this.pos = this.input.length;
		}
	}

	// ok(result: any): true {
	// 	this.result = result;
	// 	return true;
	// }

	// fail(): false {
	// 	return false;
	// }
}
