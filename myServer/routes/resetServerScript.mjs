#!/usr/bin/env zx
/*
    Brian suggests a scirpt that runs in the background that tests the connection of the website every 10 seconds
    and if the website has a bad connection or times out it resets the server

    look at linux reboot cmnd.

    using ping to check every x ammount of seconds
    "sudo apt update"
    "sudo apt install iputils-ping"

    https://stackoverflow.com/questions/18123211/checking-host-availability-by-using-ping-in-bash-scripts
*/
$.verbose = false;

import { sleep } from 'zx';

const WEBSITE = "google.com";
// could make a errors.txt and save to get crash reports or something?
while (true) {
  const DATE = new Date().toLocaleString();
  try {
    await $`curl --silent --head ${WEBSITE}`;
    console.log(`STATUS: OK ${DATE}`);
  } catch (error) {
    console.log(`STATUS: ERROR ${DATE}`);
  }
  await sleep(5 * 1000);
}
