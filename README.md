# Nodebelt
[![npm version](https://badge.fury.io/js/nodebelt.svg)](https://badge.fury.io/js/nodebelt)

A set of tools to be used with Node.Js

*Fair warning, this is very WIP as it is now.*

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

#### Examples :

```js

// Warning, Actual bash output has colors not shown here.

nb.log("This is a test message");
    // -> [ LOG - 11:22:42.37 ] This is a test message

nb.log("This is a test message", "log");
    // -> [ LOG - 11:22:42.37 ] This is a test message

nb.log("This is a test message", "error";
    // -> [ ERR - 11:22:42.37 ] This is a test message


nb.log("This is a test message", "log", 0, false);
    // (nothing)

nb.log("Set of operations", "log", 0);
nb.log("Operation 1", "log", 1);
nb.log("Operation 2", "log", 1);
nb.log("Something Happened!", "warning", 2);
    // -> [ LOG - 11:22:42.37 ] This is a test message
    // -> [ LOG - 11:22:42.37 ]  └───> Operation 1
    // -> [ LOG - 11:22:42.37 ]  └───> Operation 2
    // -> [ WRN - 11:22:42.37 ]      └───> Something Happened!
```

### nodebelt.lead()

Adds a defined character (Default : "0") until the string is a certain size

```js
    /*  Leads a string with a set number of a certain character
     *
     *  @param String    string         : String to lead
     *  @param int       size           : Amount of characters to lead
     *  @param String    char           : Character to lead with. Default is "0".
     *  @return String   leadedString   : Padded string
     */
    lead: function (string, size, char="0");
```

#### Examples :

```js

nb.lead(5,2)
    // -> 05

nb.lead(500,2)
    // -> 500

nb.lead(5,6)
    // -> 000005

nb.lead("Hello", 6)
    // -> 0Hello

nb.lead("Hello", 6, ".")
    // -> .Hello


```
