function eval()
{
    let p=document.getElementById("num").value
    document.getElementById("resultat").innerHTML=`Your Tax is ` 
    
    if(p<200)
    document.getElementById("resultat").innerHTML+= Math.trunc(p*1.07 -p);

    else if(p<500) 
    document.getElementById("resultat").innerHTML+=Math.trunc(p*1.12 -p)

    else
    document.getElementById("resultat").innerHTML+=Math.trunc(p*1.15 -p)

}

function pair()
{
    var r=document.getElementById("resultat").value 
    if(r%2==0)
    document.getElementById("resultat").innerHTML+=` <br> Tax is pair`;
    else
    document.getElementById("resultat").innerHTML+=`<br> Tax is impair`;


}