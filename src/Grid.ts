/** Grid item enum */
export enum Item {
    /** Empty */
    None,

    /** Snake body part */
    Snake,

    /** Fruit to collect */
    Fruit,
}

export class Grid {
    private grid: Array<Item>;

    /** Grid width in indices */
    public readonly width: number;

    /** Grid height in indices */
    public readonly height: number;

    constructor(width: number, height: number) {
        this.grid = new Array(width * height);
        this.grid.fill(0);
        this.width = width;
        this.height = height;
    }

    /**
     * Set an item on the grid
     * @param {number} x        X-position on the grid to set; from left to right, zero-indexed
     * @param {number} y        Y-position on the grid to set; from top to bottom, zero-indexed
     * @param {Item}   item    item to place at the position
     */
    set(x: number, y: number, item: Item) {
        if (x < 0 || x >= this.width)
            throw new RangeError(
                `x is out of range: grid width is ${this.width}, but got index ${x}`);
        if (y < 0 || y >= this.height)
            throw new RangeError(
                `y is out of range: grid height is ${this.height}, but got index ${y}`);
        this.grid[y * this.width + x] = item;
    }

    /**
     * Get an item on the grid
     * @param  x   X-position on the grid to check; from left to right, zero-indexed
     * @param  y   Y-position on the grid to check; from top to bottom, zero-indexed
     * @return Queried item value
     */
    get(x: number, y: number): Item {
        return this.grid[y * this.width + x];
    }

    /** Empty the grid of items by setting all indices to Item.None */
    clear() {
        for (let i = 0; i < this.grid.length; ++i) {
            this.grid[i] = Item.None;
        }
    }
}
