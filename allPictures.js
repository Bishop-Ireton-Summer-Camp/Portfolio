var folder = "images/";
folder = "./images/";
    var ajax=new XMLHttpRequest()
 
    ajax.open("GET",folder,true)
    ajax.onload=function () {
        var elements=(new DOMParser()).parseFromString(ajax.responseText,"text/html").getElementsByTagname("A")
        for(x of elements){
            if(request.status[0]==2 && x.href.match(/\.(jpe?g|png|gif)$/)) { 
                let img=document.createElement("IMG")
                img.src=folder+x.href
                document.body.appendChild(img);
            } 
        };
    }
    ajax.send()
    