import { object_check } from "../test_common.js";

import { takeOrder } from "./promise.js";

async function take_order_with_retry(account_id, item_id) {
    let answer;

    for (let i = 0; i < 20; i++) {
        answer = await takeOrder(account_id, item_id);

        if (answer.status !== "RETRY") {
            return answer;
        }

        if (typeof(answer.error_message) !== "string") {
            return answer;
        }
    }

    return answer;
}

export default async function test5() {
    let test_cases = [
        {
            account_id: 0,
            item_id: 0,
            correct_answer: {
                status: "OK",
                account_id: 0,
                item_id: 0,
                bakiye_degisimi: -100,
                urun_adi: "Pizza",
            },
        },
        {
            account_id: 1,
            item_id: 1,
            correct_answer: {
                status: "OK",
                account_id: 1,
                item_id: 1,
                bakiye_degisimi: -90,
                urun_adi: "Cheese Burger",
            },
        },
        {
            account_id: 2,
            item_id: 2,
            correct_answer: {
                status: "OK",
                account_id: 2,
                item_id: 2,
                bakiye_degisimi: -40,
                urun_adi: "Patates Kızartması",
            },
        },
        {
            account_id: 3,
            item_id: 4,
            correct_answer: {
                status: "OK",
                account_id: 3,
                item_id: 4,
                bakiye_degisimi: -20,
                urun_adi: "Kola",
            },
        },
        {
            account_id: 0,
            item_id: 0,
            correct_answer: {
                status: "OK",
                account_id: 0,
                item_id: 0,
                bakiye_degisimi: -100,
                urun_adi: "Pizza",
            },
        },
        {
            account_id: 0,
            item_id: 4,
            correct_answer: {
                status: "ERROR",
                error_message: "Yetersiz bakiye",
            },
        },
    ];

    for (let test_case of test_cases) {
        let answer = await take_order_with_retry(
            test_case.account_id,
            test_case.item_id,
        );

        if (!object_check(test_case.correct_answer, answer)) {
            console.error("Trial Error");
            console.error("Account ID:", test_case.account_id);
            console.error("Item ID:", test_case.item_id);
            console.error("Correct Answer:", test_case.correct_answer);
            console.error("Your Answer:", answer);
            return false;
        }
    }

    return true;
}
