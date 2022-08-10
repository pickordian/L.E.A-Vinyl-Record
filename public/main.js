    let bags = document.querySelectorAll('.add-bag');

    let products = [
        {
            name: 'Dawn FM',
            tag: 'Dawn FM',
            price: 32,
            inBag: 0
        },
        {
            name: 'Un Verano Sin Ti',
            tag: 'UVST',
            price: 29,
            inBag: 0
        }, 
        {
            name: 'Harrys House',
            tag: 'HarrysHouse',
            price: 32,
            inBag: 0
        }, 
        {
            name: 'Ivory',
            tag: 'ivory',
            price: 22,
            inBag: 0
        }
    ];


    for(let i=0; i< bags.length; i++){
        bags[i].addEventListener('click', () => {
            bagNumbers(products[i]);
            totalCost(products[i]);
        })
    }

    function onLoadBagNumbers(){
        let productNumbers = localStorage.getItem('bagNumbers');   

        if(productNumbers){
            document.querySelector('.bag span').textContent = productNumbers;
        }
    }

    function bagNumbers(product){
        let productNumbers = localStorage.getItem('bagNumbers');
        
        productNumbers = parseInt(productNumbers);
        
        if(productNumbers){
            localStorage.setItem('bagNumbers', productNumbers + 1);
            document.querySelector('.bag span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem('bagNumbers', 1);
            document.querySelector('.bag span').textContent = 1;
        }

        setItems(product);
    }

    function setItems(product){
        let bagItems = localStorage.getItem('productsInBag');
        bagItems = JSON.parse(bagItems);
        
        if(bagItems != null){
            if(bagItems[product.tag] == undefined){
                bagItems = {
                    ...bagItems,
                    [product.tag]: product
                }
            }
            bagItems[product.tag].inBag += 1;
        } else{
            product.inBag = 1;
            bagItems = {
                [product.tag]: product
            }
        }

        localStorage.setItem("productsInBag", JSON.stringify
        (bagItems));
    }

    function totalCost(product) {
        //console.log("the product price is", product.price);
        let bagCost = localStorage.getItem('totalCost');
        console.log("my bagCost is", bagCost);
        console.log(typeof bagCost);
       
        if(bagCost != null){
            bagCost = parseInt(bagCost);
            localStorage.setItem("totalCost", bagCost + product.price);
        }else{
            localStorage.setItem("totalCost", product.price);
        }
   
    }

    function displayBag()
    {
        let bagItems = localStorage.getItem("productsInBag");
        bagItems = JSON.parse(bagItems);
        let productConatiner = document.querySelector
        (".products"); /* original was .products-container*/
       
        if(bagItems && productConatiner){
            productConatiner.innerHTML = '';
            Object.values(bagItems).map(item => {
                productConatiner.innerHTML += `
                <div class= "product">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <img src = "./images/${item.tag}.jpeg">
                    <span>${item.name}</span>
                    </div>
                    `
            });
        }
    }

    displayBag();
    onLoadBagNumbers();