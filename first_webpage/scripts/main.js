document.querySelector('h2').style.display = "none";
 document.querySelector('textarea').style.display = "none";
var i = 1;
document.querySelector('img').onclick = function()
{
    
    var name = "image/wolf"
    var type = ".jpg"

    document.querySelector('img').setAttribute('src', name + i.toString() + type);
    if (i < 5 )
    {
        i = i + 1;
    }
    else
    {
        alert('木有啦~~~~~~~')

        i = 4;
        document.querySelector('img').style.display = "none";
        document.querySelector('h2').style.display = "inline";
        document.querySelector('textarea').style.display = "inline";
    }
       
}