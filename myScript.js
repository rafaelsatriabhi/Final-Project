var jawaban = ["SERASI KAYAK TERASI", "Enggak cocok!", "Maap, dia jodohnya orang lain", "Doi lagi sama pacar barunya", 
"Aduh jangan sama dia, dia aneh..", "Kasian gue sama dia, kok dia mau sih sama lu"]

var ngimpi = ["NGIMPII!!", "Yang bener aja"]

var button = document.getElementById("tombol")
var listArtisCewek= ["RAISA", "ANYA GERALDINE", "CHELSEA ISLAN", "CITRA KIRANA", "NATASHA WILONA", "PEVITA PEARCE", "LUNA MAYA", "ARIEL TATUM"]


function myFunction(){
    var inputan = document.getElementById("namaPacar").value
    var isian  = inputan.toUpperCase()
    var artis = false
    var indexArtis = 0
    for(var a = 0 ; a < listArtisCewek.length; a++){
        if(isian == listArtisCewek[a]){
           artis = true
           indexArtis = a
        }
    }if(isian == false){
        document.getElementById("jawabannya").innerText = "Kamu belum tulis nama pacarmu, Gak punya pacar ya?"
    }
    else if(artis){
        var randomNumber2 = Math.floor(Math.random()*ngimpi.length)
        document.getElementById("jawabannya").innerText = ngimpi[randomNumber2]
    }
    else{
        var randomNumber = Math.floor(Math.random()*jawaban.length)
        document.getElementById("jawabannya").innerText = jawaban[randomNumber]
    }
}
