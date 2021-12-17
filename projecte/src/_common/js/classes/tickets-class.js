import { NoEmitOnErrorsPlugin } from "webpack";

export class ticket{


    constructor(id,title,desc,author_id,assigned_id,assets_id,created,update){

        this.id=id;
        this.title=title;
        this.desc=desc;
        this.author_id=author_id;
        this.assigned_id=assigned_id;
        this.assets_id=assets_id;
        this.created=created;
        this.update=update;

    }

   
}
