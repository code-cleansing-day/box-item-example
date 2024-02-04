import { Pricing } from "./Pricing";

/**
 * 서비스의 개념으로 UI화면과 조금 더 가까운 내용으로 구현
 * */
export class OrderSystem {
  constructor(private children: Pricing[]) {
    this.children = children;
  }

  getTotalPriceInKorLocale(): string {
    return `${this.children
      .reduce((acc, child) => acc + child.getPrice(), 0)
      .toLocaleString()}원`;
  }
}
