let addCartArr = JSON.parse(localStorage.getItem("CartData")) || [];
let itemsArr = [
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000373.jpg?ver=16.58",
    Name: "Wednesday Bucket",
    Varity: "Non veg",
    Price: "₹699.05",
    Offer: "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000409.jpg?ver=16.58",
    Name: "Wednesday Strips Bucket",
    Varity: "Non veg",
    Price: "₹350.48",
    Offer: "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000921.jpg?ver=16.58",
    Name: "5pc Leg Piece Bucket Meal",
    Varity: "Non veg Serves 2",
    Price: "₹619.05",
    Offer: "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000891.jpg?ver=16.58",
    Name: "Bucket for Two",
    Varity: "Non veg Serves 2-3",
    Price: "₹599.05",
    Offer: "Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn [serves 2-3]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K445.jpg?ver=16.58",
    Name: "10pc Leg Piece Bucket & 4 Dips",
    Varity: "Non veg Serves 3-4",
    Price: "₹899.05",
    Offer: "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K009.jpg?ver=16.58",
    Name: "5pc Leg Piece Bucket & 2 Dips",
    Varity: "Non veg Serves 2",
    Price: "₹499.05",
    Offer: "Save Rs. 141 on this favorite combo of 5 Leg Pieces & 2 Dips [serves 2]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"

},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K012.jpg?ver=16.58",
    Name: "Ultimate Savings Bucket",
    Varity: "Non veg Serves 2-3",
    Price: "₹699.05",
    Offer: "Save 35% on signature bucket of 4pc Hot & crispy, 6 Wings, 4 strips, 3 Dips & Pepsi PET [serves 2-3 ]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
  
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000571.jpg?ver=16.58",
    Name: "Big 12",
    Varity: "Non veg Serves 2- 3",
    Price: "₹719.05",
    Offer: "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000920.jpg?ver=16.58",
    Name: "Mingles Bucket Meal",
    Varity: "Non veg Serves 2",
    Price: "₹479.05",
    Offer: "Save Rs. 71 on 4 Hot Wings, 2 Chicken Strips, Reg Popcorn, medium fries & Pepsi PET [serves 2 ]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K511.jpg?ver=16.58",
    Name: "Big 8",
    Varity: "Non veg Serves 2- 3",
    Price: "₹684.76",
    Offer: "Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K511.jpg?ver=16.58",
    Name: "5pc Smoky Red Chicken",
    Varity: "Non veg Serves 2",
    Price: "₹499.05",
    Offer: "Flat 20% off on 5pc Smoky red grilled chicken [serves 2]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000920.jpg?ver=16.58",
    Name: "8 pc Hot & Crispy Chicken",
    Varity: "Non veg Serves 3-4",
    Price: "₹748.57",
    Offer: "Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000892.jpg?ver=16.58",
    Name: "6 pc Hot & Crispy Chicken",
    Varity: "Non veg Serves 2-3",
    Price: "₹619.05",
    Offer: "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000638.jpg?ver=16.58",
    Name: "Chick & Share",
    Varity: "Non veg Serves 2",
    Price: "₹448.57",
    Offer: "Save 22% & Pick any - 5pc Hot & Crispy OR 10 chicken strips OR 2 Large Popcorn [serves 2]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
}
]

ChickenBucket(itemsArr)
function ChickenBucket(itemsArr){
    itemsArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton")
        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.append(image,innerBox,add);
        document.querySelector("#bucketBox").append(bucket);
        
    })
}

let newLuanchArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002102.jpg?ver=16.66",
        Name: "Buddy Popcorn Nachos Meal",
        Varity: "Non veg Serves 2",
        Price: "₹448.57",
        Offer: "Two ka crunch, in one munch- for 2! Combo of 2 new Popcorn Nachos & a Pepsi PET [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002103.jpg?ver=16.66",
        Name: "Popcorn Nachos & Wings Combo",
        Varity: "Non veg Serves 1-2",
        Price: "₹379.05",
        Offer: "New Popcorn Nachos, 3pc Wings & 1 Pepsi PET in this delightful snack combo! [serves 1-2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K664.jpg?ver=16.66",
        Name: "Popcorn Nachos",
        Varity: "Non veg",
        Price: "₹199.05",
        Offer: "Crunchy popcorn & 2 delicious sauces paired with masala Doritos. 2 ka crunch, in 1 munch!",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002091.jpg?ver=16.66",
        Name: "10pc Strips with Dynamite Sauce",
        Varity: "Non veg Serves 2-3",
        Price: "₹639.05",
        Offer: "Dipping combo of 10pc chicken strips & our new Dynamite Spicy Mayo Sauce Bottle [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002092.jpg?ver=16.66",
        Name: "10pc Strips with Nashville Sauce",
        Varity: "Non veg Serves 2-3",
        Price: "₹639.05",
        Offer: "Dipping combo of 10pc chicken strips & our new Nashville Hot Pepper Sauce Bottle [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002093.jpg?ver=16.66",
        Name: "6pc Hot & Crispy with Dynamite Sauce",
        Varity: "Non veg Serves 3",
        Price: "₹779.05",
        Offer: "6pc Hot & Crispy Chicken paired with our new Dynamite Spicy Mayo Sauce Bottle [serves 3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002094.jpg?ver=16.66",
        Name: "6pc Hot & Crispy with Nashville Sauce",
        Varity: "Non veg Serves 3",
        Price: "₹779.05",
        Offer: "6pc Hot & Crispy Chicken paired with our new Nashville Hot Pepper Sauce Bottle [serves 3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002095.jpg?ver=16.66",
        Name: "Friendship Bucket with Dynamite Sauce",
        Varity: "Non veg Serves 3-4",
        Price: "₹879.05",
        Offer: "3pc Hot & Crispy, 3 Wings, 3 Strips, Large Popcorn & our new Dynamite Mayo Bottle [serves 3-4]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000447.jpg?ver=16.66",
        Name: "Friendship Bucket with Nashville Sauce",
        Varity: "Non veg Serves 3-4",
        Price: "₹879.05",
        Offer: "3pc Hot & Crispy, 3 Wings, 3 Strips, Large Popcorn & our new Nashville Bottle [serves 3-4]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K660.jpg?ver=16.66",
        Name: "Nashville Hot Pepper Sauce Bottle",
        Varity: "Non veg",
        Price: "₹189.52",
        Offer: "Nashville in a bottle! Our signature hot, peppery sauce which pairs well with all things KFC.",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K659.jpg?ver=16.66",
        Name: "Dynamite Spicy Mayo Sauce Bottle",
        Varity: "Non veg",
        Price: "₹189.52",
        Offer: "Spicy, punchy mayoàbottled up just for you & your favorite KFC! Our signature launch.",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
]

NewLuanch(newLuanchArr)

function NewLuanch(newLuanchArr){
    newLuanchArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#newLuanch").append(bucket);
    })
        
}

let ChickenRollsArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002067.jpg?ver=16.66",
        Name: "Double Rolls Combo for 2",
        Varity: "Non veg Serves 2",
        Price: "₹550.48",
        Offer: "Deal combo of 2 New Double Chicken Rolls, Large Fries, 2 Dips & 1 Pepsi PET [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002068.jpg?ver=16.66",
        Name: "Single Roll Combo for 2",
        Varity: "Non veg Serves 2",
        Price: "₹470.48",
        Offer: "Deal combo of 2 New Single Chicken Rolls, Large Fries, 2 Dips & 1 Pepsi PET [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002069.jpg?ver=16.66",
        Name: "Double Roll Combo for 1",
        Varity: "Non veg Serves 1",
        Price: "₹380.00",
        Offer: "Deal combo of 1 New Double Chicken Roll, Large Fries, 2 Dips & 1 Pepsi PET [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002070.jpg?ver=16.66",
        Name: "Single Roll Combo for 1",
        Varity: "Non veg Serves 1",
        Price: "₹340.00",
        Offer: "Deal combo of 1 New Single Chicken Roll, Large Fries, 2 Dips & 1 Pepsi PET [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002071.jpg?ver=16.66",
        Name: "2 Double Chicken Rolls",
        Varity: "Non veg Serves 2",
        Price: "₹335.24",
        Offer: "2 portions of the new Double Chicken Roll at a deal price[serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002072.jpg?ver=16.66",
        Name: "2 Single Chicken Rolls",
        Varity: "Non veg Serves 2",
        Price: "₹255.24",
        Offer: "2 portions of the new Single Chicken Roll at a deal price [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K657.jpg?ver=16.66",
        Name: "Double Chicken Roll",
        Varity: "Non veg Serves 1",
        Price: "₹170.48",
        Offer: "New street style roll with double chicken strips, onions and 2 spicy sauces [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=16.66",
        Name: "Single Chicken Roll",
        Varity: "Non veg Serves 1",
        Price: "₹130.48",
        Offer: "New street style roll with single chicken strip, onions and 2 spicy sauces[serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

chickenRolls(ChickenRollsArr)

function chickenRolls(ChickenRollsArr){
    ChickenRollsArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#chickenRolls").append(bucket);
    })
}

