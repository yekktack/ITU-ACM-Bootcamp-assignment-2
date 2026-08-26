// UYARI: Bu dosyayı değiştirme! Sadece promise.js dosyasına yaz

const menu = [
    {id: 0, isim: "Pizza", fiyat: 100},
    {id: 1, isim: "Cheese Burger", fiyat: 90},
    {id: 2, isim: "Patates Kızartması", fiyat: 40},
    {id: 3, isim: "Patates Kızartması", fiyat: 40},
    {id: 4, isim: "Kola", fiyat: 20},
];

const hesaplar = [
    {id: 0, isim: "Mustafa", bakiye: 200},
    {id: 1, isim: "Kerem", bakiye: 500},
    {id: 2, isim: "Melis", bakiye: 400},
    {id: 3, isim: "Selin", bakiye: 1000},
];

const FAILURE_CHANCE = 0.1;
const WAITING_TIME = 50;

export function getMenu() {
    let delay = Math.floor(Math.random()*WAITING_TIME+(WAITING_TIME/2));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < FAILURE_CHANCE)
                reject("Error");
            else
                resolve(menu);
        }, delay)
    });
}

export function getAccounts() {
    let delay = Math.floor(Math.random()*WAITING_TIME+(WAITING_TIME/2));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < FAILURE_CHANCE)
                reject("Error");
            else
                resolve(hesaplar);
        }, delay)
    });
}

export function changeBalance(account_id, new_balance) {
    let delay = Math.floor(Math.random()*WAITING_TIME+(WAITING_TIME/2));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < FAILURE_CHANCE) {
                reject("Error");
            } else {
                let hesap = hesaplar.find(e => e.id == account_id);
                hesap.bakiye = new_balance;
                resolve(hesap);
            }
        }, delay)
    });
}
