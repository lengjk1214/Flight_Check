var judge = require('../calculate.js');
var assert = require("assert"); // 引入内置的assert模块
describe("特殊行李计算", function() {
    it("种类1皮划艇/独木舟 重量1", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:0,weight:20};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(2600, judge(passenger,baggage,special_bagg));
    })
    it("种类1皮划艇/独木舟 重量2", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:0,weight:28};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(3900, judge(passenger,baggage,special_bagg));
    })
    it("种类1皮划艇/独木舟 重量3", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:0,weight:40};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(5200, judge(passenger,baggage,special_bagg));
    })
    it("种类2撑杆、标枪 重量1", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:1,weight:20};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(1300, judge(passenger,baggage,special_bagg));
    })
    it("种类2撑杆、标枪 重量2", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:1,weight:25};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(2600, judge(passenger,baggage,special_bagg));
    })
    it("种类2撑杆、标枪 重量3", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:1,weight:35};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(3900, judge(passenger,baggage,special_bagg));
    })
    it("种类3小型电器或仪器、媒体设备 重量1", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:2,weight:20};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(490, judge(passenger,baggage,special_bagg));
    })
    it("种类3小型电器或仪器、媒体设备 重量2", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:2,weight:30};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(3900, judge(passenger,baggage,special_bagg));
    })
    it("种类4枪支 重量1", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:3,weight:20};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(1300, judge(passenger,baggage,special_bagg));
    })
    it("种类4枪支 重量2", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:3,weight:30};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(2600, judge(passenger,baggage,special_bagg));
    })
    it("种类5子弹 重量1", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:4,weight:3};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(1300, judge(passenger,baggage,special_bagg));
    })
    it("种类6小动物 重量1", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:5,weight:6};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(3900, judge(passenger,baggage,special_bagg));
    })
    it("种类6小动物 重量2", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:5,weight:20};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(5200, judge(passenger,baggage,special_bagg));
    })
    it("种类6小动物 重量3", function(){
        var passenger = {};
        var baggage = [];
        var data1 = {type:5,weight:30};
        var special_bagg = new Array();
        special_bagg[0] = data1;
        assert.equal(7800, judge(passenger,baggage,special_bagg));
    })




});