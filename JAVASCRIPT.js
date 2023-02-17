function toHomepage() {

    windows.location = "file:///C:/Users/lindi/Downloads/Movie%20system/MovieSystemHomepage.html";
}


function tocartpage() {

    windows.location = "file:///C:/Users/lindi/Downloads/Movie%20system/MovieSystemCartpage.html";
}


const Movies = [{
    id: 180533135, cinema_number: 1, title: "Despicable Me", director: "Pierre Coffin", runtime: "95 minutes", release_year: "2010", ticket_price: "R35,00", poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5nifcW4xMAoGLKJBBza8g3eOtitMeiMHPA&usqp=CAU",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5nifcW4xMAoGLKJBBza8g3eOtitMeiMHPA&usqp=CAU", description: "In a happy suburban neighborhood surrounded by white picket fences with flowering rose bushes,sits a black house with a dead lawn. Unbeknownst to the neighbors,hidden beneath this house is a vast secret hideout.Surrounded by a small army of minions, we discover Gru,planning the biggest heist in the history of the world. He is going to steal the moon. Gru delights in all things wicked. Armed with his arsenal of shrink rays, freeze rays, and battle-ready vehicles for land and air, he vanquishes all who stand in his way. Until the day he encounters the immense will of three little orphaned girls who look at him and see something that no one else has ever seen: a potential Dad.The world's greatest villain has just met his greatest challenge:three little girls named Margo,Edith, and Agnes."
},
{
    id: 1235664, cinema_number: 2, title: "Madagascar:Escape 2 Africa", director: "Eric Darnell * Tom McGrath", runtime: "89 minutes", release_year: "2008", ticket_price: "R30,00", poster_url: "https://images.moviesanywhere.com/34fc1af67173d41e4fd74d07dbb838db/7b653358-e9ed-488c-8d0c-bc2d228d1ac3.webp?h=375&resize=fit&w=250",
    image: "https://images.moviesanywhere.com/34fc1af67173d41e4fd74d07dbb838db/7b653358-e9ed-488c-8d0c-bc2d228d1ac3.jpg", description: "The sequel to 2005's 'Madagascar', in which New York Zoo animals, Alex the Lion, Marty the Zebra, Melman the Giraffe and Gloria the Hippo, still stranded on Madagascar, start to leave the island. All of a sudden, they land in the wilderness of Africa, where Alex meets the rest of his family, but has trouble communicating with them after spending so much time at the Central Park Zoo"
},
{
    id: 1122632, cinema_number: 3, title: "Cloudy with a chance of meatballs2", director: "Cody Cameron * Kris Pearn", runtime: "95 minutes", release_year: "2013", ticket_price: "R40,00", poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXY3aPKSw2t382kQ8GYdBkHLIfha5MEdO0Ig&usqp=CAU",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXY3aPKSw2t382kQ8GYdBkHLIfha5MEdO0Ig&usqp=CAU", description: "Flint Lockwood now works at The Live Corp Company for his idol Chester V. But he's forced to leave his post when he learns that his most infamous machine is still operational, and is churning out menacing food-animal hybrids."
},
{
    id: 725888, cinema_number: 4, title: "The Lorax", director: "Chris Renaud * Kyle Balda", runtime: "86 minutes", release_year: "2012", ticket_price: "R35,00", poster_url: "https://m.media-amazon.com/images/M/MV5BMTU1MTAwMjk1NF5BMl5BanBnXkFtZTcwMDI5NDc4Ng@@._V1_.jpg",
    image: "https://m.media-amazon.com/images/M/MV5BMTU1MTAwMjk1NF5BMl5BanBnXkFtZTcwMDI5NDc4Ng@@._V1_.jpg", description: "A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world."
}];


document.getElementById("Movieheading1").innerHTML = "Cinema:" + Movies[0].cinema_number;
document.getElementById("Movieheading2").innerHTML = "Cinema:" + Movies[1].cinema_number;
document.getElementById("Movieheading3").innerHTML = "Cinema:" + Movies[2].cinema_number;
document.getElementById("Movieheading4").innerHTML = "Cinema:" + Movies[3].cinema_number;

document.getElementById("Movieposter1").innerHTML = '<img src="' + Movies[0].poster_url + '">';
document.getElementById("Movieposter2").innerHTML = '<img src="' + Movies[1].poster_url + '">';
document.getElementById("Movieposter3").innerHTML = '<img src="' + Movies[2].poster_url + '">';
document.getElementById("Movieposter4").innerHTML = '<img src="' + Movies[3].poster_url + '">';

