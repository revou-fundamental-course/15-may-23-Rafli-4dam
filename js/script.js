//Fungsi hitung luas
function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
   
    var resultLuas = document.getElementsByClassName("result-luas");
    if (sisiLuas.value === "") {
        for (var i=0;i<resultLuas.length;i+=1){
            resultLuas[i].style.display = 'none';
        }
    }
    for (var i=0;i<resultLuas.length;i+=1){
        resultLuas[i].style.display = 'block';
    }
    

    document.getElementById("perhitungan-luas").innerText = sisiLuas;
    document.getElementById("perhitungan-luas-2").innerText = sisiLuas;
    
    let x = document.getElementById("sisi-luas").value;
    let y = document.getElementById("sisi-luas").value;
    let z = x * y;
    document.getElementById("output-luas").innerHTML = z;

    }

//Fungsi Reset Luas Persegi
function resetLuas() {
    document.getElementById("sisi-luas").value = "";

    document.getElementById("perhitungan-luas").innerText = "";
    document.getElementById("perhitungan-luas-2").innerText = "";

    var resultLuas = document.getElementsByClassName("result-luas");
    for (var i=0;i<resultLuas.length;i+=1){
        resultLuas[i].style.display = 'none';
    }
}

//Fungsi hitung keliling persegi
function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    
    var resultKeliling = document.getElementsByClassName("result-keliling");
    for (var i=0;i<resultKeliling.length;i+=1){
        resultKeliling[i].style.display = 'block';
    }

    document.getElementById("perhitungan-keliling").innerText = sisiKeliling;

    let y = document.getElementById("sisi-keliling").value;
    let z = 4 * y;
    document.getElementById("output-keliling").innerHTML = z;
}

//Fungsi Reset Keliling Persegi
function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";

    document.getElementById("perhitungan-keliling").innerText = "";

    var resultKeliling = document.getElementsByClassName("result-keliling");
    for (var i=0;i<resultKeliling.length;i+=1){
        resultKeliling[i].style.display = 'none';
    }
}

//Input number validation
document.getElementById("sisi-luas").addEventListener('input', validationLuas);
function validationLuas() {
    let e = this.value
    let chars = /^[0-9]+$/

    if(chars.test(e)){
    } else{
        alert("Input hanya dibatasi angka")
    }
}