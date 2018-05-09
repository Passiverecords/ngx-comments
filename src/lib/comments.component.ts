import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import * as momentImported from "moment";
const moment = momentImported;
import * as uuidImported from "uuid/v4";
const uuid = uuidImported;

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

    @Input("editable") isEditable: editable = editable.none;
    @Input("trashable") isTrashable: trashable = trashable.none;

    @Output() onComment = new EventEmitter();
    @Output() onEditComment = new EventEmitter();
    @Output() onTrashComment = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    add(comment) {
        let newComment = {
            uuid: uuid(),
            author: {
                uuid: this.user.uuid,
                name: this.user.name,
                avatarUrl: this.user.avatarUrl
            },
            text: comment,
            date: moment(),
            reactions: []
        };
        this.comments.push(newComment);
        this.onComment.emit(newComment);
        this.inputComment = "";
    }

    edit(comment) {
        this.onEditComment.emit(comment);
        comment._edit = false;
    }

    trash(comment) {
        this.comments.splice(this.comments.indexOf(comment), 1);
        this.onTrashComment.emit(comment);
    }
}

export type comment = {
    uuid: string;
    author: user;
    text: string;
    date: object;
    reactions: string[];
    _edit?: boolean;
    _editHover?: boolean;
    _trashHover?: boolean;
};

export type user = {
    uuid: string;
    name: string;
    avatarUrl: string;
};

export enum editable {
    none = "none",
    all = "all",
    mine = "mine"
}

export enum trashable {
    none = "none",
    all = "all",
    mine = "mine"
}
