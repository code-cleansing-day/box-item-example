// 제품마다 개수와 가격이 다르다.
class 제품 {
  개수: number;
  가격: number;

  constructor(개수: number, 가격 = 0) {
    this.개수 = 개수;
    this.가격 = 가격;
  }

  get 총가격() {
    return this.개수 * this.가격;
  }
}

class 망치 extends 제품 {
  override 가격 = 10000;
}

class 휴대폰 extends 제품 {
  override 가격 = 1000000;
}

class 헤드폰 extends 제품 {
  override 가격 = 400000;
}

class 충전기 extends 제품 {
  override 가격 = 25000;
}

class 영수증 extends 제품 {
  override 가격 = 200;
}

// 상자에는 여러 개의 제품들과 여러 개의 작은 상자들을 가질 수 있다.
class 상자 {
  제품들: 제품[] = [];
  상자들: 상자[] = [];
  상자가격: number = 100;

  constructor(제품들: 제품[] = [], 상자들: 상자[] = []) {
    if (제품들) this.제품들 = 제품들;
    if (상자들) this.상자들 = 상자들;
  }

  get 총가격() {
    let 제품들총가격 = 0;
    this.제품들.forEach((제품) => (제품들총가격 += 제품.총가격));

    let 상자들총가격 = 0;
    this.상자들.forEach((상자) => (상자들총가격 += 상자.총가격));

    return 제품들총가격 + 상자들총가격 + this.상자가격;
  }
}

class 주문 {
  주문목록: 상자;
  영수증 = 200;

  constructor(주문목록: 상자) {
    this.주문목록 = 주문목록;
  }

  총가격출력() {
    return `${(this.주문목록.총가격 + this.영수증).toLocaleString()}원`;
  }
}

// ex

// A상자는 충전기 1개와 망치 2개를 담고있다.
const A상자 = new 상자([new 충전기(1), new 망치(2)]);

// B상자는 해드폰 3개와 A상자 2개를 담고있다.
const B상자 = new 상자([new 헤드폰(3)], [A상자, A상자]);

// C상자는 휴대폰 2개와 B상자를 담고있다.
const C상자 = new 상자([new 휴대폰(2)], [B상자]);

// C상자 주문하기
const 주문서 = new 주문(C상자);

console.log(주문서.총가격출력);
