# Nodebelt

Fair warning, this is very WIP as it is now.

## 1. Features

Nodebelt currently contains :

### nodebelt.log()

A logging command with a little more flair than good ol' console.log. Uses chalk to color output.

```js
   /*  Logs stuff to the console
    *
    *  @param String    text    : Text to log
    *  @param String    level   : String Defines importance of message ("error", "warning", "log", or none).
    *  @param int       indent  : a number of tabs before output
    *  @param boolean   output  : false = log won't show;
    *  @return String   log     : string passed to the console, with coloration and timestamp
    */
    log: function(text, level="log", indent=0, output=true);
```
