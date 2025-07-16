// cart.js
let cart = JSON.parse(localStorage.getItem("lab-cart")) || [];

// تحديث عدد العناصر في العربة في أي صفحة
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// إضافة عنصر
function addToCart(item) {
  if (cart.find(i => i.id === item.id)) {
    showToast("العنصر موجود بالفعل في العربة");
    return;
  }
  cart.push(item);
  localStorage.setItem("lab-cart", JSON.stringify(cart));
  updateCartCount();
  showToast("تمت إضافة العنصر إلى العربة ✅");
}

// إزالة عنصر
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("lab-cart", JSON.stringify(cart));
  updateCartCount();
}

// استرجاع كل العناصر
function getCartItems() {
  return JSON.parse(localStorage.getItem("lab-cart")) || [];
}

// عرض إشعار
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// عند تحميل الصفحة
window.addEventListener("load", updateCartCount);
