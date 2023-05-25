function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    // console.log(sisiLuas);
    
    var resultLuas = document.getElementsByClassName("result-luas");
    for (var i=0;i<resultLuas.length;i+=1){
        resultLuas[i].style.display = 'block';
    }
    document.getElementById("perhitungan-luas").innerText = sisiLuas;
    document.getElementById("perhitungan-luas-2").innerText = sisiLuas;
    // console.log(perhitunganLuas);
    // for (var i=0;i<perhitunganLuas.length;i+=1){
        //     perhitunganLuas[i].innerText = sisiLuas;
        // }
    }
    function resetLuas() {
    document.getElementById("perhitungan-luas").innerText = "";
    document.getElementById("perhitungan-luas-2").innerText = "";
    
    var resultLuas = document.getElementsByClassName("result-luas");
    for (var i=0;i<resultLuas.length;i+=1){
        resultLuas[i].style.display = 'none';
    }
}