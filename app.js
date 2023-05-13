const applebaseprice = 100;
const mangobaseprice = 150;
const bananaaseprice = 120;
const watermelonbaseprice = 180;

var applecount = +prompt('how many apple u want  ------ Price = 100$');
var mangocount = +prompt('how many mango u want   ------ Price = 150$');
var bananacount = +prompt('how many banana u want  ------ Price = 120$');
var watermeloncount = +prompt(
  'how many watermelon u want  ------ Price = 180$'
);

const applepricecount = applecount * applebaseprice;
const mangopricecount = mangocount * mangobaseprice;
const bananapricecountt = bananacount * bananaaseprice;
const watermelonpricecount = watermeloncount * watermelonbaseprice;

const result =
  applepricecount + mangopricecount + bananapricecountt + watermelonpricecount;

alert('Your TOtal price is ' + result + '$');
