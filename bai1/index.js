function diemtb(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let result = (+a + +b + +c)/3;

    if(result > 8){
        document.getElementById("result").innerHTML = result + 'Ban hoc luc gioi';
    }else if(result > 6.5 && result <= 8){
        document.getElementById("result").innerHTML = result + 'Ban hoc luc kha';
    }else{
        document.getElementById("result").innerHTML = result + 'Ban hoc luc trung binh';
    }
}