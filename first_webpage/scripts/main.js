var i = 1;
document.querySelector('img').onclick = function()
{
    
    var name = "image/wolf"
    var type = ".jpg"

    document.querySelector('img').setAttribute('src', name + i.toString() + type);
    if (i < 4 )
    {
        i = i + 1;
    }
    else
    {
        alert('木有啦~~~~~~~')
        i = 4;
         
    }
       
}