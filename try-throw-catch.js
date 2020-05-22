//small example on try-throw-catch
function clarence(x){
    if(typeof x !== 'number'){
        try{
            throw{
                name: 'not a number',
                message: 'I expect you to provide a number',
            }
        }catch(e){
            console.log(e.message)
        }
    }else{
        return x
    }
};

clarence('r');