let biryaniArr = [
{
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002016.jpg?ver=16.66",
        Name: "Classic Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹740.00",
        Offer: "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002017.jpg?ver=16.66",
        Name: "Smoky Grilled Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹740.00",
        Offer: "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002052.jpg?ver=16.66",
        Name: "Popcorn Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹690.48",
        Offer: "Save 33% on signature bucket of 4pc Hot & crispy, 6 Wings, 4 strips, 2 Dips & Pepsi PET [serves 2-3 ]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K626.jpg?ver=16.66",
        Name: "Classic Chicken Biryani Bucket-Large",
        Varity: "Non veg Serves 2",
        Price: "₹475.24",
        Offer: "Large portions of Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Gravies [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K627.jpg?ver=16.66",
        Name: "Popcorn Chicken Biryani Bucket-Large",
        Varity: "Non veg Serves 2",
        Price: "₹475.24",
        Offer: "Large portions of Biryani rice served with Chicken Popcorn & 2 Gravies [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K625.jpg?ver=16.66",
        Name: "Smoky Grilled Biryani Bucket-Large",
        Varity: "Non veg Serves 2",
        Price: "₹475.24",
        Offer: "Large portions of Biryani rice served with 2 pc Smoky Red Chicken & 2 Gravies [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K623.jpg?ver=16.66",
        Name: "Classic Chicken Biryani Bucket",
        Varity: "Non veg Serves 1",
        Price: "₹229.52",
        Offer: "Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K624.jpg?ver=16.66",
        Name: "Popcorn Chicken Biryani Bucket",
        Varity: "Non veg Serves 1",
        Price: "₹229.52",
        Offer: "Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K625.jpg?ver=16.66",
        Name: "Smoky Grilled Biryani Bucket",
        Varity: "Non veg Serves 1",
        Price: "₹229.52",
        Offer: "Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K622.jpg?ver=16.66",
        Name: "Veg Biryani Bucket",
        Varity: "Veg Serves 1",
        Price: "₹188.57",
        Offer: "Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

Biryani(biryaniArr)

function Biryani(biryaniArr){
    biryaniArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#Biryani").append(bucket);
    })
}

let BoxMealArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000999.jpg?ver=16.66",
        Name: "All Chicken BoxNon veg",
        Varity: "Non veg",
        Price: "₹189.52",
        Offer: "A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001002.jpg?ver=16.66",
        Name: "Classic Zinger Box",
        Varity: "Non veg",
        Price: "₹313.33",
        Offer: "A classic deal for Zinger lovers : Get 1 Classic Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001003.jpg?ver=16.66",
        Name: "Zinger Tandoori Box",
        Varity: "Non veg",
        Price: "₹313.33",
        Offer: "A deal for the Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001039.jpg?ver=16.66",
        Name: "Popcorn Biryani Box",
        Varity: "Non veg",
        Price: "₹328.57",
        Offer: "Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001004.jpg?ver=16.66",
        Name: "Veg Zinger Box",
        Varity: "Non veg",
        Price: "₹313.33",
        Offer: "A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & a Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001038.jpg?ver=16.66",
        Name: "Veg Biryani Box",
        Varity: "Veg",
        Price: "₹279.05",
        Offer: "Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & a Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

boxMeal(BoxMealArr)

function boxMeal(BoxMealArr){
    BoxMealArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#boxMeal").append(bucket);
    })
}

let BurgerArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001025.jpg?ver=16.66",
        Name: "2 Chicken Krisper Burgers",
        Varity: "Non veg",
        Price: "₹228.57",
        Offer: "2 delicious chicken value burgers - at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001022.jpg?ver=16.66",
        Name: "2 Veg Krisper Burgers",
        Varity: " Veg",
        Price: "₹158.10",
        Offer: "2 delicious veg value burgers - at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001027.jpg?ver=16.66",
        Name: "Chicken & Krispers Combo",
        Varity: "Non veg",
        Price: "₹519.05",
        Offer: "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K540.jpg?ver=16.66",
        Name: "Tandoori Zinger Burger",
        Varity: "Non veg",
        Price: "₹199.05",
        Offer: "Chicken zinger with a delicious tandoori sauce",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000956.jpg?ver=16.66",
        Name: "Mixed Zinger Doubles",
        Varity: "Non veg",
        Price: "₹348.57",
        Offer: "Best-seller combo of classic chicken zinger & tandoori zinger",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K439.jpg?ver=16.66",
        Name: "Classic Zinger Burger",
        Varity: "Non veg",
        Price: "₹189.52",
        Offer: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000730.jpg?ver=16.66",
        Name: "Buddy Meal",
        Varity: "Non veg",
        Price: "₹499.05",
        Offer: "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K146.jpg?ver=16.66",
        Name: "Veg Zinger Burger",
        Varity: "Veg",
        Price: "₹179.05",
        Offer: "Signature veg burger with crispy patties, veggies & a tangy sauce",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001023.jpg?ver=16.66",
        Name: "2 Veg Krispers Meal",
        Varity: "Veg",
        Price: "₹268.57",
        Offer: "2 veg value burgers, crispy medium fries & 2 delicious dips at a deal price!",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

