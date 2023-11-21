#!/usr/bin/env zx
$.verbose = false;
// A pipeline using |
let greeting = await $`echo "Hello World" | tr '[l]' [L]`
console.log(`${greeting}`)
// The same pipeline but with the .pipe() method
greeting = await $`echo "Hello World"`
    .pipe($`tr '[l]' [L]`)

console.log(`${greeting}`)