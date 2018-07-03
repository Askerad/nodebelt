const nb = require('../index');
const assert = require('assert');
const chalk = require('chalk');


describe('nodebelt.log()', ()=>{
    describe('Log Levels', ()=>{

        it('level : log', function() {

            var d = new Date();
            var log = nb.log("This is a test message", "log", 0, false)
            var time = nb.lead(d.getHours(),2) + ":" + nb.lead(d.getMinutes(),2) + ":" + nb.lead(d.getSeconds(),2) + "." + nb.lead(d.getMilliseconds(),3);

            assert.equal(log, "[ "+chalk.green("LOG")+" - "+time+" ] This is a test message");
        });

        it('level : warning', function() {

            var d = new Date();
            var log = nb.log("This is a test message", "warning", 0, false)
            var time = nb.lead(d.getHours(),2) + ":" + nb.lead(d.getMinutes(),2) + ":" + nb.lead(d.getSeconds(),2) + "." + nb.lead(d.getMilliseconds(),3);

            assert.equal(log, "[ "+chalk.yellow("WRN")+" - "+time+" ] This is a test message");
        });

        it('level : error', function() {

            var d = new Date();
            var log = nb.log("This is a test message", "error", 0, false)
            var time = nb.lead(d.getHours(),2) + ":" + nb.lead(d.getMinutes(),2) + ":" + nb.lead(d.getSeconds(),2) + "." + nb.lead(d.getMilliseconds(),3);

            assert.equal(log, "[ "+chalk.red("ERR")+" - "+time+" ] This is a test message");
        });

        it('level : custom', function() {

            var d = new Date();
            var log = nb.log("This is a test message", "custom", 0, false)
            var time = nb.lead(d.getHours(),2) + ":" + nb.lead(d.getMinutes(),2) + ":" + nb.lead(d.getSeconds(),2) + "." + nb.lead(d.getMilliseconds(),3);

            assert.equal(log, "[ custom - "+time+" ] This is a test message");
        });

    });
});

describe('nodebelt.lead()', ()=>{
    it("(5,2) => 05", function() {
        assert.equal(nb.lead(5,2),"05");
    });
    it("(500,2) => 500", function() {
        assert.equal(nb.lead(500,2),"500");
    });
    it("(5,6) => 000005", function() {
        assert.equal(nb.lead(5,6),"000005");
    });
    it("('Hello', 6) => 0Hello", function() {
        assert.equal(nb.lead("Hello", 6),"0Hello");
    });
    it("('Hello', 6, '.') => .Hello", function() {
        assert.equal(nb.lead("Hello", 6, "."),".Hello");
    });

});
