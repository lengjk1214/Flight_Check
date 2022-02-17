/*
passenger数组
    type_flight 0:国内 1:国际航班 
    type_ticket机票类型 0:成人、儿童 1：婴儿
    type_cabin机舱类型 0：头等舱 1:公务舱 2：经济舱 3:普通经济舱
    type_card办卡类型 0:无卡 1：基础卡 2：超级卡
    type_line航线路线 0:路线A 1:路线B 2：路线C    3：路线D 4：路线E 5：路线F
    is_special是否携带特殊行李
    numb行李个数
    price票价
数组baggage[i] 行李i的长宽高
    data = {len:100,wide:50;high:10；weight}
    baggage[i]=data
数组special_bagg[i] 特殊行李的重量
    data = {type:0/1/2..   weight:**}

*/
function calculate_normal(passenger,over)
{
    var over_money = 0;
    //国内航班
    if(passenger.type_flight == 0)
    {
        for(var i = 0;i<over.length;i++)
        {
            over_money +=passenger.price*0.015*over[i].weight;
        }
    }
    //国际航班
    else{
        for(var i = 0;i<over.length;i++)
        {
            var total_len = over[i].len+over[i].wide+over[i].high;
            //不超重，不超尺寸
            if(2<=over[i].weight && over[i].weight<=23 && 60<=total_len && total_len<=158)
            {
                if(i == 0)
                {
                    //区域一
                    if(passenger.type_line == 3)
                        over_money += 1400;
                        //区域二
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 1100;
                        //区域四
                    if(passenger.type_line == 0)
                        over_money += 1380;
                        //区域五
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 830;
                }
                    
                if(i == 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 2000;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 1100;
                    if(passenger.type_line == 0)
                        over_money += 1380;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1100;
                }
                    
                if(i > 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 1500;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 1590;
                    if(passenger.type_line == 0)
                        over_money += 1590;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1590;
                }
            }
            //超重，不超尺寸
            if(23<=over[i].weight && over[i].weight<=28 && 60<=total_len && total_len<=158 )
            {
                if(i == 0)
                {
                    if(passenger.type_line == 3)
                        over_money += 1780;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money +=1280;
                    if(passenger.type_line == 0)
                        over_money += 2070;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1040;
                }
                    
                if(i == 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 2380;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money +=1280;
                    if(passenger.type_line == 0)
                        over_money += 2070;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1310;
                }
                if(i > 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 3380;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 1380;
                    if(passenger.type_line == 0)
                        over_money += 2280;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1800;
                }
            }
            //超大重，不超尺寸  不超重但超尺寸
            if((28<over[i].weight && over[i].weight<=32 && 60<=total_len && total_len<=158) ||(2<=over[i].weight && over[i].weight<=23 && 158<total_len && total_len<=203))
            {
                if(i == 0)
                {
                    if(passenger.type_line == 3)
                        over_money += 2380;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 1790;
                    if(passenger.type_line == 0)
                        over_money += 2420;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1350;
                }
                
                if(i == 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 2980;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money +=1790;
                    if(passenger.type_line == 0)
                        over_money += 2420;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1620;
                }
                
                if(i > 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 3980;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 2280;
                    if(passenger.type_line == 0)
                        over_money += 2630;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 2110;
                }
                
            }
            //超重，超尺寸
            if(23<over[i].weight && over[i].weight<=32 && 158<total_len && total_len<=203)
            {
                if(i == 0)
                {
                    if(passenger.type_line == 3)
                        over_money += 2800;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 2200;
                    if(passenger.type_line == 0)
                        over_money += 3430;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1660;
                }
                
                if(i == 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 3400;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 2200;
                    if(passenger.type_line == 0)
                        over_money += 3430;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 1930;
                }
            
                if(i > 1)
                {
                    if(passenger.type_line == 3)
                        over_money += 4400;
                    if(passenger.type_line == 1||passenger.type_line == 4)
                        over_money += 2690;
                    if(passenger.type_line == 0)
                        over_money += 3640;
                    if(passenger.type_line == 2||passenger.type_line == 5)
                        over_money += 2420;
                }
            }
        }
    }
    return over_money;
}


