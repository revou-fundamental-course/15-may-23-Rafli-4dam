//Fungsi hitung luas
function hitungLuas() {
    
    //Input Sisi Persegi
    var sisiLuas = document.getElementById("sisi-luas").value;
    
    //Reveal perhitungan setelah sisi persegi diinput
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

//Fungsi Reset Luas Persegi
function resetLuas() {
    //Input luas empty space
    document.getElementById("sisi-luas").value = "";

    //Menyembunyikan tampilan proses perhitungan
    document.getElementById("perhitungan-luas").innerText = "";
    document.getElementById("perhitungan-luas-2").innerText = "";

    var resultLuas = document.getElementsByClassName("result-luas");
    for (var i=0;i<resultLuas.length;i+=1){
        resultLuas[i].style.display = 'none';
    }
}

//Fungsi hitung keliling persegi
function hitungKeliling() {
    //Input Sisi Persegi
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    
    //Reveal perhitungan setelah sisi persegi diinput
    var resultKeliling = document.getElementsByClassName("result-keliling");
    for (var i=0;i<resultKeliling.length;i+=1){
        resultKeliling[i].style.display = 'block';
    }

    //Memasukkan bilangan sisi persegi yang di input untuk ditampilkan
    document.getElementById("perhitungan-keliling").innerText = sisiKeliling;

    //Menghitung keliling persegi
    let y = document.getElementById("sisi-keliling").value;
    let z = 4 * y;
    document.getElementById("output-keliling").innerHTML = z;
}

//Fungsi Reset Keliling Persegi
function resetKeliling() {
    //Input luas empty space
    document.getElementById("sisi-keliling").value = "";

    //Menyembunyikan tampilan proses perhitungan
    document.getElementById("perhitungan-keliling").innerText = "";

    var resultKeliling = document.getElementsByClassName("result-keliling");
    for (var i=0;i<resultKeliling.length;i+=1){
        resultKeliling[i].style.display = 'none';
    }

}