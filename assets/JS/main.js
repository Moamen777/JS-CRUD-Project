var productName = document.getElementById("productName");
var productCategory = document.getElementById("productCategory");
var price = document.getElementById("price");
var data = document.getElementById("tabledata");
var count = document.getElementById("itemcount")
var button = document.getElementById("addbutton");
var productList = [];
var updatedindex;

if (JSON.parse(localStorage.getItem('product')).length > 0) {
    productList = JSON.parse(localStorage.getItem('product'));
    displayProduct(productList);
}



function addproduct() {
    var productItem = {
        productName: productName.value,
        productCategory: productCategory.value,
        price: Number(price.value),
    }
    if (button.innerText.toLowerCase() == 'add to cart') {
        productList.push(productItem);
    } else {
        updateProduct(updatedindex, productItem)
    }
     
    localStorage.setItem('product',JSON.stringify(productList));
            
    displayProduct(productList);
    cleardata();
}

function displayProduct(list) {
    var wallet = '';
    for (let index = 0; index < list.length; index++) {
        wallet += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${list[index].productName}</td>
        <td>${list[index].productCategory}</td>
        <td>${list[index].price}</td>
        <td><button class="btn btn-danger" type="button" onclick="deletedata(${index})">Remove From Cart</button>
        <button class="btn btn-warning" type="button" onclick="editproduct(${index})">Edit</button>
        </td>

      </tr>`}

    data.innerHTML = wallet;
    count.innerText = list.length;
}

function cleardata() {
    productName.value = null;
    productCategory.value = null;
    price.value = null;
}

function deletedata(index) {
    productList.splice(index, 1);
    displayProduct(productList);
    localStorage.setItem('product',JSON.stringify(productList));
}


function editproduct(index) {
    var element = productList[index];
    productName.value = element.productName;
    productCategory.value = element.productCategory;
    price.value = element.price;
    updatedindex = index;

    button.innerText = ("update");
    button.classList.replace('btn-primary', 'btn-success')
}



function updateProduct(index, newProduct) {
    productList.splice(index, 1, newProduct);

    button.innerText = ("Add to Cart");
    button.classList.replace('btn-success', 'btn-primary')
}


function searchproduct(term){
    productSearchList =[];
    for (let index = 0; index < productList.length; index++) {
        
        var element = productList[index];
        if(element.productName.toLowerCase().includes(term.toLowerCase())==true){
            productSearchList.push(element)
        }
    }
    displayProduct(productSearchList);
}
