function ptbac2(){
    let a =parseInt(document.getElementById("a").value) ;
    let b =parseInt(document.getElementById("b").value) ;
    let c =parseInt(document.getElementById("c").value) ;

    if( a == 0 ){
        if( b == 0){
            document.getElementById('result').innerHTML= 'Phuong trinh vo nghiem';
        }else {
            let result = -c / b;
            document.getElementById('result').innerHTML = result;
        }

    }else {
        let delta = Math.pow(b,2) - 4*a*c;
        if( delta < 0 ){
            document.getElementById('result').innerHTML='Phuong trinh vo nghiem';
        }else if ( delta == 0 ){
            let result = -b / 2*a;
            document.getElementById('result').innerHTML='Phuong trinh nghiem kep' + result;
        }else{
            let result = (-b + Math.sqrt(delta))/2*a ;
            let result1 = (-b - Math.sqrt(delta ))/2*a;
            document.getElementById('result').innerHTML ="Phuong trinh co 2 nghiem phan biet" + result +'va' +result1 ;
        }
    }

}