Burger(BurgerArr)

function Burger(BurgerArr){
    BurgerArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#Burgers").append(bucket);
    })
}

let HomeSpecialArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001099.jpg?ver=16.66",
        Name: "Super Snacker Combo",
        Varity: "Non veg Serves 1-2",
        Price: "₹450.48",
        Offer: "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002000.jpg?ver=16.66",
        Name: "Chick’n Wings Combo",
        Varity: "Non veg Serves 1-2",
        Price: "₹450.48",
        Offer: "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002016.jpg?ver=16.66",
        Name: "Classic Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹740.00",
        Offer: "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000732.jpg?ver=16.66",
        Name: "Classic Zinger Meal",
        Varity: "Non veg Serves 1",
        Price: "₹344.76",
        Offer: "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002017.jpg?ver=16.66",
        Name: "Smoky Grilled Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹740.00",
        Offer: "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002017.jpg?ver=16.66",
        Name: "Chick'n Strips Solo Combo",
        Varity: "Non veg Serves 1",
        Price: "₹419.05",
        Offer: "Go solo with 1 pc Hot & Crispy, 3 strips, Medium Fries & a chilled Pepsi Black [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000974.jpg?ver=16.66",
        Name: "Stay Home Bucket",
        Varity: "Non veg Serves 3",
        Price: "₹788.57",
        Offer: "Save 21% on 4pc Hot & Crispy, 4 Wings, 6 Chicken Strips & 2 dips [serves 3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002002.jpg?ver=16.66",
        Name: "Family Feast",
        Varity: "Non veg Serves 3",
        Price: "₹828.57",
        Offer: "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

HomeSpecial(HomeSpecialArr)
function HomeSpecial(HomeSpecialArr){
    HomeSpecialArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#HomeSpecial").append(bucket);
    })
}

