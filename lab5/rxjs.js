var Rx = require('rxjs/Rx');

// var myObservable = Rx.Observable.range(0,10);

// var myObserver = {
//     next: item => console.log(`Next ${item}`),
//     error: ex => console.log(`Exception ${ex}`),
//     complete: () => console.log('Done!')
// }

Rx.Observable.range(0,10)
    .map(item => Rx.Observable.range(0,item))
    .switchMap(item => item)
    // .filter(item => Rx.Observable.range(0,10))
    .subscribe({
        next: item => console.log(`Next ${item}`),
        error: ex => console.log(`Exception ${ex}`),
        complete: () => console.log('Done!')
    })
