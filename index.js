function receivesAFunction(pokea){
    return pokea ()
}

function returnsANamedFunction(){
    return function jina(){
        return 0;
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        return 0;
    }
}