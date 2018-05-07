import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import * as momentImported from "moment";
const moment = momentImported;

@Component({
    selector: "[ng-comments]",
    templateUrl: "./comments.component.html",
    styleUrls: ["./comments.styles.css"]
})
export class CommentsComponent implements OnInit {
    inputActive: boolean = false;
    inputComment: string = "";

    @Input("user") user: user;
    @Input("comments") comments: comment[];

    @Input("timereverse") reverse: boolean = false;

    @Output() onComment = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    add(comment) {
        let newComment = {
            uuid: "",
            author: this.user.name,
            text: comment,
            date: moment(),
            reactions: []
        };
        this.comments.push(newComment);
        this.onComment.emit(newComment);
        this.inputComment = "";
    }
}

export type comment = {
    uuid: string;
    author: string;
    text: string;
    date: object;
    reactions: string[];
};

export type user = {
    uuid: string;
    name: string;
    avatarUrl: string;
};
