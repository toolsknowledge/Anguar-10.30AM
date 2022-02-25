export default class MyClass{
    next(posRes:any):any{
        console.log(posRes);
    }
    error(errRes:any):any{
        console.log(errRes);
    }
    complete():any{
        console.log("Completed !");
    }
}