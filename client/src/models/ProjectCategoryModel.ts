export class ProjectCategoryModel {
    private _imagePath: string;
    private _name: string;
    private _color: string;

    constructor(imagePath: string, name: string, color: string) {
        this._imagePath = imagePath
        this._name = name
        this._color = color
    }

    public get imagePath() {return this._imagePath}
    public get name() {return this._name}
    public get color() {return this._color}

}