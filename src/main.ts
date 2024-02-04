import "./style.css";
import { OrderSystem } from "./종원/OrderSystem";
import { Box, Product } from "./종원/Pricing";

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

const showTotalPrice = (totalPrice: string) => {
  const rootDOM = document.getElementById("app");
  const expectPriceDOM = document.createElement("h1");
  const totalPriceDOM = document.createElement("h1");

  expectPriceDOM.innerHTML = `예상 금액: ${(
    10000 +
    1000000 +
    400000 +
    25000 +
    200 +
    5 * 100
  ) // 상자 추가 비용: 100
    .toLocaleString()}원`;
  totalPriceDOM.classList.add("total-price");
  totalPriceDOM.innerHTML = `총 금액: ${totalPrice}`;

  rootDOM?.appendChild(expectPriceDOM);
  rootDOM?.appendChild(totalPriceDOM);
};

showTotalPrice(order.getTotalPriceInKorLocale());
