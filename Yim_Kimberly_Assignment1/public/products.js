var products = 
[
{
    "name": "Safety Pin Earrings",
    "price": 54.00,      
    "image": "images/pin_earrings.jpg"
},
  {
    "name": "Leaf Wreath Earrings",
    "price": 56.00,
    "image": "images/leaf_earrings.jpg"
  },
  {
    "name": "Pearl Leaves Earrings",
    "price": 58.00,
    "image": "images/PearlLeaf_earrings.jpg"
  }
];

if (typeof module != 'undefined') {
    module.exports.products = products;
}