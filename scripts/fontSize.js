///Shop JavaScript


// 12px fonts
var font1_01 = document.getElementsByClassName("PC_txtSubHead");

// 14px fonts
var font2_01 = document.getElementsByClassName("SB_getInp");

// 16px fonts
var font3_01 = document.getElementsByClassName("PC_txtHead");
var font3_02 = document.getElementsByClassName("PB_product--details");
var font3_03 = document.querySelector(".SB_textShipping2");
var font3_04 = document.getElementsByClassName("SB_txtProductSize");
var font3_05 = document.getElementsByClassName("SB_txtProductHead");
var font3_06 = document.querySelector(".SB_SelectShipMeth");
var font3_07 = document.getElementsByClassName("SB_txtGetInpLeb");

// 18px fonts
var font4_01 = document.querySelector(".SB_heding");
var font4_02 = document.querySelector(".SB_textShipping");

// 20px fonts
var font5_01 = document.getElementsByClassName("PB_product--Type");
var font5_02 = document.getElementsByClassName("PB_product_size");
var font5_03 = document.querySelector(".SB_productLinePricePU");
var font5_04 = document.querySelector(".SB_productLineSum");
var font5_05 = document.getElementsByClassName("SB_quantityNum");
var font5_06 = document.querySelector(".SB_textBill1");
var font5_07 = document.querySelector(".SB_moneyProductSum");
var font5_08 = document.querySelector(".SB_moneySippingCost");


// 24px fonts
var font6_01 = document.getElementsByClassName("PB_product--Name");
var font6_02 = document.getElementsByClassName("PB_product--Price");
var font6_03 = document.querySelector(".SB_textBill2");

// select buttons
const btn_fontIncrease = document.querySelector(".fontBtnIncrease");
const btn_fontDecrease = document.querySelector(".fontBtn BtnDecrease");

var fontNumSize = 0;
var font01 = 12;
var font02 = 14;
var font03 = 16;
var font04 = 18;
var font05 = 20;
var font06 = 24;

function IncreaseFontSize(){
    if(fontNumSize<=2){

        fontNumSize+=1;

        font01 ++;
        font02 ++;
        font03 ++;
        font04 ++;
        font05 ++;
        font06 ++;


        for(var i=0; i<font1_01.length; i++){
            font1_01[i].style['font-size'] = ""+font01+"px";
        }

        for(var i=0; i<font2_01.length; i++){
            font2_01[i].style['font-size'] = ""+font02+"px";
        }

        for(var i=0; i<font3_01.length; i++){
            font3_01[i].style['font-size'] = ""+font03+"px";
        }

        for(var i=0; i<font3_02.length; i++){
            font3_02[i].style['font-size'] = ""+font03+"px";
        }

        font3_03.style.fontSize = ""+font03+"px";
        
        for(var i=0; i<font3_04.length; i++){
            font3_04[i].style['font-size'] = ""+font03+"px";
        }

        for(var i=0; i<font3_04.length; i++){
            font3_04[i].style['font-size'] = ""+font03+"px";
        }

        for(var i=0; i<font3_05.length; i++){
            font3_05[i].style['font-size'] = ""+font03+"px";
        }
        
        font3_06.style.fontSize = ""+font03+"px";

        for(var i=0; i<font3_07.length; i++){
            font3_07[i].style['font-size'] = ""+font03+"px";
        }

        font4_01.style.fontSize = ""+font04+"px";
        font4_02.style.fontSize = ""+font04+"px";

        for(var i=0; i<font5_01.length; i++){
            font5_01[i].style['font-size'] = ""+font05+"px";
        }
        for(var i=0; i<font5_02.length; i++){
            font5_02[i].style['font-size'] = ""+font05+"px";
        }
        
        font5_03.style.fontSize = ""+font05+"px";
        font5_04.style.fontSize = ""+font05+"px";

        for(var i=0; i<font5_05.length; i++){
            font5_05[i].style['font-size'] = ""+font05+"px";
        }
        
        font5_06.style.fontSize = ""+font05+"px";
        font5_07.style.fontSize = ""+font05+"px";
        font5_08.style.fontSize = ""+font05+"px";

        for(var i=0; i<font6_01.length; i++){
            font6_01[i].style['font-size'] = ""+font06+"px";
        }
        for(var i=0; i<font6_02.length; i++){
            font6_02[i].style['font-size'] = ""+font06+"px";
        }
        font6_03.style.fontSize = ""+font06+"px";

    } else{
        alert("You are in maximum font size.")
    }
}

function DecreaseFontSize(){
    if(fontNumSize>=-3){
               
        fontNumSize-=1;

        font01 --;
        font02 --;
        font03 --;
        font04 --;
        font05 --;
        font06 --;


        for(var i=0; i<font1_01.length; i++){
            font1_01[i].style['font-size'] = ""+font01+"px";
        }

        for(var i=0; i<font2_01.length; i++){
            font2_01[i].style['font-size'] = ""+font02+"px";
        }

        for(var i=0; i<font3_01.length; i++){
            font3_01[i].style['font-size'] = ""+font03+"px";
        }

        for(var i=0; i<font3_02.length; i++){
            font3_02[i].style['font-size'] = ""+font03+"px";
        }

        font3_03.style.fontSize = ""+font03+"px";
        
        for(var i=0; i<font3_04.length; i++){
            font3_04[i].style['font-size'] = ""+font03+"px";
        }

        for(var i=0; i<font3_04.length; i++){
            font3_04[i].style['font-size'] = ""+font03+"px";
        }

        for(var i=0; i<font3_05.length; i++){
            font3_05[i].style['font-size'] = ""+font03+"px";
        }
        
        font3_06.style.fontSize = ""+font03+"px";
        for(var i=0; i<font3_07.length; i++){
            font3_07[i].style['font-size'] = ""+font03+"px";
        }

        font4_01.style.fontSize = ""+font04+"px";
        font4_02.style.fontSize = ""+font04+"px";

        for(var i=0; i<font5_01.length; i++){
            font5_01[i].style['font-size'] = ""+font05+"px";
        }
        for(var i=0; i<font5_02.length; i++){
            font5_02[i].style['font-size'] = ""+font05+"px";
        }
        
        font5_03.style.fontSize = ""+font05+"px";
        font5_04.style.fontSize = ""+font05+"px";

        for(var i=0; i<font5_05.length; i++){
            font5_05[i].style['font-size'] = ""+font05+"px";
        }
        
        font5_06.style.fontSize = ""+font05+"px";
        font5_07.style.fontSize = ""+font05+"px";
        font5_08.style.fontSize = ""+font05+"px";

        for(var i=0; i<font6_01.length; i++){
            font6_01[i].style['font-size'] = ""+font06+"px";
        }
        for(var i=0; i<font6_02.length; i++){
            font6_02[i].style['font-size'] = ""+font06+"px";
        }
        font6_03.style.fontSize = ""+font06+"px";


    }else{
        alert("You are in minimum font size.")
    }
    
}