function calculate_special(special_bagg)
{
    var special_money = 0;
    for(var i=0;i<special_bagg.length;i++)
    {
        //种类1皮划艇/独木舟
        if(special_bagg[i].type==0)
        {
            if(2<=special_bagg[i].weight && special_bagg[i].weight<=23){
                special_money += 2600;
            }
            if(23<special_bagg[i].weight && special_bagg[i].weight<=32){
                special_money += 3900;
            }
            if(32<special_bagg[i].weight && special_bagg[i].weight<=45){
                special_money += 5200;
            }
        }
         //种类2撑杆、标枪
         if(special_bagg[i].type==1)
         {
             if(2<=special_bagg[i].weight && special_bagg[i].weight<=23){
                 special_money += 1300;
             }
             if(23<special_bagg[i].weight && special_bagg[i].weight<=32){
                 special_money += 2600;
             }
             if(32<special_bagg[i].weight && special_bagg[i].weight<=45){
                 special_money += 3900;
             }
         }
         //种类3小型电器或仪器、媒体设备
         if(special_bagg[i].type==2)
         {
             if(2<=special_bagg[i].weight && special_bagg[i].weight<=23){
                 special_money += 490;
             }
             if(23<special_bagg[i].weight && special_bagg[i].weight<=32){
                 special_money += 3900;
             }
         }
         //种类4枪支
         if(special_bagg[i].type==3)
         {
             if(2<=special_bagg[i].weight && special_bagg[i].weight<=23){
                 special_money += 1300;
             }
             if(23<special_bagg[i].weight && special_bagg[i].weight<=32){
                 special_money += 2600;
             }
         }
         //种类5子弹
         if(special_bagg[i].type==4)
         {
             if(2<=special_bagg[i].weight && special_bagg[i].weight<=5){
                 special_money += 1300;
             }
         }
         //种类6小动物
         if(special_bagg[i].type==5)
         {
             if(2<=special_bagg[i].weight && special_bagg[i].weight<=8){
                 special_money += 3900;
             }
             if(8<special_bagg[i].weight && special_bagg[i].weight<=23){
                 special_money += 5200;
             }
             if(23<special_bagg[i].weight && special_bagg[i].weight<=32){
                special_money += 7800;
            }
         }
    }
    return special_money;
}


function judge(passenger,baggage,special_bagg)
{
    var normal = 0;
    var special = 0;
    var over = new Array();
    //国内航班
    if(passenger.type_flight==0)
    {
        for(var i = 0;i<baggage.length;i++)
        {
            //行李i超尺寸
            if(baggage[i].len>100||baggage[i].wide>60||baggage[i].high>40)
            {
                over.push(baggage[i]);
                continue;
            }
            //行李i超重量
            if(baggage[i].weight>10)
            {
                //无卡婴儿超重
                if(passenger.type_card ==0 && passenger.type_ticket ==1)
                {
                    over.push(baggage[i]);
                    continue;
                }
                //无卡成人
                if(passenger.type_card ==0 && passenger.type_ticket ==0)
                {
                    //各种机舱超重
                    if(((passenger.type_cabin == 2||passenger.type_cabin == 3) && baggage[i].weight>20)||passenger.type_cabin == 1 && baggage[i].weight>30||passenger.type_cabin == 0 && baggage[i].weight>40)
                    {
                        over.push(baggage[i]);
                        continue;
                    }
                }
                //有卡1婴儿
                if(passenger.type_card ==1 && passenger.type_ticket ==1)
                {
                    if(baggage[i].weight>30)
                    {
                        over.push(baggage[i]);
                        continue;
                    }
                    
                }
                //有卡1成人
                if(passenger.type_card ==1 && passenger.type_ticket ==0)
                {
                    //各种机舱超重
                    if(((passenger.type_cabin == 2||passenger.type_cabin == 3) && baggage[i].weight>40)||passenger.type_cabin == 1 && baggage[i].weight>50||passenger.type_cabin == 0 && baggage[i].weight>60)
                    {
                        over.push(baggage[i]);
                        continue;
                    }
                }
                //有卡2婴儿
                if(passenger.type_card ==2 && passenger.type_ticket ==1)
                {
                    if(baggage[i].weight>40)
                    {
                        over.push(baggage[i]);
                        continue;
                    }
                    
                }
                //有卡2成人
                if(passenger.type_card ==2 && passenger.type_ticket ==0)
                {
                    //各种机舱超重
                    if(((passenger.type_cabin == 2||passenger.type_cabin == 3) && baggage[i].weight>50)||passenger.type_cabin == 1 && baggage[i].weight>60||passenger.type_cabin == 0 && baggage[i].weight>70)
                    {
                        over.push(baggage[i]);
                        continue;
                    }
                }
            }
        }
    }
   // 国际超重
    else{
        var count_top = 0;
        for(var i = 0;i<baggage.length;i++)
        {
            //超尺寸
            if((baggage[i].len + baggage[i].wide + baggage[i].high) >158)
            {
                over.push(baggage[i]);
                continue;
            }
            //头等，公务超重
            if((passenger.type_cabin ==0||passenger.type_cabin ==1)&&(baggage[i].weight>32||count_top>=2))
            {
                over.push(baggage[i]);
                continue;
            }
            //super经济舱超重
            if(passenger.type_cabin == 2 &&(baggage[i].weight>23||count_top>=2))
            {
                over.push(baggage[i]);
                continue;
            }
            //普通经济舱超重
            if(passenger.type_cabin == 3 && (baggage[i].weight>23||count_top>=1) && (passenger.type_line == 0 || passenger.type_line == 1 || passenger.type_line == 2))
            {
                over.push(baggage[i]);
                continue;
            }
            if(passenger.type_cabin == 3 && (baggage[i].weight>23||count_top>=2)&& (passenger.type_line == 3 || passenger.type_line == 4 || passenger.type_line == 5))
            {
                over.push(baggage[i]);
                continue;
            }
            count_top++;
        }
    }
    normal = calculate_normal(passenger,over);
    special = calculate_special(special_bagg);
    return normal + special;
}


module.exports = judge;