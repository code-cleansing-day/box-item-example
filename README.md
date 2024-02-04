# box-item-example

복잡한 트리구조에서 동일한 기능을 하는 객체로 원하는 기능을 동작하게 하는 것에 대해 생각해볼 수 있는 예시 애플리케이션 저장소입니다.

---

## 설치 및 실행

```bash
yarn install
yarn dev

# go to  http://localhost:5173/ or custom localhost port
```

---

쌤들 어제 철진쌤이 준비해주신 예시 문제를 같이 고민해본 시간이 너무 좋았었는데, 저도 하나 재밌어보이는 문제 발견해서 공유드립니다~

> 제품들과 상자들이라는 두 가지 유형의 객체들이 있다고 가정해 봅시다. 상자에는 여러 개의 제품들과 여러 개의 작은 상자들이 포함될 수 있습니다. 이 작은 상자들은 또한 일부 제품들 또는 더 작은 상자들등을 담을 수 있습니다.
> 이러한 클래스들을 사용하는 주문 시스템을 만들기로 했다고 가정해 보겠습니다. 주문들에는 포장이 없는 단순한 제품들과 제품들로 채워진 상자들 및 다른 상자들이 포함될 수 있습니다. 그러면 그러한 주문의 총가격을 어떻게 계산하시겠습니까?

쌤들은 어떻게 구현하는게 좋다고 생각하시나요?

- 망치, 휴대폰, 헤드폰, 충천기, 영수증의 가격은 각각 10000, 1000000, 400000, 25000, 200 원 입니다.
- 상자는 하나에 100원의 비용이 듭니다.
- 주문의 총 가격은 localeString 형식 + 원 으로 표현합니다. ex. 12,400 원

![image](https://github.com/code-cleansing-day/box-item-example/assets/93258739/51ad24c8-f40d-4aae-81ca-2966ca25036b)

---

예제는 [리팩터링 구루](https://refactoring.guru/ko/design-patterns/composite)에서 가져왔습니다!
코드 공유 및 피드백 이후에 읽어보면 좋을 거 같네요 :) 
