var judge = require('../calculate.js');
var assert = require("assert"); // 引入内置的assert模块
describe("国内普通行李计算", function() {
    it("超尺寸行李", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:3,type_card:0,price:1500};
        var data1 = {len:120,wide:50,high:10,weight:20};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(450, judge(passenger1,baggage1,special_bagg));
    })
    it("无卡婴儿超重普通行李", function(){
        var passenger1 ={type_flight:0,type_ticket:1,type_cabin:3,type_card:0,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:20};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(450, judge(passenger1,baggage1,special_bagg));
    })
    it("无卡成人经济舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:3,type_card:0,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:25};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(562.5, judge(passenger1,baggage1,special_bagg));
    })
    it("无卡成人公务舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:1,type_card:0,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:35};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(787.5, judge(passenger1,baggage1,special_bagg));
    })
    it("无卡成人头等舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:0,type_card:0,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:45};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(1012.5, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡一婴儿超重", function(){
        var passenger1 ={type_flight:0,type_ticket:1,type_cabin:0,type_card:1,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:35};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(787.5, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡一成人经济舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:2,type_card:1,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:45};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(1012.5, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡一成人公务舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:1,type_card:1,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:45};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(0, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡一成人头等舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:0,type_card:1,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:65};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(1462.5, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡二婴儿超重", function(){
        var passenger1 ={type_flight:0,type_ticket:1,type_cabin:0,type_card:2,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:45};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(1012.5, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡二成人经济舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:2,type_card:2,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:55};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(1237.5, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡二成人公务舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:1,type_card:2,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:65};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(1462.5, judge(passenger1,baggage1,special_bagg));
    })
    it("有卡二成人头等舱超重", function(){
        var passenger1 ={type_flight:0,type_ticket:0,type_cabin:0,type_card:2,price:1500};
        var data1 = {len:80,wide:50,high:10,weight:65};
        var baggage1 = new Array();
        baggage1[0] = data1;
        var special_bagg = [];
        assert.equal(0, judge(passenger1,baggage1,special_bagg));
    });
});


