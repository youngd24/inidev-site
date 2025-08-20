function addFooter() {
    var footerDiv = document.createElement('div');
    footerDiv.innerHTML = '<br><br><br><p align="center" style="margin-top: 20px; padding: 10px; border-top: 1px solid #ccc;">Contents Copyright (c) 1999-2099, INITECH Corp<br><br><i>Site Created using ChatGPT, Cursor and Claude Code on a Commodore 64</i></p>';
    document.body.appendChild(footerDiv);
}

if (document.all) {
    window.attachEvent('onload', addFooter);
} else {
    window.onload = addFooter;
}
