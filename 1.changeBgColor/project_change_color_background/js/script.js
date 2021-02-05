function changeBgColor()
{
    var body = document.querySelector("body");
    var weight = Math.random();
    var r=Math.random()*255;
        g=Math.random()*255;
        b=Math.random()*255;
    body.style.backgroundColor = "rgba("+r.toFixed(0)+","+g.toFixed(0)+","+b.toFixed(0)+","+weight.toFixed(2)+")";
    document.getElementById("displayRgb").innerHTML = "<br>" + "Displaying bgColor: " + "rgba ( "+r.toFixed(0)+" , "+g.toFixed(0)+" , "+b.toFixed(0)+" , "+weight.toFixed(2)+" )";
}