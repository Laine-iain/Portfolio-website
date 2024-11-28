function loadMenu() {
    fetch('../Menu/menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch menu.html: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            const placeholder = document.getElementById('menu-placeholder');
            if (placeholder) {
                placeholder.innerHTML = html;
            } else {
                console.error('Menu placeholder not found.');
            }
        })
        .catch(error => {
            console.error('Error loading menu:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
});
