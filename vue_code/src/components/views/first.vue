<template>
  <div class="container">
    <div class="main">
       <!-- 上面的欢迎盒子 -->
        <div class="background">
            <div class="title">Welcome to the shipping fee calculation page</div>
            <br>
            <div class="header">注解</div>
            <div class="layui-card-body">
              区域一：美洲（除美国/加拿大外）/加勒比海地区与欧洲<br>
              /非洲/中东/亚洲/西南太平洋之间的航线<br>
              区域二： 欧洲/中东与非洲/亚洲/西南太平洋之间航线|<br>
              日本与西南太平洋之间航线；|<br>
              日本/西南太平洋与亚洲（不含日本及西南太平洋）/非洲之间航线<br>
              区域三： 加拿大与美洲（除美国/加拿大外）/加勒比海地区<br>
              /欧洲/非洲/中东/亚洲/西南太平洋之间航线 <br>
              区域四： 美国（含夏威夷）与美洲（除美国外）/加勒比海地区/<br>
              欧洲/非洲/中东/亚洲/西南太平洋之间航线 <br>
              区域五： 非洲与亚洲（除日本外)之间航线；|<br>
              欧洲与中东之间航线；|<br>
              亚洲（除日本)内航线；|<br>
              美洲（除美国/加拿大）及加勒比海地区内航线:|<br>
              上述未列明的航线 <br>
              <br>
              可免费运输的特殊行李： 残疾、伤、病旅客可免费托运<br>
              一件小型可放入客舱的辅助设备，或一件手动轮椅。<br>
              除此之外，还可以免费运输一件辅助设备，包括但不限于以下物品：<br>    
              电动轮椅/电动代步工具/手动轮椅；<br>
              机械假肢及专用小型气瓶；<br>
              其它内含锂电池的辅助设备等。<br>
           </div>
        </div>
        
        <div class="inputbox">
            <div class="input">
          <!-- 下面的提交盒子 -->
          <br>
          <div class="flight">
           <label for="flight">type_flight</label>
           <input  class="type_flight" id="type_flight" list="flightlist" v-model="type_flight" placeholder="航班类型">
           <datalist id="flightlist">
　　            <option>国内航班</option>
　　            <option>国际航班</option>
            </datalist>
           </div>
          <br>
          <div class="ticket">
           <label for="ticket">type_ticket</label>
           <input  class="type_ticket" id="type_ticket" list="ticketlist" v-model="type_ticket" placeholder="机票类型">
           <datalist id="ticketlist">
　　            <option>成人票</option>
　　            <option>儿童票</option>
                <option>婴儿票</option>
            </datalist>
           </div>
          <br>
           <div class="cabin">
           <label for="cabin">type_cabin</label>
           <input  class="type_cabin" id="type_cabin" list="cabinlist"  v-model="type_cabin" placeholder="机舱类型">
           <datalist id="cabinlist">
　　            <option>头等舱</option>
　　            <option>公务舱</option>
                <option>超级经济舱</option>
                <option>经济舱</option>
            </datalist>
           </div>
          <br>
          <div class="card">
           <label for="card">type_card</label>
           <input  class="type_card" id="type_card" list="cardlist" v-model="type_card" placeholder="办卡类型">
           <datalist id="cardlist">
　　            <option>无卡</option>
　　            <option>凤凰知音金卡、银卡旅客、星空联盟金卡</option>
                <option>凤凰知音终身白金卡、白金卡</option>
            </datalist>
           </div>
          <br>
          <div class="line">
           <label for="line">type_line</label>
           <input  class="type_line" id="type_line" list="linelist" v-model="type_line" placeholder="航线类型">
           <datalist id="linelist">
　　            <option>区域一</option>
　　            <option>区域二</option>
                <option>区域三</option>
                <option>区域四</option>
                <option>区域五</option>
                <option>区域六</option>
            </datalist>
           </div>
          <br>
          <div class="price_num">
           <label for="price_num">price</label>
           <input  class="price" id="price" v-model="price" placeholder="金额">
           </div>
          <br>
          <br>

          <div id="tab">
                  <div class="add">
                      <input type="text" placeholder="是否为特殊行李" v-model="is_special"><br>
                      <input type="text" placeholder="长" v-model="len"><br>
                      <input type="text" placeholder="宽" v-model="width"><br>
                      <input type="text" placeholder="高" v-model="high"><br>
                      <input type="text" placeholder="重" v-model="weight"><br>
                      <button @click="add()">新增</button>
                  </div>
                  <br>
                  <table cellpadding="1" cellspacing="1">
                      <thead>
                          <tr>
                              <th>行李序号</th>
                              <th>是否为特殊行李</th>
                              <th>长</th>
                              <th>宽</th>
                              <th>高</th>
                              <th>重</th>
                              <th>操作</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(v,i) in list" :key="i">
                              <td>{{i+1}}</td>
                              <td>{{v.is_special}}</td>
                              <td>{{v.len}}</td>
                              <td>{{v.width}}</td>
                              <td>{{v.high}}</td>
                              <td>{{v.weight}}</td>
                              <td>
                                  <button @click="removes(v)">删除</button>
                                  <button @click="set(v)">修改</button>
                              </td> 
                          </tr>
                      </tbody>
                  </table>

                  <div class="show" v-show="shows">
                      <input type="text" placeholder="是否为特殊行李" v-model="newlist.is_special"><br>
                      <input type="text" placeholder="长" v-model="newlist.len"><br>
                      <input type="text" placeholder="宽" v-model="newlist.width"><br>
                      <input type="text" placeholder="高" v-model="newlist.high"><br>
                      <input type="text" placeholder="重" v-model="newlist.weight"><br>
                      <button @click="save()">保存</button>
                      <button @click="err()">取消</button>
                  </div>
              </div>
          <br>
          <button @click="calculate()">计算</button>


          
           </div>
        </div>
    </div>
  </div>
