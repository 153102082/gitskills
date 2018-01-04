


//扇形
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
    this.save();
    this.translate(x, y);
    this.beginPath();
    this.arc(0,0,radius,sDeg, eDeg);
    this.save();
    this.rotate(eDeg);
    this.moveTo(radius,0);
    this.lineTo(0,0);
    this.restore();
    this.rotate(sDeg);
    this.lineTo(radius,0);
    this.closePath();
    this.restore();
    return this;
}
$(function(){
    var canvas = $("canvas");
    var ctx = canvas.get(0).getContext("2d");
    w=canvas.get(0).width;
    h=canvas.get(0).height;
    var deg = Math.PI/180;
    var i=0;
    function rot() {
        ctx.fillStyle="#88f";
        ctx.sector(w/2,h/2,h/2,0*deg+i,45*deg+i).fill();
        ctx.fillStyle="#7ff";
        ctx.sector(w/2,h/2,h/2,45*deg+i,90*deg+i).fill();
        ctx.fillStyle="#0f0";
        ctx.sector(w/2,h/2,h/2,90*deg+i,135*deg+i).fill();
        ctx.fillStyle="#00f";
        ctx.sector(w/2,h/2,h/2,135*deg+i,180*deg+i).fill();
        ctx.fillStyle="#789";
        ctx.sector(w/2,h/2,h/2,225*deg+i,270*deg+i).fill();
        ctx.fillStyle="#abcdef";
        ctx.sector(w/2,h/2,h/2,270*deg+i,315*deg+i).fill();
        ctx.fillStyle="#f80";
        ctx.sector(w/2,h/2,h/2,315*deg+i,360*deg+i).fill();


    }
setInterval(function(){
    i+=0.2;
    if(i>100){
        i=0;
    }
    ctx.clearRect(0,0,w,h);
    rot();

},50);

});
