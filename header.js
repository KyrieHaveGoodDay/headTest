let header = document.getElementById('header');
let str = '';

str = `
<div class="header_main">
<div class="header_left">
    <a href="https://24h.pchome.com.tw/" target="_black"> <img class="header1" src="https://kyriehavegoodday.github.io/headTest/img/header_01.png" alt=""> </a>
    <a href="https://ecvip.pchome.com.tw/web/pages/24hHelp.htm" target="_black"> <img class="header2" src="https://kyriehavegoodday.github.io/headTest/img/header_02.png" alt=""> </a>
</div>
<div class="header_text">
    <a href="https://ecvip.pchome.com.tw/web/pages/24hHelp.htm" target="_black"><span>例外及說明</span></a>
    <a href="https://play.google.com/store/apps/details?id=com.PChome.Shopping" target="_black">
        <span class="download">
            APP下載
            <img class="QRCode" src="https://kyriehavegoodday.github.io/headTest/img/QRCode.png" alt="">
        </span>
    </a>
    <span style="color: #3f3f3f;">追蹤我們</span>
</div>
<div class="header_img">
    <a href="https://www.facebook.com/pchome24h/" target="_blank">
        <img src="https://kyriehavegoodday.github.io/headTest/img/fb_new.svg" alt="">
    </a>
    <a href="https://www.instagram.com/pchome24h/" target="_blank">
        <img src="https://kyriehavegoodday.github.io/headTest/img/ig_new.svg" alt="">
    </a>
    <a href="https://www.youtube.com/channel/UCb2aGEzl5Ki5juwPolnC-PA" target="_blank">
        <img src="https://kyriehavegoodday.github.io/headTest/img/youtube_new.svg" alt="">
    </a>
    <a href="https://page.line.me/pchome24h?openQrModal=true" target="_blank">
        <img src="https://kyriehavegoodday.github.io/headTest/img/line_new.svg" alt="">
    </a>
</div>
</div>
<div class="header_mb">
<a href="https://24h.pchome.com.tw/" target="_black">
    <img src="https://kyriehavegoodday.github.io/headTest/img/24HLOGO.png" alt="">
</a>
</div>
`
header.innerHTML = str;

let component_footer = document.getElementById('component_footer');
let component_str = '';
component_str = `
    <div class="ft_top">
    <div class="ft_top_left"> 謹慎理財&emsp;信用至上</div>
    <div class="ft_top_right">
        <p>本網頁所列各項行銷活動均由各發卡銀行及服務廠商提供，</p>
        <p>活動即時登錄情形及是否取得最終回饋資格逕洽各活動發卡銀行及服務廠商。</p>
    </div>
    </div>
    <div class="ft_btn">
    <div class="ft_btn_box">
        <p>追蹤我們</p>
        <div class="follow">
            <a href="https://www.facebook.com/pchome24h/" target="_blank"><img src="https://kyriehavegoodday.github.io/headTest/img/fb_new.svg" alt=""></a>
            <a href="https://www.instagram.com/pchome24h/" target="_blank"><img src="https://kyriehavegoodday.github.io/headTest/img/ig_new.svg" alt=""></a>
            <a href="https://www.youtube.com/channel/UCb2aGEzl5Ki5juwPolnC-PA" target="_blank"><img src="https://kyriehavegoodday.github.io/headTest/img/youtube_new.svg" alt=""></a>
            <a href="https://page.line.me/pchome24h?openQrModal=true" target="_blank"><img src="https://kyriehavegoodday.github.io/headTest/img/line_new.svg" alt=""></a>
            
        </div>
    </div>
    <p>本活動頁商品、商品規格、顏色、價位、贈品如與銷售網頁不符，以銷售網頁標示為準！</p>
    <p><p>網路家庭版權所有Copyright PChome Online版權所有，轉載必究</p></p>
    </div>
`

component_footer.innerHTML = component_str;