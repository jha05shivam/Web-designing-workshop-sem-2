function calculate()
{
    let m1=Number(document.getElementById("m1").value);
    let m2=Number(document.getElementById("m2").value);
    let m3=Number(document.getElementById("m3").value);

    let total=m1+m2+m3;
    let avg=total/3;
    let grade;

    if(avg>=80)
        grade="A";
    else if(avg>=60)
        grade="B";
    else if(avg>=40)
        grade="C";
    else
        grade="Fail";

    document.getElementById("result").innerHTML=
    "Total = "+total+"<br>Average = "+avg+"<br>Grade = "+grade;
}