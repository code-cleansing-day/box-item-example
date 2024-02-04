/**
 * **Box와 Product 클래스는 Pricing 인터페이스를 구현**
 * - 서로 완전히 다른 기능을 하지만, 동일한 인터페이스를 구현하기 때문에 OrderSystem 클래스에서 동일하게 사용 가능
 * - 세부적인 구현은 각 클래스에서 담당, OrderSystem 클래스에서 각 클래스의 구현을 몰라도 사용 가능
 */
export interface Pricing {
  getPrice(): number;
}

export class Box implements Pricing {
  private price: number = 100;

  constructor(private children: Pricing[] = []) {
    this.children = children;
  }

  getPrice(): number {
    return this.children.reduce(
      (acc, child) => acc + child.getPrice(),
      this.price
    );
  }
}

export class Product implements Pricing {
  constructor(private name: string, private price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
}
