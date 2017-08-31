// Le state passé n'est pas le state de l'application mais seulement la partie dont le reducer s'occupe.
export default function(state = null, action) {
    console.log('reducer');
    switch(action.type){
        case 'SELECT_BOOK':
            console.log('reducer',action.payload);
            return action.payload;
    }

    return state
}