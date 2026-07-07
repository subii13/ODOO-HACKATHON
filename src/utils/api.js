// Minimal data layer backed by localStorage, so you have working CRUD
// on day one even before a real backend exists. Swap the internals for
// real fetch() calls to your backend later — the function signatures
// (getAll, getById, create, update, remove) can stay the same, so
// components using this file won't need to change.

const STORE_KEY = 'hackathon_data';

function readStore() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

function writeStore(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

export function getAll(collection) {
  const store = readStore();
  return store[collection] || [];
}

export function getById(collection, id) {
  return getAll(collection).find((item) => item.id === id);
}

export function create(collection, item) {
  const store = readStore();
  const list = store[collection] || [];
  const newItem = { ...item, id: crypto.randomUUID(), createdAt: Date.now() };
  store[collection] = [...list, newItem];
  writeStore(store);
  return newItem;
}

export function update(collection, id, updates) {
  const store = readStore();
  const list = store[collection] || [];
  store[collection] = list.map((item) =>
    item.id === id ? { ...item, ...updates } : item
  );
  writeStore(store);
  return getById(collection, id);
}

export function remove(collection, id) {
  const store = readStore();
  const list = store[collection] || [];
  store[collection] = list.filter((item) => item.id !== id);
  writeStore(store);
}

// -----------------------------------------------------------------
// REAL BACKEND EXAMPLE — uncomment and adapt once you have an API:
//
// const BASE_URL = 'http://localhost:5000/api';
//
// export async function getAll(collection) {
//   const res = await fetch(`${BASE_URL}/${collection}`);
//   if (!res.ok) throw new Error('Failed to fetch');
//   return res.json();
// }
//
// export async function create(collection, item) {
//   const res = await fetch(`${BASE_URL}/${collection}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(item),
//   });
//   if (!res.ok) throw new Error('Failed to create');
//   return res.json();
// }
// -----------------------------------------------------------------
