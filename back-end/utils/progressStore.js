// utils/progressStore.js
const store = new Map();

function initProgress(id) {
  store.set(id, { percent: 0, message: 'بدء', done: false, updatedAt: Date.now() });
}

function updateProgress(id, percent, message) {
  if (!id) return;
  const prev = store.get(id) || { percent: 0, message: '', done: false };
  store.set(id, {
    ...prev,
    percent: Math.max(0, Math.min(100, Number(percent) || 0)),
    message: message || prev.message,
    updatedAt: Date.now(),
  });
}

function finishProgress(id) {
  if (!id) return;
  const prev = store.get(id);
  if (!prev) return;
  store.set(id, { ...prev, done: true, percent: 100, updatedAt: Date.now() });

  // نحيدوه بعد 60 ثانية باش ما تعمرش الذاكرة
  setTimeout(() => store.delete(id), 60_000);
}

function getProgress(id) {
  return store.get(id) || { percent: 0, message: 'في الانتظار', done: false };
}

module.exports = { initProgress, updateProgress, finishProgress, getProgress };
