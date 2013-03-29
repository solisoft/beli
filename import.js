// Ok First add a blank layout
var e = document.createElement("div");
e.setAttribute("style", 'position:fixed;background: #fff;background: rgba(255,255,255,0.9); z-index: 100000;top:0;left:0;right:0;bottom:0;');
e.setAttribute("id", "beli_imgs");

document.body.appendChild(e);

var html = "<h1 style='text-align:center; color: orange; font-size: 20px;'>Beli Import</h1><div style='position:fixed; right:0; top: 0; padding: 10px;'><a href='javascript:document.getElementById(\"beli_imgs\").remove()'>Cancel</a></div>";
html += "<div align='center' style='position:fixed; top:0; left: 0; right: 0; bottom:0; margin-top: 40px;'>";

video = '';
// Vimeo
if(document.location.href.match(/vimeo.com\/(\d+)/)) {
  var id = document.location.href.match(/vimeo.com\/(\d+)/)[1];
  video = '<iframe src="http://player.vimeo.com/video/'+id+'" width="300" height="150" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p><a href="http://dev.24s46.com/import_video?engine=vimeo&id='+id+'&url='+encodeURIComponent(document.location.href)+'"  target="beli">Importer</a></p>';
  html += video;
}
// Youtube
if(document.location.href.match(/www.youtube.com\/watch\?v=([\d\w]+)/)) {
  var id = document.location.href.match(/www.youtube.com\/watch\?v=([\d\w]+)/)[1];
  video = '<iframe width="300" height="150" src="http://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe> <p><a href="http://dev.24s46.com/import_video?engine=youtube&id='+id+'&url='+encodeURIComponent(document.location.href)+'"  target="beli">Importer</a></p>';
  html += video;
}
// DailyMotion
if(document.location.href.match(/\/\/www.dailymotion.com\/video\/([\d\w]+)_/)) {
  var id = document.location.href.match(/\/\/www.dailymotion.com\/video\/([\d\w]+)_/)[1];
  video = '<iframe frameborder="0" width="480" height="270" src="http://www.dailymotion.com/embed/video/'+id+'"></iframe> <p><a href="http://dev.24s46.com/import_video?engine=dailymotion&id='+id+'&url='+encodeURIComponent(document.location.href)+'"  target="beli">Importer</a></p>';
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
    if(src && src.indexOf("http") == -1) src = document.location.origin +"/"+ src;
    if(item.width > 100 && item.height > 100 && y < max) {
      html += "<div style='display:inline-block; margin: 10px;width:150px; height: 150px; overflow: hidden;'><a
href='http://dev.24s46.com/import/"+encodeURIComponent(src)+"/"+encodeURIComponent(document.location.href)+"/"+encodeURIComponent(text)+"' alt='"+text.replace("'", "\\'")+"' title='"+text.replace("'", "\\'")+"' target='beli'><img src='" + src + "' width='150'></a></div>";
      y++;
    }
  }
  
}
html += "</div>";

document.getElementById("beli_imgs").innerHTML = html;
