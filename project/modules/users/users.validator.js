// Aşama 2 — users modülünün VALIDATOR katmanı.
//
// Yazmanız gerekenler:
//
//   validateAddUser(req, res, next)
//       → username, email ve password zorunlu ve string olmalı
//       → email en azından "@" içermeli
//       → kural ihlalinde 400 ile zinciri kesin, next() çağırmayın
//
// Hatırlatma: "bu e-posta zaten kayıtlı" kontrolü bir doğrulama değil,
// bir iş kuralıdır — ve 400 değil 409 döner. Onu service/controller
// tarafında çözmek daha doğru.
