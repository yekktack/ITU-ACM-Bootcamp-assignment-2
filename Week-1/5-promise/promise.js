import {getMenu, getAccounts, changeBalance} from "./magaza.js";

// Yukarıda importlanan fonksiyonların açıklamaları:
//
// getMenu: Parametre almıyor, bir promise döndürüyor. Promise'in resolve olması
// halindeyse promise menu arrayini döndürüyor. Menu arrayinin şeması şu şekilde:
// [ ... {id: 3, isim: "Ürün ismi", fiyat: 100}, ... ]
// - id her ürün için farklı
//
// getAccounts: Parametre almıyor ve bir promise döndürüyor. Promise'in resolve
// olması halinde hesaplar arrayini döndürüyor. Hesaplar arrayi şu şekilde:
// [ ... {id: 2, isim: "Mustafa", bakiye: 1000 }, ... ]
//
// changeBalance: 2 parametre alıyor:
// 1. Hesap id'si
// 2. Yeni bakiye
// bir promise döndürüyor ve bu promise alım başarılı olması halinde bakiyesi
// değiştirilen hesabın objesini döndürüyor.
//
// Not: Yukardaki 3 fonksiyonun da hata verme ihtimalleri var ve hepsi rastgele
// bir gecikmeye sahip.

// Aşağıdaki fonksiyonu tamamla ve gelen siparişleri sisteme işle. 
// Fonksiyon şöyle bir obje döndürmeli:
// { status: "OK", account_id: <number>, item_id: <number>, bakiye_degisimi: <number>, urun_adi: <string>}
// Eğer kullanıcının bakiyesi ürünü almaya yetmiyorsa şöyle bir obje döndürmeli:
// { status: "ERROR", error_message: <string> }
// Eğer kullanılan herhangi bir fonksiyon hata döndürürse şu döndürülmeli:
// { status: "RETRY", error_message: <string> }

export async function takeOrder(account_id, item_id) {

}
