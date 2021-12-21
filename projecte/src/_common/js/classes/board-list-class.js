export class BoardList {

    constructor(boards) {

        this.boards = boards;
        console.log(this.boards);
    }

    nouBoard(board) {

        this.boards.push(board);
        this.desarLocalStorage();


    }
    cercaBoard(id) {

        for (let i of this.boards)
        {
            if (i.id == id)
                return i.title
        }
        return "Board Desconegut"
    }
    cercaboards(id_array) {
 
        let retorn='';

        for (let i of id_array)
        {
            retorn += this.cercaBoard(i)+"-"
        }
        return retorn.slice(0,-1); 
    }

    desarLocalStorage() {

        localStorage.setItem('boards',JSON.stringify(this.boards));
    }
    carregarLocalStorage() {


        this.boards = ( localStorage.getItem('boards') )
                        ? JSON.parse( localStorage.getItem('boards') )
                        : [];

    }


}
