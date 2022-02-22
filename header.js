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
header.innerHTML = str;