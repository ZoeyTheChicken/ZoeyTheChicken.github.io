function search() {
    var searchInput = document.getElementById('searchInput').value;
    
    // Redirect the current window to the search engine results page
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
}

function openLink(url) {
    // Redirect the current window to the specified URL
    window.location.href = url;
}