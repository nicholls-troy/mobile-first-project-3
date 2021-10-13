/**
 * onresize will have your project resizing live
 * onload is the same, anytime you reload the project
 * innerwidth shows the length of your width as you resize
 */
window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;

    document.getElementById('size').innerHTML = "Width : " + myWidth + " px";
}