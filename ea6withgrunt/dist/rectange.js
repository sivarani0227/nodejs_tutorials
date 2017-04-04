export class rectange {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	set width(width) {
		this._width = width;
	}
	set height(height) {
		this._height = height;
	}

	get width() {
		return this._width;
	}
	get height() {
		return this.height;
	}

	get area() {
		return area = this.width * this.height;
	}
}
//# sourceMappingURL=rectange.js.map
