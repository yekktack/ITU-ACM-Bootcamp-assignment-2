import { random_string, object_check } from "../test_common.js";

import { eser_ozeti, odunc_al } from "./kutuphane.ts";
import type { Eser, OduncSonucu } from "./kutuphane.ts";

function random_number(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function random_eser(id: number): Eser {
    let turler: Array<Eser["tur"]> = ["kitap", "dergi", "dvd"];
    let tur = turler[random_number(0, 2)];
    let ortak_alanlar = {
        id,
        isim: random_string(random_number(5, 15)),
        odunc_durumu: false,
    };

    switch (tur) {
        case "kitap":
            return {
                tur,
                ...ortak_alanlar,
                sayfa_sayisi: random_number(50, 1000),
                yazar: random_string(random_number(5, 15)),
            };
        case "dergi":
            return {
                tur,
                ...ortak_alanlar,
                sayi: random_number(1, 300),
            };
        case "dvd":
            return {
                tur,
                ...ortak_alanlar,
                sure: random_number(30, 300),
            };
    }
}

export default function fuzz_test6(): boolean {
    let eser_sayisi = random_number(3, 20);
    let envanter: Eser[] = [];

    for (let i = 0; i < eser_sayisi; i++) {
        envanter.push(random_eser(i));
    }

    for (let eser of envanter) {
        let ozet: string = eser_ozeti(eser);
        let dogru_ozet: string;

        switch (eser.tur) {
            case "kitap":
                dogru_ozet = `${eser.isim}, ${eser.yazar} (${eser.sayfa_sayisi} sayfa)`;
                break;
            case "dergi":
                dogru_ozet = `${eser.isim} (${eser.sayi}. sayı)`;
                break;
            case "dvd":
                dogru_ozet = `${eser.isim} (${eser.sure} dakika)`;
                break;
        }

        if (ozet !== dogru_ozet) {
            console.error("Trial Error:");
            console.error("Eser:", eser);
            console.error("Doğru Özet:", dogru_ozet);
            console.error("Your Answer:", ozet);
            return false;
        }

        let sonuc: OduncSonucu = odunc_al(envanter, eser.id);
        let dogru_sonuc: OduncSonucu = {
            durum: "OK",
            id: eser.id,
            isim: eser.isim,
            ozet: dogru_ozet,
        };

        if (!object_check(dogru_sonuc, sonuc)) {
            console.error("Trial Error:");
            console.error("Eser:", eser);
            console.error("Doğru Sonuç:", dogru_sonuc);
            console.error("Your Answer:", sonuc);
            return false;
        }

        sonuc = odunc_al(envanter, eser.id);
        dogru_sonuc = { durum: "ZATEN_ODUNCTE", isim: eser.isim };

        if (!object_check(dogru_sonuc, sonuc)) {
            console.error("Trial Error:");
            console.error("Eser:", eser);
            console.error("Doğru Sonuç:", dogru_sonuc);
            console.error("Your Answer:", sonuc);
            return false;
        }
    }

    let sonuc: OduncSonucu = odunc_al(
        envanter,
        random_number(eser_sayisi, eser_sayisi + 100),
    );

    if (!object_check({ durum: "ESER_BULUNAMADI" }, sonuc)) {
        console.error("Trial Error:");
        console.error("Doğru Sonuç:", { durum: "ESER_BULUNAMADI" });
        console.error("Your Answer:", sonuc);
        return false;
    }

    return true;
}