let SnacksArr = [
{
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000789.jpg?ver=16.66",
        Name: "Chicken & Fries Bucket",
        Varity: "Non veg",
        Price: "₹299.05",
        Offer: "Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000789.jpg?ver=16.66",
        Name: "Popcorn & Fries bucket",
        Varity: "Non veg",
        Price: "₹319.05",
        Offer: "Large Chicken Popcorn with Med Fries - at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K264.jpg?ver=16.66",
        Name: "Mingles Bucket",
        Varity: "Non veg Serves 1-2",
        Price: "₹339.05",
        Offer: "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K008.jpg?ver=16.66",
        Name: "4pc Hot & Crispy Chicken",
        Varity: "Non veg",
        Price: "₹428.57",
        Offer: "4 pcs of signature Hot & crispy chicken at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K223.jpg?ver=16.66",
        Name: "Large Popcorn",
        Varity: "Non veg",
        Price: "₹228.57",
        Offer: "Signature bite-sized boneless chicken, with special spices",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K223.jpg?ver=16.66",
        Name: "Medium Popcorn",
        Varity: "Non veg",
        Price: "₹164.76",
        Offer: "Signature bite-sized boneless chicken, with special spices",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K223.jpg?ver=16.66",
        Name: "Regular Popcorn",
        Varity: "Non veg",
        Price: "₹115.24",
        Offer: "Signature bite-sized boneless chicken, with special spices",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K138.jpg?ver=16.66",
        Name: "Large Fries",
        Varity: "Veg",
        Price: "₹119.05",
        Offer: "Jazz up your meal with crispy large fries!",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K444.jpg?ver=16.66",
        Name: "2 pcs Smoky Red Chicken",
        Varity: "Non veg",
        Price: "₹248.57",
        Offer: "Spicy, red, grilled chicken",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K016.jpg?ver=16.66",
        Name: "Medium Fries",
        Varity: "Veg",
        Price: "₹99.05",
        Offer: "Jazz up your meal with Crispy Fries!",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K007.jpg?ver=16.66",
        Name: "2 pc Hot & Crispy Chicken",
        Varity: "Non veg",
        Price: "₹229.52",
        Offer: "Signature Hot & crispy chicken",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K037.jpg?ver=16.66",
        Name: "6pc Boneless Chicken strips",
        Varity: "Non veg",
        Price: "₹259.05",
        Offer: "Tender, juicy, signature boneless chicken strips",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K443.jpg?ver=16.66",
        Name: "1 pc Smoky Red Chicken",
        Varity: "Non veg",
        Price: "₹124.76",
        Offer: "Spicy, red, grilled chicken",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K303.jpg?ver=16.66",
        Name: "4pc Hot Chicken Wings",
        Varity: "Non veg",
        Price: "₹164.76",
        Offer: "Seasoned, signature KFC chicken wings",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K036.jpg?ver=16.66",
        Name: "3pc Boneless Chicken strips",
        Varity: "Non veg",
        Price: "₹164.76",
        Offer: "Tender, juicy, signature boneless chicken strips",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K496.jpg?ver=16.66",
        Name: "Choco Mud Pie",
        Varity: " Veg",
        Price: "₹128.57",
        Offer: "Chocolate lovers unite! Say hello to our creamy chocolate & cake dessert- a must try!",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K351.jpg?ver=16.66",
        Name: "2 pc Veg Patty",
        Varity: "Veg",
        Price: "₹155.24",
        Offer: "Delicious, crispy, veg add-on",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K497.jpg?ver=16.66",
        Name: "Coffee Mousse Cake",
        Varity: "Veg",
        Price: "₹128.57",
        Offer: "Coffee, chocolate, cake…whats not to love? Enjoy this for coffee-licious temptations!",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K616.jpg?ver=16.66",
        Name: "Tandoori Masala Dip",
        Varity: "Veg",
        Price: "₹28.57",
        Offer: "Special tandoori flavor dip to add a twist to your meal",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K660.jpg?ver=16.66",
        Name: "Nashville Hot Pepper Sauce Bottle",
        Varity: "Non veg",
        Price: "₹189.52",
        Offer: "Nashville in a bottle! Our signature hot, peppery sauce which pairs well with all things KFC.",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K659.jpg?ver=16.66",
        Name: "Dynamite Spicy Mayo Sauce Bottle",
        Varity: "Non veg",
        Price: "₹189.52",
        Offer: "Spicy, punchy mayoàbottled up just for you & your favorite KFC! Our signature launch.",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000852.jpg?ver=16.66",
        Name: "Pack of 4 Dips",
        Varity: " Veg",
        Price: "₹109.52",
        Offer: "Adding dips is always a good idea!",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K662.jpg?ver=16.66",
        Name: "Nashville Hot Pepper Dip",
        Varity: "Veg",
        Price: "₹28.57",
        Offer: "Hot, peppery goodness of Nashville - our new signature dip",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000853.jpg?ver=16.66",
        Name: "Pack of 2 Dips",
        Varity: "Veg",
        Price: "₹57.14",
        Offer: "Adding dips is always a good idea!",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/no-image.jpg",
        Name: "Dynamite Spicy Mayo Dip",
        Varity: "Veg",
        Price: "₹28.57",
        Offer: "Spicy, punchy mayo -our new signature dip",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

Snacks(SnacksArr)

function Snacks(SnacksArr){
    SnacksArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#Snacks").append(bucket);
    })
}

let BeveragesArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=16.66",
        Name: "Pepsi PETVeg",
        Varity: "Veg",
        Price: "₹57.14",
        Offer: "Pepsi PET",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K485.jpg?ver=16.66",
        Name: "Pepsi Can 330 ml",
        Varity: "Veg",
        Price: "₹57.14",
        Offer: "Pepsi Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K487.jpg?ver=16.66",
        Name: "7UP Can 330 ml",
        Varity: "Veg",
        Price: "₹57.14",
        Offer: "7UP Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/no-image.jpg",
        Name: "Pepsi Black Can 330 ml",
        Varity: "Veg",
        Price: "₹57.14",
        Offer: "Pepsi Black Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/no-image.jpg",
        Name: "Mirinda Can 330 ml",
        Varity: "Veg",
        Price: "₹57.14",
        Offer: "Mirinda Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.2636651d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

Beverages(BeveragesArr)

function Beverages(BeveragesArr){
    BeveragesArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#Beverages").append(bucket);
    })
}


function addToCart(elem){
    addCartArr.push(elem);
    console.log("Hi")
    localStorage.setItem("CartData", JSON.stringify(addCartArr))
}

function check(name){
    let checkCart = addCartArr.filter(function(elem){
        return name === elem.Name
    })
    if(checkCart.length>0){
        return true;
    }else{
        return false;
    }
}