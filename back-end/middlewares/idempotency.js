// middlewares/idempotency.js
const cache = new Map();

function idempotency(req, res, next) {
  const key = req.headers['idempotency-key'];
  if (!key) return next();

  // إذا سبق نفس الطلب وتخزّن الرد
  if (cache.has(key)) {
    return res.status(200).json(cache.get(key));
  }

  // نخلي controller يخدم
  res.on('finish', () => {
    // controller كيحط النتيجة هنا
    if (res.locals.idempotencyResult) {
      cache.set(key, res.locals.idempotencyResult);

      // نحيدوه بعد 2 دقايق
      setTimeout(() => cache.delete(key), 120_000);
    }
  });

  next();
}

module.exports = idempotency;
