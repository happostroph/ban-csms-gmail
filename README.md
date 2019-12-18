# ban-csms-gmail
Google App Script to move mail write in Comic Sans MS in trash

## Install and lunch

1. Go to script.google.com
2. Create a project
3. C/C code in the script area.
4. Click on Run and have fun.

## How it works ?

The script get all the Inbox mail in HTML whith `.getBody()` function. After it check if the string *comic sans ms* is in (normaly in the balise `<style></style>`). If the string is found, the script move the *message* in trash.

## Purpose of this script

Just for fun :)
