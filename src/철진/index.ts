interface Order {
  addItem: (item: Item) => void;
  getKorPrice: () => string;
  getPrice: () => number;
}

class OrderSystem implements Order {
  _items: Item[] = [];

  addItem(item: Item) {
    this._items.push(item);
  }

  getPrice() {
    return this._items.reduce((acc, curr) => acc + curr.getPrice(), 0);
  }

  getKorPrice() {
    return this.getPrice().toLocaleString() + "원";
  }
}

interface Item {
  getPrice: () => number;
}

class Box implements Item {
  _price = 100;
  _items: Item[] = [];

  addItem(item: Item) {
    this._items.push(item);
  }

  getPrice() {
    return (
      this._price + this._items.reduce((acc, curr) => acc + curr.getPrice(), 0)
    );
  }
}

class Hammer implements Item {
  _price = 10000;

  getPrice() {
    return this._price;
  }
}

class CellPhone implements Item {
  _price = 1000000;

  getPrice() {
    return this._price;
  }
}

class Headphone implements Item {
  _price = 400000;

  getPrice() {
    return this._price;
  }
}

class Charger implements Item {
  _price = 25000;

  getPrice() {
    return this._price;
  }
}

class Receipt implements Item {
  _price = 200;

  getPrice() {
    return this._price;
  }
}

const bigBox = new Box(); // 가장 큰 박스

const hammerBox = new Box(); // 망치 넣은 박스
const hammer = new Hammer(); // 망치
hammerBox.addItem(hammer);

const doubleBox = new Box(); // 박스 두개 넣은 박스
const box1 = new Box(); // 두개 짜리 박스에 들어있던 1번 박스
const cellPhone = new CellPhone();
const headphone = new Headphone();
box1.addItem(cellPhone);
box1.addItem(headphone);
const box2 = new Box(); // 두개 짜리 박스에 들어있던 2번 박스
const charger = new Charger();
box2.addItem(charger);
doubleBox.addItem(box1);
doubleBox.addItem(box2);

const receipt = new Receipt(); // 영수증

bigBox.addItem(hammerBox);
bigBox.addItem(doubleBox);
bigBox.addItem(receipt);

const orderService = new OrderSystem();
orderService.addItem(bigBox);
orderService.getKorPrice();
