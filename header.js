let header = document.getElementById('header');
let str = '';

str = `
    <div class="header_main">
        <a href="https://24h.pchome.com.tw/">
            <div class="header1"></div>
        </a>
        <a href="https://24h.pchome.com.tw/">
            <div class="header2"></div>
        </a>
        <div class="text_main">
            <a href="https://ecvip.pchome.com.tw/web/pages/24hHelp.htm" target="_blank">
                <span class="head_text1"></span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.PChome.Shopping" target="_blank">
                <span class="head_text2"></span>
            </a>
            <span class="head_text3"></span>
        </div>
        <div class="img_main">
            <a href="https://www.facebook.com/pchome24h/" target="_blank">
                <div class="img1"></div>
            </a>
            <a href="https://www.instagram.com/pchome24h/" target="_blank">
                <div class="img2"></div>
            </a>
            <a href="https://www.youtube.com/channel/UCb2aGEzl5Ki5juwPolnC-PA" target="_blank">
                <div class="img3"></div>
            </a>
            <a href="https://page.line.me/pchome24h?openQrModal=true" target="_blank">
                <div class="img4"></div>
            </a>
        </div>
    </div>
    <div class="header_mb">
        <a href="https://24h.pchome.com.tw/">
            <div class="header_mb_img"></div>
        </a>
    </div>

`
// header.innerHTML = str;

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