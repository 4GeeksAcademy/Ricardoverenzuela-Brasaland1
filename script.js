// --- DICCIONARIO DE TRADUCCIONES BILINGÜE ---
let idiomaActual = 'es';

const traducciones = {
  es: {
    "nav-inicio": "Inicio",
    "nav-experiencia": "Experiencia",
    "nav-menu": "Menú",
    "nav-calculadora": "Calculadora",
    "nav-club": "Club",
    "btn-club-header": "Únete al Club",
    "banner-promo": "📢 ¡Haz tu pedido directo al carrito y retíralo caliente en tu sede más cercana!",
    "hero-tag": "Parrilla & Fuego Directo",
    "hero-title-1": "El sabor de la brasa,",
    "hero-title-2": "en cada bocado",
    "hero-desc": "Cortes seleccionados, sazón artesanal y el fuego perfecto.",
    "hero-btn": "Ver Menú & Pedir 🥩",
    "exp-tag": "Nuestra Pasión",
    "exp-title": "La Experiencia Brasaland",
    "exp-desc": "No solo cocinamos carne; domamos el fuego. Cada uno de nuestros cortes madurados es preparado con carbón de leña natural para garantizar un sellado crujiente por fuera y una jugosidad incomparable por dentro.",
    "exp-card1-t": "Maduración 21 Días",
    "exp-card1-d": "Máxima suavidad y sabor",
    "exp-card2-t": "Leña 100% Natural",
    "exp-card2-d": "Aroma ahumado único",
    "menu-tag": "Parrilla Interactiva",
    "menu-title": "Especialidades de la Casa",
    "filter-todos": "Todos",
    "filter-cortes": "🔥 Cortes",
    "filter-entradas": "🧀 Entradas",
    "filter-bebidas": "🍹 Bebidas",
    "filter-postres": "🍰 Postres",
    "calc-tag": "Herramienta Interactiva",
    "calc-title": "Calculadora de Parrillada 🔥",
    "calc-desc": "¿Planeas un evento o pedido grupal? Ajusta la cantidad de invitados para calcular las porciones ideales.",
    "calc-label": "Número de Personas:",
    "calc-person": "Persona",
    "calc-meat": "Carne Estimada",
    "calc-starters": "Entradas Sugeridas",
    "calc-drinks": "Bebidas Recomendadas",
    "calc-btn": "✉️ Enviar este presupuesto a mi correo / WhatsApp",
    "club-tag": "Comunidad Exclusiva",
    "club-title": "Únete al Club Brasaland 👑",
    "club-desc": "Obtén un 15% de descuento en tu primera compra, acceso a promociones secretas y acumula Brasa Points en cada pedido.",
    "club-ph": "Ingresa tu correo electrónico",
    "club-btn": "Unirme al Club 🔥",
    "cart-title": "Tu Pedido",
    "cart-delivery-type": "Tipo de Entrega:",
    "cart-subtotal": "Subtotal",
    "cart-delivery-cost": "Costo de Delivery",
    "cart-total": "Total a Pagar",
    "cart-confirm": "Confirmar Pedido 🔥",
    "cart-vacío": "Tu carrito está vacío 🥩",
    "budget-title": "Recibir Presupuesto",
    "budget-desc": "Te enviaremos los detalles calculados para tu evento.",
    "label-email": "Correo Electrónico *",
    "label-whatsapp": "WhatsApp / Teléfono *",
    "budget-btn-send": "Enviar Presupuesto 📩",
    "budget-success-t": "¡Presupuesto Enviado!",
    "budget-success-d": "Revisa tu bandeja de correo o WhatsApp en los próximos minutos.",
    "btn-close": "Cerrar",
    "checkout-title": "Finalizar Pedido",
    "checkout-desc": "Ingresa tus datos de entrega y método de pago preferido.",
    "checkout-fname": "Nombre *",
    "checkout-lname": "Apellido *",
    "checkout-phone": "Teléfono Móvil *",
    "checkout-country": "País de Ubicación *",
    "checkout-address": "Dirección Exacta (Calle / Ave / Número de Casa) *",
    "checkout-apt": "Apto / Piso / Unidad (Opcional)",
    "checkout-city": "Ciudad / Estado *",
    "checkout-payment": "Método de Pago *",
    "checkout-btn-submit": "Confirmar y Procesar Orden 🔥",
    "order-success-title": "Pedido Finalizado",
    "btn-understood": "Entendido",
    "delivery-msg": "Nos pondremos en contacto contigo para coordinar el delivery.",
    "pickup-msg": "Nos pondremos en contacto contigo para coordinar el retiro."
  },
  en: {
    "nav-inicio": "Home",
    "nav-experiencia": "Experience",
    "nav-menu": "Menu",
    "nav-calculadora": "Calculator",
    "nav-club": "Club",
    "btn-club-header": "Join the Club",
    "banner-promo": "📢 Order directly from your cart and pick it up hot at your nearest location!",
    "hero-tag": "Grill & Direct Fire",
    "hero-title-1": "The real barbecue taste,",
    "hero-title-2": "in every single bite",
    "hero-desc": "Selected meat cuts, artisanal seasoning, and perfect fire.",
    "hero-btn": "View Menu & Order 🥩",
    "exp-tag": "Our Passion",
    "exp-title": "The Brasaland Experience",
    "exp-desc": "We don't just cook meat; we tame the fire. Each aged cut is prepared with natural firewood to guarantee a crispy sear outside and unmatched juicy texture inside.",
    "exp-card1-t": "21-Day Dry Aging",
    "exp-card1-d": "Maximum tenderness & flavor",
    "exp-card2-t": "100% Natural Firewood",
    "exp-card2-d": "Unique smoky flavor",
    "menu-tag": "Interactive Grill",
    "menu-title": "House Specialties",
    "filter-todos": "All",
    "filter-cortes": "🔥 Meat Cuts",
    "filter-entradas": "🧀 Starters",
    "filter-bebidas": "🍹 Drinks",
    "filter-postres": "🍰 Desserts",
    "calc-tag": "Interactive Tool",
    "calc-title": "BBQ Calculator 🔥",
    "calc-desc": "Planning an event or group order? Adjust guest count to calculate ideal portions.",
    "calc-label": "Number of Guests:",
    "calc-person": "Person",
    "calc-meat": "Estimated Meat",
    "calc-starters": "Suggested Starters",
    "calc-drinks": "Recommended Drinks",
    "calc-btn": "✉️ Send this budget to my Email / WhatsApp",
    "club-tag": "Exclusive Community",
    "club-title": "Join the Brasaland Club 👑",
    "club-desc": "Get 15% off your first order, access secret deals, and earn Brasa Points with every purchase.",
    "club-ph": "Enter your email address",
    "club-btn": "Join the Club 🔥",
    "cart-title": "Your Order",
    "cart-delivery-type": "Delivery Option:",
    "cart-subtotal": "Subtotal",
    "cart-delivery-cost": "Delivery Fee",
    "cart-total": "Total Amount",
    "cart-confirm": "Confirm Order 🔥",
    "cart-vacío": "Your cart is empty 🥩",
    "budget-title": "Get Quote",
    "budget-desc": "We will send you calculated details for your event.",
    "label-email": "Email Address *",
    "label-whatsapp": "WhatsApp / Phone *",
    "budget-btn-send": "Send Quote 📩",
    "budget-success-t": "Quote Sent!",
    "budget-success-d": "Check your email inbox or WhatsApp in a few minutes.",
    "btn-close": "Close",
    "checkout-title": "Complete Order",
    "checkout-desc": "Enter your shipping details and preferred payment method.",
    "checkout-fname": "First Name *",
    "checkout-lname": "Last Name *",
    "checkout-phone": "Mobile Phone *",
    "checkout-country": "Location Country *",
    "checkout-address": "Street Address (Street / Ave / House Number) *",
    "checkout-apt": "Apt / Suite / Unit (Optional)",
    "checkout-city": "City / State *",
    "checkout-payment": "Payment Method *",
    "checkout-btn-submit": "Confirm and Process Order 🔥",
    "order-success-title": "Order Placed",
    "btn-understood": "Got it",
    "delivery-msg": "We will contact you to coordinate delivery.",
    "pickup-msg": "We will contact you to coordinate pick-up."
  }
};

