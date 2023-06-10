/**
 * Event stream example using rxjs
 */

import * as Observable from 'rxjs'

// Create a stream of animals
let animals = Observable.of("ant", "bee", "cat", "dog", "elk")
// animals.subscribe(next => console.log(next))

// Create a stream of events of time, every 500 milliseconds 
let ticker = Observable.interval(500)
// ticker.subscribe(next => console.log(next))

// Combine both streams
let combined = Observable.zip(animals, ticker)
combined.subscribe(next => console.log(JSON.stringify(next)))