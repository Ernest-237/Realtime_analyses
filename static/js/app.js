document.getElementById('analyze-btn').onclick = function () {
    const fileInput = document.getElementById('audio-upload');
    const fileInfo = document.getElementById('file-info');
    const fileName = document.getElementById('file-name');
    const infoBubble = document.getElementById('info-bubble');

    if (!fileInput.files.length) {
        alert('Veuillez d\'abord importer un fichier.');
        return;
    }

    fileInfo.classList.remove('hidden');
    fileName.textContent = `Fichier sélectionné : ${fileInput.files[0].name}`;
    infoBubble.classList.remove('hidden');

    setTimeout(() => {
        infoBubble.classList.add('hidden');
    }, 5000);

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const loader = document.getElementById('loader');
    const results = document.getElementById('results');
    loader.classList.remove('hidden');
    results.classList.add('hidden');

    fetch('/analyze', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        loader.classList.add('hidden');
        const resultElement = document.getElementById('analysis-result');
        resultElement.textContent = data.notes.join(', ');
        results.classList.remove('hidden');
    })
    .catch(error => {
        loader.classList.add('hidden');
        const errorPopup = document.getElementById('error-popup');
        errorPopup.classList.remove('hidden');
    });
};

document.getElementById('close-popup').onclick = function () {
    const errorPopup = document.getElementById('error-popup');
    errorPopup.classList.add('hidden');
};

document.getElementById('realtime-btn').onclick = function () {
    const loader = document.getElementById('loader');
    const results = document.getElementById('results');
    loader.classList.remove('hidden');
    results.classList.add('hidden');

    fetch('/realtime', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        loader.classList.add('hidden');
        const resultElement = document.getElementById('analysis-result');
        resultElement.textContent = data.notes.join(', ');
        results.classList.remove('hidden');
    })
    .catch(error => {
        loader.classList.add('hidden');
        const errorPopup = document.getElementById('error-popup');
        errorPopup.classList.remove('hidden');
    });
};

