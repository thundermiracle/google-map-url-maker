const key = 'google-map-url-maker';

function save(val) {
  sessionStorage.setItem(key, JSON.stringify(val));
}

function load() {
  const savedVal = sessionStorage.getItem(key);
  if (!savedVal) {
    return null;
  }

  return JSON.parse(savedVal);
}

export { save, load };