// Base de datos del menú con soporte bilingüe
const productos = [
  { id: 1, nombre: { es: "Tomahawk Prime 1kg", en: "Tomahawk Prime 1kg" }, categoria: "cortes", esComida: true, precio: 45, img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=600", desc: { es: "Corte grueso con hueso largo, sazonado a la leña.", en: "Thick cut with long bone, seasoned over firewood." } },
  { id: 2, nombre: { es: "Picaña Importada 500g", en: "Imported Picanha 500g" }, categoria: "cortes", esComida: true, precio: 28, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600", desc: { es: "Capa perfecta de grasa, jugosa y con sal gruesa.", en: "Perfect fat cap, juicy and seasoned with coarse salt." } },
  { id: 3, nombre: { es: "Ribeye A5 400g", en: "Ribeye A5 400g" }, categoria: "cortes", esComida: true, precio: 38, img: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&q=80&w=600", desc: { es: "Marmoleo supremo asado a fuego alto en parrilla.", en: "Supreme marbling grilled over high heat." } },
  { id: 4, nombre: { es: "Shawarma Mixto", en: "Mixed Shawarma" }, categoria: "entradas", esComida: true, precio: 12, img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600", desc: { es: "Tiras de carne y pollo a la brasa envueltas en pan árabe.", en: "Grilled beef and chicken strips wrapped in pita bread." } },
  { id: 5, nombre: { es: "Pizza Parrillera", en: "Grilled Pizza" }, categoria: "entradas", esComida: true, precio: 14, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600", desc: { es: "Masa crujiente a la leña con carne asada y queso.", en: "Crispy wood-fired dough topped with grilled meat and cheese." } },
  { id: 6, nombre: { es: "Sangría de la Casa 1L", en: "House Sangria 1L" }, categoria: "bebidas", esComida: false, precio: 16, img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600", desc: { es: "Macerada con frutas de estación y vino tinto.", en: "Macerated with seasonal fruits and red wine." } },
  { id: 7, nombre: { es: "Limonada de Menta & Jengibre", en: "Mint & Ginger Lemonade" }, categoria: "bebidas", esComida: false, precio: 5, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600", desc: { es: "Refrescante, hecha al momento con hielo frappé.", en: "Refreshing, freshly made with crushed ice." } },
  { id: 8, nombre: { es: "Volcán de Chocolate", en: "Molten Chocolate Cake" }, categoria: "postres", esComida: true, precio: 8, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600", desc: { es: "Centro fluido de chocolate amargo con helado.", en: "Molten dark chocolate center served with ice cream." } }
];

let carrito = [];
let tipoEntrega = 'delivery'; 
const COSTO_DELIVERY = 3;

// Métodos de pago por país
const metodosPago = {
  USA: [
    { id: 'zelle', nombre: '💳 Zelle' },
    { id: 'card_usa', nombre: '💳 Credit / Debit Card (USD)' },
    { id: 'apple_pay', nombre: '📱 Apple Pay / Google Pay' },
    { id: 'cash_usa', nombre: '💵 Cash on Delivery (USD)' }
  ],
  COL: [
    { id: 'nequi', nombre: '📱 Nequi / Daviplata' },
    { id: 'pse', nombre: '🏦 PSE / Bank Transfer' },
    { id: 'card_col', nombre: '💳 Tarjeta de Crédito / Débito (COP)' },
    { id: 'cash_col', nombre: '💵 Efectivo contra entrega (COP)' }
  ]
};

// --- CAMBIO DE IDIOMA ---
function cambiarIdioma(lang) {
  idiomaActual = lang;
  
  // Cambiar textos estáticos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (traducciones[lang][key]) {
      el.innerText = traducciones[lang][key];
    }
  });

  // Cambiar placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (traducciones[lang][key]) {
      el.setAttribute('placeholder', traducciones[lang][key]);
    }
  });

  // Actualizar contenido dinámico
  renderizarMenu();
  actualizarCarrito();
  calculateBarbecue();
}

// --- 1. RENDERIZAR MENÚ ---
function renderizarMenu(categoriaFiltro = 'todos') {
  const grid = document.getElementById('grid-menu');
  if (!grid) return;

  let filtrados = categoriaFiltro === 'todos' 
    ? productos.filter(p => p.esComida) 
    : productos.filter(p => p.categoria === categoriaFiltro);

  grid.innerHTML = filtrados.map(prod => `
    <div class="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition flex flex-col justify-between">
      <img src="${prod.img}" alt="${prod.nombre[idiomaActual]}" class="w-full h-48 object-cover">
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-white text-lg">${prod.nombre[idiomaActual]}</h3>
            <span class="text-amber-500 font-black">$${prod.precio}</span>
          </div>
          <p class="text-zinc-400 text-xs mb-4">${prod.desc[idiomaActual]}</p>
        </div>
        <button onclick="agregarAlCarrito(${prod.id})" class="w-full bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-white font-bold py-2.5 rounded-xl text-xs transition">
          ${idiomaActual === 'es' ? '+ Agregar al Carrito' : '+ Add to Cart'}
        </button>
      </div>
    </div>
  `).join('');
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-filtro')) {
    document.querySelectorAll('.btn-filtro').forEach(btn => {
      btn.classList.remove('bg-gradient-to-r', 'from-orange-600', 'to-red-600', 'text-white');
      btn.classList.add('bg-zinc-900', 'text-zinc-400');
    });
    e.target.classList.remove('bg-zinc-900', 'text-zinc-400');
    e.target.classList.add('bg-gradient-to-r', 'from-orange-600', 'to-red-600', 'text-white');

    renderizarMenu(e.target.getAttribute('data-categoria'));
  }
});