document.getElementById("Movietitle1").innerHTML = Movies[0].title;
document.getElementById("Movietitle2").innerHTML = Movies[1].title;
document.getElementById("Movietitle3").innerHTML = Movies[2].title;
document.getElementById("Movietitle4").innerHTML = Movies[3].title;

document.getElementById("Description1").innerHTML = "Description:" + Movies[0].description;
document.getElementById("Description2").innerHTML = "Description:" + Movies[1].description;
document.getElementById("Description3").innerHTML = "Description:" + Movies[2].description;
document.getElementById("Description4").innerHTML = "Description:" + Movies[3].description;

document.getElementById("Price1").innerHTML = "Price:" + Movies[0].ticket_price;
document.getElementById("Price2").innerHTML = "Price:" + Movies[1].ticket_price;
document.getElementById("Price3").innerHTML = "Price:" + Movies[2].ticket_price;
document.getElementById("Price4").innerHTML = "Price:" + Movies[3].ticket_price;

document.getElementById("Modalheader1").innerHTML = "Despicable Me";
document.getElementById("modalbody1").innerHTML = "<b>" + "Title:" + "</b>" + Movies[0].title + "<br>" + "<br>"
    + "<b>" + "Director/s:" + "</b>" + Movies[0].director + "<br>" + "<br>" +
    "<b>" + "Release Year:" + "</b>" + Movies[0].release_year + "<br>" + "<br>" + "<b>" + "Runtime:" + "</b>" + Movies[0].runtime;


document.getElementById("Modalheader2").innerHTML = "Madagascar:Escape 2 Africa";
document.getElementById("modalbody2").innerHTML = "<b>" + "Title:" + "</b>" + Movies[1].title + "<br>" + "<br>"
    + "<b>" + "Director/s:" + "</b>" + Movies[1].director + "<br>" + "<br>" +
    "<b>" + "Release Year:" + "</b>" + Movies[1].release_year + "<br>" + "<br>" + "<b>" + "Runtime:" + "</b>" + Movies[1].runtime;

document.getElementById("Modalheader3").innerHTML = "Cloudy with a chance of meatballs 2";
document.getElementById("modalbody3").innerHTML = "<b>" + "Title:" + "</b>" + Movies[2].title + "<br>" + "<br>"
    + "<b>" + "Director/s:" + "</b>" + Movies[2].director + "<br>" + "<br>" +
    "<b>" + "Release Year:" + "</b>" + Movies[2].release_year + "<br>" + "<br>" + "<b>" + "Runtime:" + "</b>" + Movies[2].runtime;

document.getElementById("Modalheader4").innerHTML = "The Lorax";
document.getElementById("modalbody4").innerHTML = "<b>" + "Title:" + "</b>" + Movies[3].title + "<br>" + "<br>"
    + "<b>" + "Director/s:" + "</b>" + Movies[3].director + "<br>" + "<br>" +
    "<b>" + "Release Year:" + "</b>" + Movies[3].release_year + "<br>" + "<br>" + "<b>" + "Runtime:" + "</b>" + Movies[3].runtime;


var UnitPriceRow1 = 0;
var QuantityRow1 = 0;
var TotalCostRow1 = 0;
var UnitPriceRow2 = 0;
var QuantityRow2 = 0;
var TotalCostRow2 = 0;
var UnitPriceRow3 = 0;
var QuantityRow3 = 0;
var TotalCostRow3 = 0;
var UnitPriceRow4 = 0;
var QuantityRow4 = 0;
var TotalCostRow4 = 0;
var NumberofitemsInCart = document.getElementById("NumberofitemsInCart");
function AddItemsInCart1() {


    var NumberofCartitems = NumberofitemsInCart.stepUp();
    var numberInCart1 = NumberofCartitems.value;

    UnitPriceRow1 = 35;
    QuantityRow1++;
    TotalCostRow1 = UnitPriceRow1 * QuantityRow1;
    localStorage.setItem("TotalCostRow1", TotalCostRow1);
    localStorage.setItem("moviesInCart", Movies[0].title);

    var Movietable = document.getElementById("Table");
    var TableRow = Movietable.insertRow(0);
    var Moviecell1 = TableRow.insertCell(0);
    var Moviecell2 = TableRow.insertCell(1);
    var Moviecell3 = TableRow.insertCell(2);
    var Moviecell4 = TableRow.insertCell(3);
    Moviecell1.innerHTML = '<i class="fa fa-close" style="color:white;background-color: red;box-sizing: 15px;"id="Rowdelete" ></i>' + "Despicable Me";
    Moviecell2.innerHTML = UnitPriceRow1;
    Moviecell3.innerHTML = '<i class="glyphicon glyphicon-circle-arrow-left"  style="color:lightblue;"id="leftarrow"  ></p>' + QuantityRow1 + '<i class="glyphicon glyphicon-circle-arrow-right"style="color:lightblue;"id="rightarrow"  ></i>';
    Moviecell4.innerHTML = TotalCostRow1;

}


