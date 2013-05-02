// Ok First add a blank layout
var e = document.createElement("div");
e.setAttribute("style", 'position:fixed;background: #fff;background: rgba(255,255,255,0.8); z-index: 10000000;top:0;left:0;right:0;bottom:0;');
e.setAttribute("id", "beli_imgs");

document.body.appendChild(e);

document.onclick = function(event) {
  var el = event.target;
  if (el.id == "beli_imgs") {
    el.remove();
  }
};

var html = "<div style='padding:10px;width:700px;margin:0 auto;background:#efefef;'><h1 style='font-size: 20px;'>Import 24s46</h1><p>Cliquez sur l'image que vous souhaitez publier</p><p>Sont sélectionnées les images d'au moins 214 pixels de large et 100 pixels de haut.</p>";
html += "<div align='center' style=''>";

video = '';
// Vimeo
if(document.location.href.match(/vimeo.com\/(\d+)/)) {
  var id = document.location.href.match(/vimeo.com\/(\d+)/)[1];
  video = '<iframe src="http://player.vimeo.com/video/'+id+'"
width="300" height="150" frameborder="0" webkitAllowFullScreen
mozallowfullscreen allowFullScreen></iframe> <p><a href="http://www.24s46.com/import_video?engine=vimeo&id='+id+'&url='+encodeURIComponent(document.location.href)+'"  target="beli">Importer</a></p>';
  html += video;
}
// Youtube
if(document.location.href.match(/www.youtube.com\/watch\?v=([\d\w]+)/)) {
  var id = document.location.href.match(/www.youtube.com\/watch\?v=([\d\w]+)/)[1];
  video = '<iframe width="300" height="150"
src="http://www.youtube.com/embed/'+id+'" frameborder="0"
allowfullscreen></iframe> <p><a href="http://www.24s46.com/import_video?engine=youtube&id='+id+'&url='+encodeURIComponent(document.location.href)+'"  target="beli">Importer</a></p>';
  html += video;
}
// DailyMotion
if(document.location.href.match(/\/\/www.dailymotion.com\/video\/([\d\w]+)_/)) {
  var id = document.location.href.match(/\/\/www.dailymotion.com\/video\/([\d\w]+)_/)[1];
  video = '<iframe frameborder="0" width="480" height="270"
src="http://www.dailymotion.com/embed/video/'+id+'"></iframe> <p><a
href="http://www.24s46.com/import_video?engine=dailymotion&id='+id+'&url='+encodeURIComponent(document.location.href)+'"  target="beli">Importer</a></p>';
  html += video;
}

if(video == "") {
  var imgs = document.getElementsByTagName("img");
  var list = [];
  var max = 10;
  var y = 0;
  for (var i = 0; i < imgs.length; ++i) {
    var item = imgs[i];
    var src = item.getAttribute("src");
    var text = item.getAttribute("title");
    if(text == null) text = "";
    text = text.replace(/\//g,"-").replace(/\./g, " ");
    if(src && src[0] == "/" && src[1] == "/") src = document.location.protocol + src;
    if(src && src.indexOf("http") == -1) src = document.location.origin +"/"+ src;
    if(src && src.indexOf("data:image") == -1) {
      if(item.width >= 214 && item.height >= 100 && y < max) {
        html += "<div style='float:left; margin: 10px;width:150px;
height: 90px; overflow: hidden;'><a href='http://www.24s46.com/import/"+encodeURIComponent(src)+"/"+encodeURIComponent(document.location.href)+"/"+encodeURIComponent(text)+"' alt='"+text.replace(/'/g, "\\'")+"' title='"+text.replace(/'/g, "\\'")+"' target='beli'><img src='" + src + "' width='150' style='box-shadow: 0 0 10px #000;border-radius: 4px;'></a></div>";
        y++;
      }
    }
    
  }
  
}
html += "<div style='clear:both'></div></div>";

document.getElementById("beli_imgs").innerHTML = html;
