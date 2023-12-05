#!/usr/bin/env zx
$.verbose = false;

console.log('Top 5 CPU and Memory Usage Processes:');
console.log('USER       PID        %CPU       %MEM       COMMAND');
console.log('---------- ---------- ---------- ---------- ----------');
console.log('By CPU usage:');
console.log((await $`ps aux --sort=-%cpu | awk 'NR<=6{printf "%-10s %-10s %-10s %-10s %-10s\\n",
    $1, $2, $3, $4, $11}'`).toString());

console.log('By Memory usage:');
console.log((await $`ps aux --sort=-%mem | awk 'NR<=6{printf "%-10s %-10s %-10s %-10s %-10s\\n",
    $1, $2, $3, $4, $11}'`).toString());