function AddItemsInCart2() {


    var NumberofCartitems = NumberofitemsInCart.stepUp();
    var numberInCart2 = NumberofCartitems.value;

    UnitPriceRow2 = 30;
    QuantityRow2++;
    TotalCostRow2 = UnitPriceRow2 * QuantityRow2;
    localStorage.setItem("TotalCostRow2", TotalCostRow2);
    localStorage.setItem("moviesInCart", Movies[1].title);

    var Movietable = document.getElementById("Table");
    var TableRow = Movietable.insertRow(0);
    var Moviecell1 = TableRow.insertCell(0);
    var Moviecell2 = TableRow.insertCell(1);
    var Moviecell3 = TableRow.insertCell(2);
    var Moviecell4 = TableRow.insertCell(3);
    Moviecell1.innerHTML = '<i class="fa fa-close" style="color:white;background-color: red;box-sizing: 15px;"id="Rowdelete" ></i>' + "Madagascar:Escape 2 Africa";
    Moviecell2.innerHTML = UnitPriceRow2;
    Moviecell3.innerHTML = '<i class="glyphicon glyphicon-circle-arrow-left"  style="color:lightblue;"  id="leftarrow"></p>' + QuantityRow2 + '<i class="glyphicon glyphicon-circle-arrow-right"style="color:lightblue;" id="rightarrow"></i>';
    Moviecell4.innerHTML = TotalCostRow2;

}


function AddItemsInCart3() {


    var NumberofCartitems = NumberofitemsInCart.stepUp();
    var numberInCart3 = NumberofCartitems.value;

    UnitPriceRow3 = 40;
    QuantityRow3++;
    TotalCostRow3 = UnitPriceRow3 * QuantityRow3;
    localStorage.setItem("TotalCostRow3", TotalCostRow3);
    localStorage.setItem("moviesInCart", Movies[2].title);

    var Movietable = document.getElementById("Table");
    var TableRow = Movietable.insertRow(0);
    var Moviecell1 = TableRow.insertCell(0);
    var Moviecell2 = TableRow.insertCell(1);
    var Moviecell3 = TableRow.insertCell(2);
    var Moviecell4 = TableRow.insertCell(3);
    Moviecell1.innerHTML = '<i class="fa fa-close" style="color:white;background-color: red;box-sizing: 15px;"id="Rowdelete" ></i>' + "Cloudy with a chance of meatballs2";
    Moviecell2.innerHTML = UnitPriceRow3;
    Moviecell3.innerHTML = '<i class="glyphicon glyphicon-circle-arrow-left" style="color:lightblue;"  id="leftarrow"></p>' + QuantityRow3 + '<i class="glyphicon glyphicon-circle-arrow-right"style="color:lightblue;" id="rightarrow" ></i>';
    Moviecell4.innerHTML = TotalCostRow3;

}

function AddItemsInCart4() {


    var NumberofCartitems = NumberofitemsInCart.stepUp();
    var numberInCart4 = NumberofCartitems.value;

    UnitPriceRow4 = 35;
    QuantityRow4++;
    TotalCostRow4 = UnitPriceRow4 * QuantityRow4;
    localStorage.setItem("TotalCostRow4", TotalCostRow4);
    localStorage.setItem("moviesInCart", Movies[3].title);

    var Movietable = document.getElementById("Table");
    var TableRow = Movietable.insertRow(0);
    var Moviecell1 = TableRow.insertCell(0);
    var Moviecell2 = TableRow.insertCell(1);
    var Moviecell3 = TableRow.insertCell(2);
    var Moviecell4 = TableRow.insertCell(3);
    Moviecell1.innerHTML = '<i class="fa fa-close" style="color:white;background-color: red;box-sizing: 15px;" id="Rowdelete"></i>' + "The Lorax";
    Moviecell2.innerHTML = UnitPriceRow4;
    Moviecell3.innerHTML = '<i class="glyphicon glyphicon-circle-arrow-left" style="color:lightblue;" id="leftarrow" ></i>' + QuantityRow4 + '<i class="glyphicon glyphicon-circle-arrow-right"  style="color:lightblue;" id="rightarrow" ></i>';
    Moviecell4.innerHTML = TotalCostRow4;

}