// --- 2. CARRITO Y ENTREGA ---
function seleccionarTipoEntrega(tipo) {
  tipoEntrega = tipo;
  const btnDelivery = document.getElementById('btn-tipo-delivery');
  const btnPickup = document.getElementById('btn-tipo-pickup');
  const rowDelivery = document.getElementById('row-delivery-cost');

  if (tipo === 'delivery') {
    btnDelivery.className = "border border-amber-500 bg-amber-500/10 text-amber-400 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5";
    btnPickup.className = "border border-zinc-800 bg-zinc-900 text-zinc-400 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5";
    if (rowDelivery) rowDelivery.classList.remove('hidden');
  } else {
    btnPickup.className = "border border-amber-500 bg-amber-500/10 text-amber-400 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5";
    btnDelivery.className = "border border-zinc-800 bg-zinc-900 text-zinc-400 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5";
    if (rowDelivery) rowDelivery.classList.add('hidden');
  }

  actualizarCarrito();
}

function agregarAlCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const existe = carrito.find(item => item.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...prod, cantidad: 1 });
  }

  actualizarCarrito();
  abrirCarrito();
}

function actualizarCarrito() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const subtotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const totalFinal = subtotal + (tipoEntrega === 'delivery' && carrito.length > 0 ? COSTO_DELIVERY : 0);

  if (cartCount) cartCount.innerText = totalUnidades;
  if (cartSubtotal) cartSubtotal.innerText = `$${subtotal}`;
  if (cartTotal) cartTotal.innerText = `$${totalFinal}`;

  if (cartItems) {
    if (carrito.length === 0) {
      cartItems.innerHTML = `<p class="text-zinc-500 text-center text-sm py-10">${traducciones[idiomaActual]["cart-vacío"]}</p>`;
    } else {
      cartItems.innerHTML = carrito.map(item => `
        <div class="flex items-center justify-between bg-zinc-900 p-3 rounded-xl border border-zinc-800">
          <div>
            <h4 class="text-sm font-bold text-white">${item.nombre[idiomaActual]}</h4>
            <p class="text-xs text-amber-500 font-bold">$${item.precio} x ${item.cantidad}</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="cambiarCantidad(${item.id}, -1)" class="w-6 h-6 bg-zinc-800 text-white rounded font-bold text-xs">-</button>
            <span class="text-xs text-white">${item.cantidad}</span>
            <button onclick="cambiarCantidad(${item.id}, 1)" class="w-6 h-6 bg-zinc-800 text-white rounded font-bold text-xs">+</button>
          </div>
        </div>
      `).join('');
    }
  }
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
      carrito = carrito.filter(p => p.id !== id);
    }
  }
  actualizarCarrito();
}

