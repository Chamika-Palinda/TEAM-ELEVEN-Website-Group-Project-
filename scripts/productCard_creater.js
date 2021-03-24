
///Shop JavaScript

function productCardCreate(
    Product_no,
    product_name,
    product_price,
    product_type,
    product_deails,
    img_01,
    img_02,
    img_03
  ){
    document.write(
     
        `<div class="PC_box">

            <div class="PC_productDetails">
                <div class="PC_price">
                    <p class="PC_txtHead">${product_name}</p>
                    <p class="PC_txtHead">$${product_price}</p>
                </div>
                <p class="PC_txtSubHead">${product_type}</p>
            </div> 

            <div class="PC_productImagesLayerBox">
                <img class="PC_productImagesLayer1" src="${img_01}">
                <img class="PC_productImagesLayer2" src="assets/style/productCard/logo 3-01@2x.png">
                <img class="PC_productImagesLayer3" src="assets/style/productCard/Path 11.png">
                <div class="PC_productBackground"></div>
            </div>
            
            <div class="PC_productBttons">
                
                <button id="PC_add_product_01" class="PC_btnCartAdd" onclick="create_productBuyngBox('${Product_no}','${img_01}','${img_02}','${img_03}','${product_type}','${product_name}','${product_price}','${product_deails}')">
                    <svg  version="1.1" x="0px" y="0px"
                    width="32px" height="32px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                    <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M382.5,280.5h-102v102h-51v-102
                    h-102v-51h102v-102h51v102h102V280.5z"/>
                </svg>
                </button>
                
                <button id="PC_add_fav${Product_no}" class="PC_btnFavoriteAdd" onclick="PC_fav_${Product_no}()" style="fill: transparent; position: absolute;  z-index: 4; transition: 0.5s;">
                    <svg  version="1.1" x="0px" y="0px"
                        width="32px" height="32px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                        <g id="PC_outline">
                            <path d="M369.75,21.675c-43.35,0-86.7,20.4-114.75,53.55c-28.05-33.15-71.4-53.55-114.75-53.55C61.2,21.675,0,82.875,0,161.925
                            c0,96.9,86.7,175.95,219.3,293.25l35.7,33.15l35.7-33.15c130.05-119.85,219.3-198.9,219.3-293.25
                            C510,82.875,448.8,21.675,369.75,21.675z M257.55,419.475H255l-2.55-2.55C130.05,307.274,51,235.875,51,161.925
                            c0-51,38.25-89.25,89.25-89.25c38.25,0,76.5,25.5,91.8,61.2h48.45c12.75-35.7,51-61.2,89.25-61.2c51,0,89.25,38.25,89.25,89.25
                            C459,235.875,379.95,307.274,257.55,419.475z"/>
                        </g>
                        <g id="PC_favorite${Product_no}">
                            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
                        </g>
                    </svg>
                </button>

                <script>
                    let PC_btnMain${Product_no} = document.getElementById("PC_add_fav${Product_no}");
                    let PC_btnOutline${Product_no} = document.getElementById("PC_outline");
                    let PC_btnFull${Product_no} = document.getElementById("PC_favorite${Product_no}");
                    PC_press${Product_no}=true;
                    function PC_fav_${Product_no}(){
                        if(PC_press${Product_no}==true){
                            PC_btnMain${Product_no}.classList.add("PC_btnMain_add${Product_no}");
                            PC_btnOutline${Product_no}.classList.add("PC_btnOutline_add${Product_no}");
                            PC_btnFull${Product_no}.classList.add("PC_btnFull_add${Product_no}");
                            PC_press${Product_no}=false;
                        }else{
                            PC_btnMain${Product_no}.classList.remove("PC_btnMain_add${Product_no}");
                            PC_btnOutline${Product_no}.classList.remove("PC_btnOutline_add${Product_no}");
                            PC_btnFull${Product_no}.classList.remove("PC_btnFull_add${Product_no}");
                            PC_press${Product_no}=true;
                        } 
                        
                    }
                </script>

            </div>

        </div> `  
  
    )
  }


