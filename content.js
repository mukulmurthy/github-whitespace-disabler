function ensureWhitespaceParam() {
    var url = new URL(window.location.href);
    var path = url.pathname;

    if ((path.endsWith('/files') || path.endsWith('/changes')) && !url.searchParams.has('w')) {
        url.searchParams.set('w', 1);
        window.location.replace(url.href);
    }
}

ensureWhitespaceParam();

var lastUrl = window.location.href;
new MutationObserver(function() {
    if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        ensureWhitespaceParam();
    }
}).observe(document, { subtree: true, childList: true });
