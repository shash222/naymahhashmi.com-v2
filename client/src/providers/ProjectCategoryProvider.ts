import { ProjectCategoryModel } from "@/models/ProjectCategoryModel";

export class ProjectCategoryProvider {
    public static get PROJECT_CATEGORIES(): ProjectCategoryModel[] {
        return [
            new ProjectCategoryModel("https://cdn-icons-png.flaticon.com/512/4635/4635381.png", "INTERIOR", "#ec898f"),
            new ProjectCategoryModel("Residentialimg", "RESIDENTIAL", "#eeb59d"),
            new ProjectCategoryModel("Institutionalimg", "INSTITUTIONAL", "#acb48d"),
            new ProjectCategoryModel("Commercialimg", "COMMERCIAL", "#99c3bf"),
            new ProjectCategoryModel("Urbanimg", "URBAN", "#bc969f")
    ]};
}
