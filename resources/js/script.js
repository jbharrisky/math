
const images = [
  "https://i.postimg.cc/BnFqjktx/horse1.jpg",
  "https://i.postimg.cc/rpLqxjt7/horse2.jpg",
  "https://i.postimg.cc/hGbcrmLv/horse3.jpg",
  "https://i.postimg.cc/76HDQL9V/horse4.jpg"
  ];


function createTable()
{
rn = window.prompt("How many Horses do you think we should start with? ", 1);
cn = window.prompt("Now, how many Horses should we multiply those by?",1);

var random = Math.floor(Math.random() * images.length);
let selectedImage = images[random];
// document.getElementById('test').innerHTML = `${selectedImage}`;

 for(var r = 0; r < parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c = 0;c < parseInt(cn,10);c++)
    {
     var y =  x.insertCell(c);
     // y.innerHTML="Row-"+ r +" Column-" + c;
     y.innerHTML = '<img src="'+selectedImage+'"/>'
    }
   }
}
