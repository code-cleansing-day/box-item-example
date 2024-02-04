import { OrderSystem } from "./OrderSystem";
import { Box, Product } from "./Pricing";

const order = new OrderSystem([
  new Box([
    new Box([new Product("망치", 10000)]),
    new Box([
      new Box([new Product("휴대폰", 1000000), new Product("헤드폰", 400000)]),
      new Box([new Product("충전기", 25000)]),
    ]),
    new Product("영수증", 200),
  ]),
]);

// 상자 추가 비용: 100
console.log(
  `예상 금액: ${(
    10000 +
    1000000 +
    400000 +
    25000 +
    200 +
    5 * 100
  ).toLocaleString()}원`
);
console.log(`실제 금액: ${order.getTotalPriceInKorLocale()}`);
