var productName = document.getElementById("productName");
var productCategory = document.getElementById("productCategory");
var price = document.getElementById("price");
var data = document.getElementById("tabledata");

var productList =[];

function addproduct(){
    var productItem = {
        productName:productName.value,
        productCategory:productCategory.value,
        price:Number(price.value),
    }
    productList.push(productItem);
    displayProduct();
    cleardata();
}

function displayProduct(){
    var wallet = '';
    for (let index = 0; index < productList.length; index++) {
        wallet+=`<tr>
        <th scope="row">${index+1}</th>
        <td>${productList[index].productName}</td>
        <td>${productList[index].productCategory}</td>
        <td>${productList[index].price}</td>
        <td><button class="btn btn-danger" type="button" onclick="deletedata(${index})">Remove From Cart</button>
            <button class="btn btn-warning" type="button">Edit</button>
        </td>

      </tr>`}
      data.innerHTML=wallet;
}

function cleardata(){
    productName.value = null;
    productCategory.value = null;
    price.value = null;
}

function deletedata(index){
    productList.splice(index,1);
    displayProduct();
}
