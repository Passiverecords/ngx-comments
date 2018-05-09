import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommentsComponent } from "./comments.component";
import { MomentModule } from "ngx-moment";
import { FormsModule } from "@angular/forms";
import { NgPipesModule } from "ngx-pipes";
import { AutosizeModule } from "ngx-autosize";
import { FontAwesomeModule } from "ngx-icons";

@NgModule({
    imports: [CommonModule, MomentModule, FormsModule, NgPipesModule, AutosizeModule, FontAwesomeModule],
    declarations: [CommentsComponent],
    exports: [CommentsComponent]
})
export class CommentsModule {}
