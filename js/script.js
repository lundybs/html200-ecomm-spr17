var products = [
  {//0 element
      "name": "Reversible Plaid",
      "price": 26.99,
      "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
      "imageTitle": "reversible-plaid.jpg"
  },
  {//1 element
      "name": "Wool Cable Knit",
      "price": 49.99,
      "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
      "imageTitle": "wool-cable.jpeg"
  },
  {//2 element
      "name": "Northern Lights",
      "price": 29.99,
      "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
      "imageTitle": "northern-lights.jpg"
  },
  {//3 element
      "name": "Ombre Infinity",
      "price": 11.99,
      "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
      "imageTitle": "ombre-infinity.jpg"
  },
  {//4 element
      "name": "Fringed Plaid",
      "price": 18.99,
      "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
      "imageTitle": "fringed-plaid.jpeg"
  },
  {//5 element
      "name": "Multi Color",
      "price": 22.99,
      "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
      "imageTitle": "multi-color.jpeg"
  },
  {//6 element
      "name": "Etro Paisley-Print Silk",
      "price": 26.99,
      "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
      "imageTitle": "etro.png"
  },
  {//7 element
      "name": "Ashby Twill",
      "price": 70.99,
      "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
      "imageTitle": "twill.jpg"
  }
]

var outRPlaid = document.getElementById("name-rev-plaid");
outRPlaid.innerHTML = products[0].name;
var outRPlaidP = document.getElementById("price-rev-plaid");
outRPlaidP.innerHTML = products[0].price;
var outRPlaidD = document.getElementById("desc-rev-plaid");
outRPlaidD.innerHTML = products[0].description;

var outPlaid = document.getElementById("name-plaid");
outPlaid.innerHTML = products[4].name;
var outPlaidP = document.getElementById("price-plaid");
outPlaidP.innerHTML = products[4].price;
var outPlaidD = document.getElementById("desc-plaid");
outPlaidD.innerHTML = products[4].description;

var outMColor = document.getElementById("name-multi-color");
outMColor.innerHTML = products[5].name;
var outMColorP = document.getElementById("price-multi-color");
outMColorP.innerHTML = products[5].price;
var outMColorD = document.getElementById("desc-multi-color");
outMColorD.innerHTML = products[5].description;

var outNorthern = document.getElementById("name-northern");
outNorthern.innerHTML = products[2].name;
var outNorthernP = document.getElementById("price-northern");
outNorthernP.innerHTML = products[2].price;
var outNorthernD = document.getElementById("desc-northern");
outNorthernD.innerHTML = products[2].description;

var outInfinity = document.getElementById("name-infinity");
outInfinity.innerHTML = products[3].name;
var outInfinityP = document.getElementById("price-infinity");
outInfinityP.innerHTML = products[3].price;
var outInfinityD = document.getElementById("desc-infinity");
outInfinityD.innerHTML = products[3].description;

var outTwill = document.getElementById("name-twill");
outTwill.innerHTML = products[7].name;
var outTwillP = document.getElementById("price-twill");
outTwillP.innerHTML = products[7].price;
var outTwillD = document.getElementById("desc-twill");
outTwillD.innerHTML = products[7].description;

var outCable = document.getElementById("name-cable");
outCable.innerHTML = products[1].name;
var outCableP = document.getElementById("price-cable");
outCableP.innerHTML = products[1].price;
var outCableD = document.getElementById("desc-cable");
outCableD.innerHTML = products[1].description;

var outSilk = document.getElementById("name-silk");
outSilk.innerHTML = products[6].name;
var outSilkP = document.getElementById("price-silk");
outSilkP.innerHTML = products[6].price;
var outSilkD = document.getElementById("desc-silk");
outSilkD.innerHTML = products[6].description;

function emailNewLetter() {
    event.preventDefault();
    if (document.emailSignUp.email.value != "") {
        var emailName = document.emailSignUp.email.value;
        console.log("Thanks for signing up for our mailing list, " + emailName + "!");
        document.getElementById("thankYou").innerHTML = "Thank you for registering with email, " + emailName + "!";
    } else {
        console.log("Please enter an email address.");
        document.getElementById("thankYou").innerHTML = "Please enter an email.";
    }
}

var cartArray = [];

function AddToCart() {
    event.preventDefault();
    var addCart = document.shoppingCart.add.value;
    cartArray.push(addCart);
}
