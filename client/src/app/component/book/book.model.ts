export class BookModel{
    constructor(
    public bookId : number,
    public bookName : string,
    public bookCode : string,
    public authorName : string,
    public description : string,
    public price : number,
    public starRating : number,
    public imageUrl : string){}
}