// KÜTÜPHANE SİSTEMİ (TypeScript)
//
// Bu egzersiz TypeScript'ın iki temel özelliğini öğretmek için
// tasarlandı:
//
// 1) Union type (birleşim tipi):
// Bir değişkenin birden fazla tipten biri olabileceğini "|" işareti
// ile belirtiriz. Örneğin:
//     type Id = number | string;
//
// 2) Type narrowing (tip daraltma):
// Union bir tipe sahip değerin, çalışma esnasında hangi tipte olduğunu
// anlamak için if/switch ile objenin ortak bir alanını kontrol ederiz.
// TypeScript kontrol sonucunda tipi otomatik olarak daraltır ve o tipe
// özel alanlara erişmemize izin verir. Buna "discriminated union"
// (ayırt edici birleşim) denir.
//
// Aşağıda bir kütüphanenin envanterinde bulunabilecek 3 çeşit eser
// vardır. Hepsinde "tur", "id", "isim" ve "odunc_durumu" alanları
// ortak, geri kalan alanlar ise esere özel. "tur" alanı ayırt edici
// (discriminant) alandır:

export interface Kitap {
    tur: "kitap";
    id: number;
    isim: string;
    odunc_durumu: boolean;
    sayfa_sayisi: number;
    yazar: string;
}

export interface Dergi {
    tur: "dergi";
    id: number;
    isim: string;
    odunc_durumu: boolean;
    sayi: number;
}

export interface Dvd {
    tur: "dvd";
    id: number;
    isim: string;
    odunc_durumu: boolean;
    sure: number;
}

// Eser tipi bir union typedır: Kitap, Dergi veya Dvd olabilir.
export type Eser = Kitap | Dergi | Dvd;

// Fonksiyonların döndürdüğü sonuçlar da union typedır. Başarıda ve
// hatada farklı şekiller döner; ayırt etmek için "durum" alanını
// kontrol ederek narrowing yapılır:

export interface OduncBasarili {
    durum: "OK";
    id: number;
    isim: string;
    ozet: string;
}

export interface ZatenOduncte {
    durum: "ZATEN_ODUNCTE";
    isim: string;
}

export interface EserBulunamadi {
    durum: "ESER_BULUNAMADI";
}

export type OduncSonucu = OduncBasarili | ZatenOduncte | EserBulunamadi;

// Bu fonksiyon bir eser (kitap, dergi veya dvd) alıyor ve eserin
// tipine göre farklı bir özet metni döndürüyor:
//   - Kitap için: "<isim>, <yazar> (<sayfa_sayisi> sayfa)"
//   - Dergi için: "<isim> (<sayi>. sayı)"
//   - DVD   için: "<isim> (<sure> dakika)"
// eser parametresinin "tur" alanını kontrol ederek type narrowing yap.
// TypeScript her case içinde "eser" değişkeninin tipini otomatik
// daralttığı için örn. "kitap" case'inde eser.yazar'a hatasız
// erişebileceksin.
export function eser_ozeti(eser: Eser): string {

}

// Bu fonksiyon verilen id'li eseri ödünç alıyor:
//   - Eser bulunamazsa:  { durum: "ESER_BULUNAMADI" }
//   - Eser zaten ödünçteyse: { durum: "ZATEN_ODUNCTE", isim }
//   - Başarılıysa eserin odunc_durumu true olur ve şu döner:
//     { durum: "OK", id, isim, ozet }
// (ozet alanı için yukarıdaki eser_ozeti fonksiyonunu kullan)
export function odunc_al(envanter: Eser[], id: number): OduncSonucu {

}
