
///Shop JavaScript


function clear_productBuyngBox(){
  var el = document.getElementById('removeClass');
  el.remove();
}



function create_productBuyngBox(
  Product_no,
  img_01,
  img_02,
  img_03,
  product_type,
  product_name,
  product_price,
  product_deails
){
  document.getElementById("productBuyingBox_create").insertAdjacentHTML("afterend",
  `<div id="removeClass" class="PB_productBuyingBox_background">
      
      
      <div class="PB_productBuyingBox">
        
        <div class="PB_productImage">

          <div class="PB_productImage--mainImage">
            <img
              id="PB_product_img01"
              src=${img_01}
              alt="product main image"
              class="PB_productImage--main"
            />
          </div>

          <div class="PB_productImage--sub">


            <button class="PB_tumbanail--move left-arrow">
              <img
                src="assets/style/productBuyingBox/left-arrow-key@2x.png"
                alt="left-arrow-key"
                class="PB_left-arrow"
              />
            </button>

            <div class="PB_productImage-thumbnail thumbnail_1">
              <img
              id="product_img01"
                class="tumbanail--image"
                src=${img_01}
                alt="product 01"
              />
            </div>

            <div class="PB_productImage-thumbnail thumbnail_2">
              <img
              id="PB_product_img02"
                class="PB_tumbanail--image"
                src=${img_02}
                alt="product 01"
              />
            </div>

            <div class="PB_productImage-thumbnail thumbnail_3">
              <img
              id="PB_product_img03"
                class="PB_tumbanail--image"
                src=${img_03}
                alt="product 01"
              />
            </div>

            <button class="PB_tumbanail--move right-arrow">
              <img
                src="assets/style/productBuyingBox/rightarrow-key@2x.png"
                alt="right-arrow-key"
                class="PB_right--arrow"
              />
            </button>

          </div>

        </div>


        
        <div class="PB_product_contents">

          <div class="PB_closeButtons">

            <button id="PB_add_Favorite" class="PB_btnFavorite" value="AddFavorite">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="31.694" 
              height="29" 
              viewBox="0 0 31.694 29">
                <g id="PB_favorite-heart-outline-button" transform="translate(0 -21.675)">
                  <g id="PB_favorite-outline" transform="translate(0 21.675)">
                    <path id="Path_20" data-name="Path 20" class="cls-1" d="M22.978,21.675A9.523,9.523,0,0,0,15.847,25a9.523,9.523,0,0,0-7.131-3.328A8.592,8.592,0,0,0,0,30.391c0,6.022,5.388,10.934,13.628,18.224l2.219,2.06,2.219-2.06c8.082-7.448,13.628-12.361,13.628-18.224A8.592,8.592,0,0,0,22.978,21.675ZM16.005,46.4h-.158l-.158-.158C8.082,39.424,3.169,34.986,3.169,30.391a5.416,5.416,0,0,1,5.546-5.546,6.437,6.437,0,0,1,5.7,3.8h3.011a6.042,6.042,0,0,1,5.546-3.8,5.416,5.416,0,0,1,5.546,5.546C28.525,34.986,23.612,39.424,16.005,46.4Z" transform="translate(0 -21.675)"/>
                  </g>
                </g>
              </svg>              
            </button>


            <button id="PB_close_productBuyBox" class="PB_btnClose" onclick="clear_productBuyngBox()">
              
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="27" 
              viewBox="0 0 28 27">
                <g id="close">
                  <path id="PB_Path_21" data-name="Path 21" class="PB_cls-1" d="M28,2.7,25.2,0,14,10.8,2.8,0,0,2.7,11.2,13.5,0,24.3,2.8,27,14,16.2,25.2,27,28,24.3,16.8,13.5Z"/>
                </g>
              </svg>
              
            </button>
           

          </div>


          <div class="PB_DetailsArea">

            <p id="PB_product_type" class="PB_product--Type">${product_type}</p>

            <p id="PB_product_name" class="PB_product--Name">${product_name}</p>

            <p id="PB_product_price" class="PB_product--Price">$${product_price}</p>

            <p id="PB_product_deails" class="PB_product--details">${product_deails}</p>

          


        </div>




        <div class="PB_productSubmitArea">
          <div class="PB_selectProductMode">
            <select name="select--productSize" class="PB_product_size" id="PB_product_size">
            <option value="XL">XL</option>
            <option value="X">X</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
          </select>

          <select name="select--productQTY" class="PB_product_QTY" id="PB_product_QTY">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

          <button class="PB_submit" onclick=" submitProductToCart (  '${product_name}' , '${product_type}' , '${product_price}' , '${img_01}' , '${Product_no}' ) ">
            <img src="assets/style/productBuyingBox/ADD button@2x.png" alt="sub button" class="PB_btnSubmit">
          </button>
        </div>
        

      </div>
      

    </div>`);
}



function submitProductToCart(Name,Tag,Price,img,Product_no){

  var Quantity = document.getElementById('PB_product_QTY').value;
  var Size = document.getElementById('PB_product_size').value;

  Price = Math.floor(Price * 100) / 100;
  Price.toFixed(2);

  var SUMofProducts = Price*Quantity;
  
  SUMofProducts = Math.floor(SUMofProducts * 100) / 100;
  SUMofProducts.toFixed(2);

  console.log(Name,Size,Quantity,SUMofProducts);
  setBagInNumber(Quantity);
  addToTotal(SUMofProducts)
  addingProductToCart(Name,Tag,Size,Price,Quantity,img,SUMofProducts,Product_no)

  alert( "------------------------Product Added to Bag------------------------\n\nProduct_no: "+Product_no+'       Product_Name: '+Name+'\n                                   Size:'+Size+' '+Quantity+' item added.' )
}




// function product_cloth_tshirt(){
//   document.write(
  
//     `
//     <option value="XL">XL</option>
//     <option value="L">L</option>
//     <option value="M">M</option>
//     <option value="S">S</option>
//   `
//   )
// }

// function product_cloth_short(){
//   document.write(
//     `
//     <option value="L">L</option>
//     <option value="M">M</option>
//     <option value="S">S</option>
// `
//   )
// }

// function product_shoes(){
//   document.write(
//     `
//     <option value="size 6">6</option>
//     <option value="size 6.5">6.5</option>
//     <option value="size 7.5">7.5</option>
//     <option value="size 8">8</option>
//     <option value="size 9">9</option>
//     <option value="size 10">10</option>
// `
//   )
// }

// function product_other(){
//   document.write(
//     `
//     <option value="---">One Size Avilable</option>
// `
//   )
// }

