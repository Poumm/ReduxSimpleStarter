export function selectBook(book){
    console.log('action',book);
    return {
        type : 'SELECT_BOOK',
        payload : book
    }
}