function abrirCarrito() {
  document.getElementById('cart-drawer')?.classList.remove('translate-x-full');
  document.getElementById('cart-overlay')?.classList.remove('hidden');
}

function cerrarCarrito() {
  document.getElementById('cart-drawer')?.classList.add('translate-x-full');
  document.getElementById('cart-overlay')?.classList.add('hidden');
}

// --- 3. CALCULADORA INTERACTIVA ---
function updateGuests(val) {
  const slider = document.getElementById('guest-slider');
  if (!slider) return;

  let newValue = parseInt(slider.value) + val;
  if (newValue >= 1 && newValue <= 50) {
    slider.value = newValue;
    calculateBarbecue();
  }
}

function calculateBarbecue() {
  const slider = document.getElementById('guest-slider');
  if (!slider) return;

  const count = parseInt(slider.value);
  document.getElementById('guest-count').innerText = count;
  document.getElementById('res-meat').innerText = `${(count * 0.35).toFixed(2)} kg`;
  document.getElementById('res-starters').innerText = `${count} ${idiomaActual === 'es' ? 'porción' : 'portion'}${count > 1 ? (idiomaActual === 'es' ? 'es' : 's') : ''}`;
  document.getElementById('res-drinks').innerText = `${count} ${idiomaActual === 'es' ? 'unidad' : 'unit'}${count > 1 ? (idiomaActual === 'es' ? 'es' : 's') : ''}`;
}

