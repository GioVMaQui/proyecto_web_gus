// Inicializar carrito
let cart = [];

// Función para agregar productos al carrito
function addToCart(id, name, price) {
    // Verificar si el producto ya está en el carrito
    const productIndex = cart.findIndex(product => product.id === id);
    
    if (productIndex > -1) {
        // Si el producto ya está, incrementar cantidad
        cart[productIndex].quantity++;
    } else {
        // Si no está, agregarlo al carrito
        cart.push({ id, name, price, quantity: 1 });
    }
    
    updateCart();
}

// Función para actualizar el carrito en la interfaz
function updateCart() {
    // Actualizar el número de productos en el carrito
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
    
    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cargar carrito desde almacenamiento local
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Llamar a loadCart cuando se cargue la página
window.onload = loadCart;
