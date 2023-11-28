#!/usr/bin/env zx
$.verbose = false;

console.log((await $`ls`).toString())

