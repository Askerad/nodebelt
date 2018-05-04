const chalk = require('chalk');

module.exports = {

    /*  Logs stuff to the console
     *
     *  @param String    level   : String Defines importance of message ("error", "warning", "log", or none)
     *  @param String    text    : Text to log
     *  @param int       indent  : a number of tabs before output
     *  @param boolean   output  : false = log won't show;
     *  @return String   log     : string passed to the console, with coloration and timestamp
     */
    log: function(text, level="log", indent=0, output=true){

        var d = new Date();
        var time = this.lead(d.getHours(),2) + ":" + this.lead(d.getMinutes(),2) + ":" + this.lead(d.getSeconds(),2) + "." + this.lead(d.getMilliseconds(),3);

        var log = "[ ";

        switch (level) {
            case "log":
                log += chalk.green("LOG");
                break;
            case "error":
                log += chalk.red("ERR");
                break;
            case "warning":
                log += chalk.yellow("WRN");
                break;
            default:
                log += level;
        };


        indentText = indent ?  "    ".repeat(indent-1) + "└───" + "> " : "";

        log += " - " + time + " ] " + indentText + text;

        if (output) {
            console.log(log);
        }

        return log;
    },

    /*  Leads a string with a set number of a certain character
     *
     *  @param String    string         : String to lead
     *  @param int       size           : Amount of characters to lead
     *  @param String    char           : Character to lead with. Default is "0".
     *  @return String   leadedString   : Padded string
     */
    lead: function (string, size, char="0") {

        var leadedString = string+"";

        while (leadedString.length < size){

            leadedString = char + leadedString;

        }

        return leadedString;
    }
};
