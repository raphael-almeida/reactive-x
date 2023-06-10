import * as Observable from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

let users = Observable.of(3, 2, 1)
let result = users.pipe(
    mergeMap((user) => ajax.getJSON(`https://reqres.in/api/users/${user}`))
)

result.subscribe(
    resp => console.log(JSON.stringify(resp.data)),
    err => console.error(JSON.stringify(err))
)
