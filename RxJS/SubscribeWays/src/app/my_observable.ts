import { Observable } from "rxjs";

export let my_observable:any = new Observable((observer)=>{
    observer.next(100);
    observer.next(200);
    observer.error("Unknown Error");
})