// --- 4. MODAL PRESUPUESTO ---
function abrirModalPresupuesto() {
  const modal = document.getElementById('modal-presupuesto');
  if (modal) {
    document.getElementById('form-presupuesto')?.classList.remove('hidden');
    document.getElementById('modal-presupuesto-success')?.classList.add('hidden');
    modal.classList.remove('hidden');
  }
}

function cerrarModalPresupuesto() {
  document.getElementById('modal-presupuesto')?.classList.add('hidden');
}

// --- 5. MANEJO PAÍS Y MÉTODOS DE PAGO ---
function cambiarPais(paisCode) {
  const selectPago = document.getElementById('lead-pago');
  if (!selectPago) return;

  const opciones = metodosPago[paisCode] || metodosPago.USA;
  selectPago.innerHTML = opciones.map(m => `<option value="${m.id}">${m.nombre}</option>`).join('');
}

// --- 6. MODAL CHECKOUT COMPLETO ---
function solicitarDatosCheckout() {
  cerrarCarrito();
  const modal = document.getElementById('modal-lead');
  const wrapperForm = document.getElementById('wrapper-form-checkout');
  const modalSuccess = document.getElementById('modal-success');
  const secDireccion = document.getElementById('seccion-direccion');
  const inputCalle = document.getElementById('lead-calle');
  const inputCiudad = document.getElementById('lead-ciudad-estado');

  if (secDireccion && inputCalle && inputCiudad) {
    if (tipoEntrega === 'pickup') {
      secDireccion.classList.add('opacity-50');
      inputCalle.removeAttribute('required');
      inputCiudad.removeAttribute('required');
    } else {
      secDireccion.classList.remove('opacity-50');
      inputCalle.setAttribute('required', 'true');
      inputCiudad.setAttribute('required', 'true');
    }
  }

  cambiarPais(document.getElementById('lead-pais')?.value || 'USA');

  if (modal) {
    if (wrapperForm) wrapperForm.classList.remove('hidden');
    if (modalSuccess) modalSuccess.classList.add('hidden');
    modal.classList.remove('hidden');
  }
}

function cerrarModalLead() {
  document.getElementById('modal-lead')?.classList.add('hidden');
}

// --- SUBMITS DE FORMULARIOS ---
document.addEventListener('submit', (e) => {
  if (e.target && e.target.id === 'form-captura-lead') {
    e.preventDefault();
    
    // Cambiar mensaje dinámicamente según tipo de entrega e idioma
    const msgTexto = document.getElementById('msg-success-texto');
    if (msgTexto) {
      msgTexto.innerText = tipoEntrega === 'pickup' 
        ? traducciones[idiomaActual]["pickup-msg"] 
        : traducciones[idiomaActual]["delivery-msg"];
    }

    // Vaciar el carrito y reiniciar los totales a cero
    carrito = [];
    actualizarCarrito();

    document.getElementById('wrapper-form-checkout')?.classList.add('hidden');
    document.getElementById('modal-success')?.classList.remove('hidden');
  }

  if (e.target && e.target.id === 'form-presupuesto') {
    e.preventDefault();
    document.getElementById('form-presupuesto')?.classList.add('hidden');
    document.getElementById('modal-presupuesto-success')?.classList.remove('hidden');
  }
});

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
  renderizarMenu('todos');
  actualizarCarrito();
  calculateBarbecue();
});
