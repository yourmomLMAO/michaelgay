function submit() {
    const dataURI = canvas.toDataURL("image/jpeg");
    document.getElementById("uri").innerHTML = dataURI;
    document.getElementById("completed").innerHTML = "Your LaTeX conversion is";

    $.ajax({
        type: "POST",
        url: "image_pipline.py",
        data: {param: text, dataURI}
    }).done(function( o ) {

    });
}
function restart() {
    document.getElementById("uri").innerHTML = "";
    document.getElementById("completed").innerHTML = "";
    restartarray();
    redraw();
}