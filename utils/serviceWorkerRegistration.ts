// Registrar el service worker. Importa y llama a registerServiceWorker() desde tu entry (main.ts / index.tsx).
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    // Solo registrar en producción (opcional):
    // if (process.env.NODE_ENV !== 'production') return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registrado con scope:', registration.scope);

          // Manejar actualizaciones: notificar cuando hay un nuevo SW esperando
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (!newWorker) return;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Nuevo contenido disponible, puedes notificar a usuario para recargar
                console.log('Nuovo contenuto disponibile; pide al usuario recargar.');
                // Qui potresti mostrare una notifica all'utente
              }
            });
          });
        })
        .catch(err => {
          console.error('Registro SW falló:', err);
        });
    });
  } else {
    console.log('Service Worker no soportado en este navegador.');
  }
}

// Función auxiliar para forzar activación del nuevo SW desde la app
export async function skipWaitingForNewSW() {
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration || !registration.waiting) return false;
  registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  return true;
}
