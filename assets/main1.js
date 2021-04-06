function getSupportedVideoFormats() {

    // Test from Modernizr.
    var elem = document.createElement('video');
    var bool = false;

    // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
    try {
        if (bool = !!elem.canPlayType) {
            bool = new Boolean(bool);
            bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');

            // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
          
            bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');

            bool.vp9 = elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, '');

            bool.hls = elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, '');
            
            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');

        }
    } catch (e) {}

    return bool;

}

function getVideoFormat(mime) {

    return mime ? 'video/mp4' : 'mp4';
}

function updateProgressBar(value) {
    value = Math.round(value);
    progress.setAttribute('valuenow', value);
    progress.style.width = value + '%';
    progress.innerHTML = value + '%';
}

function updateProgressBarG(value) {
    value = Math.round(value);
    progressg.setAttribute('valuenow', value);
    progressg.style.width = value + '%';
    progressg.innerHTML = value + '%';
}

function loadedgreenimg()
{
        greenimgloaded='yes';
        if(redloaded=='yes' && greenloaded=='yes' && redimgloaded == 'yes' && greenimgloaded == 'yes')
        {
        document.getElementById("instdiv").style.visibility = "visible";
        document.getElementById("loading").style.visibility = "hidden";
        }
    
}

function loadedredimg()
{
        redimgloaded='yes';
        if(redloaded=='yes' && greenloaded=='yes' && redimgloaded == 'yes' && greenimgloaded == 'yes')
        {
        document.getElementById("instdiv").style.visibility = "visible";
        document.getElementById("loading").style.visibility = "hidden";
        }
    
}

redloaded = 'no';
greenloaded = 'no';
redimgloaded = 'no';
greenimgloaded = 'no';


function loadVideoFully(event) {

    GET(url);

    function onProgress(event) {
        if (event.lengthComputable) {
            var completion = (event.loaded / event.total) * 100;
        }
    }

    function onLoad(event) {
        var type = getVideoFormat(true);
        
        var blob = new Blob([event.target.response], {
            type: type
        });
        document.getElementById("video").type = type;
        document.getElementById("video").src = URL.createObjectURL(blob);
        
        redloaded='yes';
        if(redloaded=='yes' && greenloaded=='yes' && redimgloaded == 'yes' && greenimgloaded == 'yes')
        {
        document.getElementById("instdiv").style.visibility = "visible";
        document.getElementById("loading").style.visibility = "hidden";
        }
            
        }

    function GET(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = onProgress;
        xhr.onload = onLoad;
        xhr.send();
    }

}

// Video sample from videojs, without extension.
var url = 'video/redvideo91nov.mp4';
var video = document.getElementById('video');

// Video Green Variables
var urlg = 'video/greenvideo4nov.mp4';
var videog = document.getElementById('video2');



function loadVideoFullyG(event) {

    GET(urlg);

    function onProgress(event) {
        if (event.lengthComputable) {
            var completion = (event.loaded / event.total) * 100;
         }
    }

    function onLoad(event) {
        var type = getVideoFormat(true);
        var blob = new Blob([event.target.response], {
            type: type
        });
        
        console.log(type);
        document.getElementById("video2").type = type;
        document.getElementById("video2").src = URL.createObjectURL(blob);
        
        greenloaded='yes';
        (redloaded=='yes' && greenloaded=='yes' && redimgloaded == 'yes' && greenimgloaded == 'yes')
        {
        document.getElementById("instdiv").style.visibility = "visible";
        document.getElementById("loading").style.visibility = "hidden";
        }
        
    }

    function GET(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = onProgress;
        xhr.onload = onLoad;
        xhr.send();
    }

}





function loadVideo(event) 
{
   loadVideoFully(event);
   loadVideoFullyG(event);
}

//body.addEventListener("load", loadVideo(), false);
//button.addEventListener('click', loadVideo);

console.debug('Video Formats Supported:', getSupportedVideoFormats());