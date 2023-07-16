export function saveToLocalStorage(key, value) {
  const prevData = JSON.parse(localStorage.getItem(key) || {});
  localStorage.setItem(key, JSON.stringify({ ...prevData, ...value }));
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

export function getFromLocalStorage(key) {
  localStorage.getItem(key);
}
