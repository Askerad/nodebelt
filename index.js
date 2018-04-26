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
    log: function(level, text, indent=0, output=true){

        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds();

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
    }
};
