
///Shop JavaScript


var SB_emptyProductLine = 2;

function addingProductToCart(Name,Tag,Size,Price,Quantity,img,sum,Product_no){

    console.log(SB_emptyProductLine)
    if (SB_emptyProductLine==1){
        document.getElementById("SB_EMPTYproductLine01").remove();
        document.getElementById("SB_magin_E1").remove();
        SB_emptyProductLine = SB_emptyProductLine - 1;
    } else if(SB_emptyProductLine==2){
        document.getElementById("SB_EMPTYproductLine02").remove();
        document.getElementById("SB_magin_E2").remove();
        SB_emptyProductLine = SB_emptyProductLine - 1;
    }

    
   

    var tableRef = document.querySelector(".SB_productLineTable").getElementsByTagName('tbody')[0];

    tableRef.insertAdjacentHTML("afterend",
    `<tr class="SB_productLine" id="SB_productLine${Product_no}">

    <td id="SB_productLineImage">
        <img src="${img}" alt="image_1">
    </td>

    <td class="SB_margin1"></td>

    <td class="SB_productLineName">
        <p class="SB_txtProductSub">${Tag}</p>
        <p class="SB_txtProductHead">${Name}</p>
        <p id="SB_txtProductSize">${Size}</p>
    </td>

    <td class="SB_margin2"></td>

    <td id="SB_productLineQuantity">
        <button id="SB_btnMin">
            <img src="assets/style/shoppingBag/left-arrowa-key.png" alt="" class="minIcon">
        </button>
        <p class="SB_quantityNum">${Quantity}</p>
        <button id="SB_btnPlus" >
            <img src="assets/style/shoppingBag/left-arrow-key.png" alt="" class="plusIcon">
        </button>
    </td>

    <td class="SB_margin3"></td>

    <td class="SB_productLinePricePU">${Price}</td>

    <td class="SB_margin3"></td>

    <td class="SB_productLineSum">${sum}</td>

    <td class="SB_margin4"></td>
    <td>
        <button class="SB_btnProductClose" onclick="clear_productLine_FormBag('${Product_no}','${sum}',${Quantity})">
            <img src="assets/style/shoppingBag/close-button.png" alt="iconClose">
        </button>
    </td>
</tr>

<Script>

</Script>

<tr class="SB_magin0"></tr>`)
}

function clear_productLine_FormBag(Product_no,SUM,Quantity){
    var el = document.getElementById(`SB_productLine${Product_no}`);
    el.remove();
    removeToTotal(SUM,Quantity);
  }
  

//   const number = document.getElementById("quantityNum");
//   let Qnumber = 1;

//   function Plusa(){
//       if(Qnumber>=1 && Qnumber<= 9){
//           console.log("sss")
//           number.innerHTML=Qnumber+=1;
//           mins.style.opacity="0.8";
//       }
//       if(Qnumber== 10){
//           plus.style.opacity="0.3";
//       } 
//   }
  
//   function Minsa(){
//       if(Qnumber ==2){
//           number.innerHTML=Qnumber-=1;
//           mins.style.opacity="0.3";
//       } else if(Qnumber>1 && Qnumber<=10){
//           number.innerHTML=Qnumber-=1;
//           plus.style.opacity="0.8";
//       } 
//   }
