function openLink(url) {
    window.open(url, '_blank');
}

function search() {
    var searchTerm = document.getElementById('searchInput').value;
    console.log('Searching for: ' + searchTerm);
}

var defaultCustomLinks = [
    { id: 1, name: 'GitHub', url: 'https://github.com' },
    { id: 2, name: 'Google', url: 'https://google.com' },
    { id: 3, name: 'Chicken Client', url: 'https://client.chickennetwork.fun' },
    { id: 4, name: 'YouTube', url: 'https://youtube.com' },
    { id: 5, name: 'Twitter', url: 'https://twitter.com' }
];

function getCustomLinks() {
    var savedLinks = JSON.parse(localStorage.getItem('customLinks'));
    return savedLinks || defaultCustomLinks;
}

function saveCustomLinks(links) {
    localStorage.setItem('customLinks', JSON.stringify(links));
}

function createLinkContainer(link, isSponsored = false) {
    var linkContainer = document.createElement('div');
    linkContainer.style.display = 'flex';
    linkContainer.style.justifyContent = 'space-between';
    linkContainer.style.marginBottom = '10px';

    var aTag = document.createElement('a');
    aTag.href = 'javascript:void(0);';
    aTag.textContent = link.name;

    var tagContainer = document.createElement('div');
    tagContainer.style.position = 'relative';

    var tag = document.createElement('span');
    tag.textContent = isSponsored ? 'SPONSORED' : '';
    tag.style.backgroundColor = isSponsored ? 'yellow' : 'transparent';
    tag.style.padding = '4px';
    tag.style.borderRadius = '12px';
    tag.style.color = '#333';
    tag.style.fontFamily = 'sans-serif';
    tagContainer.appendChild(tag);

    aTag.onclick = function () {
        openLink(link.url);
    };

    if (!isSponsored) {
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit Shortcut';
        editButton.onclick = function () {
            editLink(link.id);
        };
        linkContainer.appendChild(editButton);
    }

    linkContainer.appendChild(aTag);
    linkContainer.appendChild(tagContainer);

    return linkContainer;
}

function populateQuickLinks() {
    var quickLinksContainer = document.getElementById('quickLinks');
    quickLinksContainer.innerHTML = '';
    
    var customLinks = getCustomLinks();
    customLinks.forEach(function (link) {
        var linkContainer = createLinkContainer(link);
        quickLinksContainer.appendChild(linkContainer);
    });

    var sponsoredShortcutsContainer = document.createElement('div');
    sponsoredShortcutsContainer.style.marginTop = '20px';

    var sponsoredTitle = document.createElement('h2');
    sponsoredTitle.textContent = 'Sponsored Shortcuts';
    sponsoredShortcutsContainer.appendChild(sponsoredTitle);

    var sponsoredLinks = [
        { name: 'Chicken Network', url: 'https://chickennetwork.fun' },
        { name: 'Chicken Client', url: 'https://client.chickennetwork.fun' },
    ];

    sponsoredLinks.forEach(function (link) {
        var linkContainer = createLinkContainer(link, true);
        sponsoredShortcutsContainer.appendChild(linkContainer);
    });

    quickLinksContainer.appendChild(sponsoredShortcutsContainer);
}

function editLink(linkId) {
    var customLinks = getCustomLinks();
    var link = customLinks.find(function (link) {
        return link.id === linkId;
    });

    if (link) {
        var newName = prompt('Enter the new name for the shortcut:', link.name);
        var newUrl = prompt('Enter the new URL for the shortcut:', link.url);

        if (newName !== null && newUrl !== null) {
            link.name = newName;
            link.url = newUrl;
            saveCustomLinks(customLinks);
            populateQuickLinks();
        }
    }
}

populateQuickLinks();
function createLinkContainer(link, isSponsored = false) {
    var linkContainer = document.createElement('div');
    linkContainer.style.display = 'flex';
    linkContainer.style.justifyContent = 'space-between';
    linkContainer.style.marginBottom = '10px';

    var aTag = document.createElement('a');
    aTag.href = 'javascript:void(0);';
    aTag.textContent = link.name;
    aTag.style.border = '1px solid black'; // Add black border around text

    var tagContainer = document.createElement('div');
    tagContainer.style.position = 'relative';

    var tag = document.createElement('span');
    tag.textContent = isSponsored ? 'SPONSORED' : '';
    tag.style.backgroundColor = isSponsored ? 'yellow' : 'transparent';
    tag.style.padding = '4px';
    tag.style.borderRadius = '12px';
    tag.style.color = '#333';
    tag.style.fontFamily = 'sans-serif';
    tagContainer.appendChild(tag);

    aTag.onclick = function () {
        openLink(link.url);
    };

    if (!isSponsored) {
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit Shortcut';
        editButton.onclick = function () {
            editLink(link.id);
        };
        linkContainer.appendChild(editButton);
    }

    linkContainer.appendChild(aTag);
    linkContainer.appendChild(tagContainer);

    return linkContainer;
}
