
var label=document.createElement("data1");
label.setAttribute("for","coun");
label.style.fontFamily ="Arial"
label.innerHTML="Enter the keyword";

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","coun");

var button=document.createElement("button");
button.innerHTML="Click Me"; 
button.addEventListener("click",hack);

document.body.append(label,br,input,button);

async function hack(){
    try{
var Key=document.getElementById("coun").value;
if(Key === 'name' || Key ==='type' )
{
    let prom1=await fetch("https://api.openbrewerydb.org/breweries");
    let prom2=await prom1.json();
    console.log(prom2);
    for(var i=0;i<prom2.length;i++){
    var ele=document.createElement("div");
    ele.style.color="green";
    ele.style.backgroundColor="black"
    ele.style.fontSize="12px";
    ele.style.fontFamily="Times New Roman";
    ele.innerHTML=`Name :${prom2[i].name}  Type:${prom2[i].brewery_type}`;
    document.body.append(ele);
    }
        }
        else if(Key==='address')
        {
    let prom1=await fetch("https://api.openbrewerydb.org/breweries");
    let prom2=await prom1.json();
    for(var i=0;i<prom2.length;i++){
    var ele=document.createElement("div");
    ele.style.color="green";
    ele.style.backgroundColor="black"
    ele.style.fontSize="12px";
    ele.style.fontFamily="Times New Roman";
    ele.innerHTML=`Address 1 :${prom2[i].address_2} Address 2:${prom2[i].address_3} website url:${prom2[i].website_url}`;
    document.body.append(ele);
    }
        }
         else if(Key === 'phone')
         {
            let prom1=await fetch("https://api.openbrewerydb.org/breweries");
            let prom2=await prom1.json();
            for(var i=0;i<prom2.length;i++){
            var ele=document.createElement("div");
            ele.style.color="green";
            ele.style.backgroundColor="black"
            ele.style.fontSize="12px";
            ele.style.fontFamily="Times New Roman";
            ele.innerHTML=`phone :${prom2[i].phone}`;
            document.body.append(ele);
            }
                    
         }
         else{
             console.log("Enter a valid keyword");
         }
}

    catch(error)
    {
console.log(error);
    }
}
