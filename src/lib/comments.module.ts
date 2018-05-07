import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommentsComponent } from "./comments.component";
import { MomentModule } from "ngx-moment";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, MomentModule, FormsModule],
    declarations: [CommentsComponent],
    exports: [CommentsComponent]
})
export class CommentsModule {}
