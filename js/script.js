//Fungsi hitung luas
function hitungLuas() {
    
    //Input Sisi Persegi
    var sisiLuas = document.getElementById("sisi-luas").value;
    
    //Reveal perhitungan seteleh sisi persegi diinput
    var resultLuas = document.getElementsByClassName("result-luas");
    for (var i=0;i<resultLuas.length;i+=1){
        resultLuas[i].style.display = 'block';
    }
    //Memasukkan bilangan sisi persegi yang di input untuk ditampilkan
    document.getElementById("perhitungan-luas").innerText = sisiLuas;
    document.getElementById("perhitungan-luas-2").innerText = sisiLuas;
    
    //Menghitung luas persegi
    let x = document.getElementById("sisi-luas").value;
    let y = document.getElementById("sisi-luas").value;
    let z = x * y;
    document.getElementById("output-luas").innerHTML = z;

    }

    //Perintah Reset Luas Persegi
    function resetLuas() {
    document.getElementById("perhitungan-luas").innerText = "";
    document.getElementById("perhitungan-luas-2").innerText = "";
    
    var resultLuas = document.getElementsByClassName("result-luas");
    for (var i=0;i<resultLuas.length;i+=1){
        resultLuas[i].style.display = 'none';
    }
}