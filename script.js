console.log("page loading....");

var likeCount=[4,12,9];


function like(identificador, posicion){
    var likesBox1= document.querySelector('#' + identificador);
    likeCount[posicion]++;
    likesBox1.innerText= likeCount[posicion] + " like(s)";

}