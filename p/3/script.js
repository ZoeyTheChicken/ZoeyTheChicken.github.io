function closePopup(shouldProceed) {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    if (shouldProceed) {
        window.location.href = 'updating.html';
    } else {
        window.location.href = 'updating.html';
    }
}
