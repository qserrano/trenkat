// Funcionalidad del menú hamburguesa para móviles
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNavigation = document.querySelector('.header-navigation');
    
    if (mobileMenuToggle && headerNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle de la clase active en el botón
            mobileMenuToggle.classList.toggle('active');
            
            // Toggle de la clase active en la navegación
            headerNavigation.classList.toggle('active');
        });
        
        // Cerrar el menú al hacer clic en un enlace
        const navLinks = headerNavigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                headerNavigation.classList.remove('active');
            });
        });
        
        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && 
                !headerNavigation.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                headerNavigation.classList.remove('active');
            }
        });
        
        // Cerrar el menú al redimensionar la ventana (si se vuelve a desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('active');
                headerNavigation.classList.remove('active');
            }
        });
    }
});
