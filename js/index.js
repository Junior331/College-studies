var imagens = [
    "https://prodimage.images-bn.com/pimages/9781632366993_p0_v1_s550x406.jpg"
 ];
 
 function trocar(){
    var img = document.getElementById("test");
    var img_src = img.src;
    var img_idx = imagens.indexOf(img_src);
    img.src = imagens[ img_idx == imagens.length-1 ? 0 : img_idx+1 ];
 }
