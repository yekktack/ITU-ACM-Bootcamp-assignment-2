// Aşama 2 — users modülünün CONTROLLER katmanı.
//
// Yazmanız gerekenler:
//
//   addUserController        → 201 + { id, username, email }   (password YOK)
//                              e-posta zaten kayıtlıysa 409
//   getUsersController       → 200 + kullanıcı listesi          (password YOK)
//   getUserTodosController   → 200 + o kullanıcının todoları
//                              kullanıcı yoksa 404
//
// Aşama 3 notu: getUserTodosController'ın todoları bulabilmesi için
// todos modülünün SERVICE katmanını çağırması gerekir. Derste konuştuğumuz
// altın kural: başka modülün service'ini çağırabilirsin, iç dosyalarına
// (db, controller, validator) dokunamazsın.
