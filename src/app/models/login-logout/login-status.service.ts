import { Subject } from "rxjs";

export  class LoginStatusService {

    private statusSource = new Subject<Boolean>()

    constructor() {

    }

    status$ = this.statusSource.asObservable();
    setStatus(status:Boolean) {
        this.statusSource.next(status);
        console.log('setStatus service')
    }
    
}