</template>

<script>
//调用接口
//import { saveSubject } from "@/api/content";
export default {
  name: 'first',
  data(){
        return{
            type_flight:"",
            type_ticket:"",
            type_cabin:"",
            type_card:"",
            type_line:"",
            price:"",

            is_special:"",
            len:"",
            width:"",
            high:"",
            weight:"",
            shows:false, // 修改框状态
            newlist:{},  //修改内容暂存区
            list:[{is_special:"实例0",len:"实例50",width:"实例50",high:"实例20",weight:"实例8",id:1}],
            newid:0
        }
    },
    methods: {
        add:function(){   //增加
            if(!this.is_special||!this.len||!this.width||!this.high||!this.weight){
                alert("内容不能为空");
                return
                }
            //使用map方法获取到list中id的最大值
            var newid = Math.max(...this.list.map(function(items){return items.id}))+1;
            this.list.push({
                is_special:this.is_special,
                len:this.len,
                width:this.width,
                high:this.high,
                weight:this.weight,
                id:newid
            })
            this.is_special="",
            this.len="",
            this.width=""
            this.high="",
            this.weight=""
        },
        removes:function(v){  //删除
            this.newid=this.list.findIndex((item)=>{
              return item.id==v.id;
            })
            this.list.splice(this.newid,1)
        },
        
        set:function(v){  //让修改框显示
            this.shows=true;
            // this.newlist=v;  //深浅拷贝问题
            this.newlist={
                is_special:v.is_special,
                len:v.len,
                width:v.width,
                high:v.high,
                weight:v.weight,
                id:v.id
            }
        },
        err:function(){  //让修改框隐藏
            this.shows=false;
        },
        save:function(){  //修改数据 
            for(var j=0;j<this.list.length;j++){
                if(this.list[j].id==this.newlist.id){
                    this.list[j]=this.newlist;
                    this.shows=false;
                }
            }
          
        },
        calculate:function(){
          if(!this.type_flight||!this.type_ticket||!this.type_cabin||!this.type_card||!this.type_line||!this.price){
            alert("内容不能为空");
            return
          }
          else{
            var m = 850,n = 2000;
            alert("金额为"+(Math.random()*(n-m) + m).toFixed(2));
          }
        }


    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main{
    display:flex;
    position:absolute;
    width:1000px;
    height:800px;
    top:10%;
    left:10%;
    box-shadow: 0 12px 16px 0  rgba(0,0,0,0.24), 0 17px 50px 0 #4E655D;
}
.background{
    background-color:#c8e6db;
}
.inputbox{
    background-color:#89AB9E;
    width:800px;
    height:800px;
}
.input{
     margin-top:50px;
}
.title{
    margin-top:50px;
    font-weight:bold;
    font-size:20px;
    color:#2d3331;
    
}
.title:hover{
     font-size:21px;
     transition: all 0.4s ease-in-out;
     cursor: pointer;
}

input{
    outline-style: none ;
    border: 0;
    border-bottom:1px solid #E9E9E9;
    background-color:transparent;
    height:20px;
     font-family:sans-serif;
    font-size:15px;
    color:#445b53;
    font-weight:bold;
}
input:focus{
    border-bottom:2px solid #445b53;
    background-color:transparent;
     transition: all 0.2s ease-in;
     font-family:sans-serif;
    font-size:15px;
     color:#445b53;
     font-weight:bold;
     
}
input:hover{
    border-bottom:2px solid #445b53;
    background-color:transparent;
     transition: all 0.2s ease-in;
     font-family:sans-serif;
    font-size:15px;
     color:#445b53;
     font-weight:bold;
     
}
 
input:-webkit-autofill {
  /* 修改默认背景框的颜色 */
 box-shadow: 0 0 0px 1000px  #89AB9E inset !important;
 /* 修改默认字体的颜色 */
 -webkit-text-fill-color: #445b53;
} 

input:-webkit-autofill::first-line {
  /* 修改默认字体的大小 */
 font-size: 15px;
 /* 修改默认字体的样式 */
 font-weight:bold;
 }



</style>
