
var h = location.pathname;
var elm = document.getElementById('auxhome');

$("ul#topMain a.About").click(function(){
    $("ul#topMain li#auxhome").removeClass("active");
});

$("ul#topMain a.Contact").click(function(){
    $("ul#topMain li#auxhome").removeClass("active");
});

if(h == "/AboutUs"){
    console.log(elm.className);
    if(elm.className == "active"){
        //location.reload();
        $("ul#topMain li#auxhome").removeClass("active");
    }
}
else if(h == "/ContactUs"){
    console.log(elm.className);
    if(elm.className == "active"){
        //location.reload();
        $("ul#topMain li#auxhome").removeClass("active");
    }
}


