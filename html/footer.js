function addFooter() {
    var footerDiv = document.createElement('div');
    footerDiv.innerHTML = '<p align="center" style="margin-top: 20px; padding: 10px; border-top: 1px solid #ccc;">Contents Copyright (c) 1999, INITECH Corp</p>';
    document.body.appendChild(footerDiv);
}

if (document.all) {
    window.attachEvent('onload', addFooter);
} else {
    window.onload = addFooter;
}