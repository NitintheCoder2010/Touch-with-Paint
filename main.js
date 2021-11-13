canvas=document.getElementById("MYCANVAS");
ctx= canvas.getContext("2d");

var mouseEvent = "empty";
var lastposition_x,lastposition_y;


color = "white";
width_line= 3;

//ctx.beginPath();
//ctx.lineWidth = 3;
//ctx.strokeStyle = color;
//ctx.arc(400,400,40,0,2*Math.PI);
//ctx.stroke();

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){

    //mouse_x = e.clientX - canvas.offsetLeft;
    //mouse_y = e.clientY - canvas.offsetTop;

    //circle(mouse_x,mouse_y);

    lastposition_x = e.clientX - canvas.offsetLeft;
    lastposition_y= e.clientY - canvas.offsetTop;
    color = document.getElementById("pencolor").value;
    width_line = document.getElementById("penWidth").value;
    mouseEvent = "mouse_down";

}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e){

       mouseEvent = "mouse_up";

}

canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){

       mouseEvent = "mouse_leave";

}



canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e){

       currentposition_x = e.clientX - canvas.offsetLeft;
       currentposition_y= e.clientY - canvas.offsetTop;


        if (mouseEvent == "mouse_down"){
            ctx.beginPath();
            ctx.lineWidth = width_line;
            ctx.strokeStyle = color;
            ctx.moveTo(lastposition_x,lastposition_y);
            ctx.lineTo( currentposition_x,currentposition_y);
            ctx.stroke();
        }
        lastposition_x = currentposition_x;
        lastposition_y = currentposition_y;
}

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

      