var totalNumberofItemsInCart = numberInCart1 + numberInCart2 + numberInCart3 + numberInCart4;
localStorage.setItem("totalNumerofItemsInCart", totalNumberofItemsInCart);
document.getElementById("NumberofitemsInCart").innerHTML = localStorage.getItem("totalNumerofItemsInCart");


var Total = TotalCostRow1 + TotalCostRow2 + TotalCostRow3 + TotalCostRow4;
document.getElementById("totalprice").innerHTML = Total;

document.getElementById("Rowdelete").onclick = function () { MinusQuantity() };

function DeleteRow() {
    document.getElementById("CloseRow").deleteRow(0);
    if (Moviecell1 == "Despicable Me") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - QuantityRow1;
        document.getElementById("totalprice").innerHTML = Total - TotalCostRow1;
    }
    else if (Moviecell1 == "Madagascar:Escape 2 Africa") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - QuantityRow2;
        document.getElementById("totalprice").innerHTML = Total - TotalCostRow2;
    }
    else if (Moviecell1 == "Cloudy with a chance of meatballs2") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - QuantityRow3;
        document.getElementById("totalprice").innerHTML = Total - TotalCostRow3;
    }
    else {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - QuantityRow4;
        document.getElementById("totalprice").innerHTML = Total - TotalCostRow4;
    }

}


if (NumberofitemsInCart = 0) {
    document.getElementById("CartMessage").innerHTML = "No movies in your cart.";

}
else {
    document.getElementById("CartMessage").innerHTML = " ";
}

document.getElementById("leftarrow").onclick = function () { MinusQuantity() };
document.getElementById("rightarrow").onclick = function () { MinusQuantity() };



function MinusQuantity() {
    if (Moviecell1 == "Despicable Me") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - 1;
        Moviecell3.innerHTML = QuantityRow1 - 1;
        Moviecell4.innerHTML = TotalCostRow1 - 35;
        document.getElementById("totalprice").innerHTML = Total - 35;

    }
    else if (Moviecell1 == "Madagascar:Escape 2 Africa") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - 1;
        Moviecell3.innerHTML = QuantityRow2 - 1;
        Moviecell4.innerHTML = TotalCostRow2 - 30;
        document.getElementById("totalprice").innerHTML = Total - 30;
    }
    else if (Moviecell1 == "Cloudy with a chance of meatballs2") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - 1;
        Moviecell3.innerHTML = QuantityRow3 - 1;
        Moviecell4.innerHTML = TotalCostRow3 - 40;
        document.getElementById("totalprice").innerHTML = Total - 40;
    }
    else {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart - 1;
        Moviecell3.innerHTML = QuantityRow4 - 1;
        Moviecell4.innerHTML = TotalCostRow4 - 35;
        document.getElementById("totalprice").innerHTML = Total - 35;
    }
}

function SubtractQuantity() {
    if (Moviecell1 == "Despicable Me") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart + 1;
        Moviecell3.innerHTML = QuantityRow1 + 1;
        Moviecell4.innerHTML = TotalCostRow1 + 35;
        document.getElementById("totalprice").innerHTML = Total + 35;

    }
    else if (Moviecell1 == "Madagascar:Escape 2 Africa") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart + 1;
        Moviecell3.innerHTML = QuantityRow2 + 1;
        Moviecell4.innerHTML = TotalCostRow2 + 30;
        document.getElementById("totalprice").innerHTML = Total + 30;
    }
    else if (Moviecell1 == "Cloudy with a chance of meatballs2") {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart + 1;
        Moviecell3.innerHTML = QuantityRow3 + 1;
        Moviecell4.innerHTML = TotalCostRow3 + 40;
        document.getElementById("totalprice").innerHTML = Total + 40;
    }
    else {
        document.getElementById("NumberofItemsInCart").innerHTML = NumberofitemsInCart + 1;
        Moviecell3.innerHTML = QuantityRow4 + 1;
        Moviecell4.innerHTML = TotalCostRow4 + 35;
        document.getElementById("totalprice").innerHTML = Total + 35;
    }
}