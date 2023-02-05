# JSDoc
타입스크립트 챌린지 사전과제

## 요구사항
아래의 Todo 앱 요구사항을 참고하여
* 필요한 데이터를 모두 모델링한다.
* 사용되는 모든 함수를 선언부만 만든다.
* 함수 및 클래스의 내부는 구현하지 않습니다.
* JSDoc을 활용해 문서화한다.
* GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

```
Modeling (Shape)
Item {
  property(required),
  property(optional),
}
```

## 풀이
### Method - CREATE
* 할 일을 추가할 수 있다.
* 내용없이 추가할 수 없다.
<img width="1075" alt="JSDoc" src="https://user-images.githubusercontent.com/108715216/216810620-b9147ed5-a0b7-4588-b398-ca6b0892ce56.png">

### READ
* 모든 할 일을 조회할 수 있다.
* ID를 기반으로 특정 할 일을 조회할 수 있다.
<img width="270" alt="JSDoc-get" src="https://user-images.githubusercontent.com/108715216/216810732-0969f09c-a16f-4810-ab28-bdbadcc92750.png">

### UPDATE
* ID를 제외한 모든 속성을 수정할 수 있다.
* 특정 할 일의 특정 태그를 수정할 수 있다.
<img width="366" alt="JSDoc-update" src="https://user-images.githubusercontent.com/108715216/216810754-f755460c-8796-4d5f-a472-5fe35bf5f81d.png">

### DELETE
* ID를 기반으로 특정 할 일을 삭제할 수 있다.
* 모든 할 일을 제거할 수 있다.
* 특정 할 일의 특정 태그를 삭제할 수 있다.
* 특정 할 일의 모든 태그를 제거할 수 있다.
<img width="353" alt="JSDoc_delete" src="https://user-images.githubusercontent.com/108715216/216810771-54a5a0b6-992b-4330-ad18-b5cee96a683b.png">

### TODO
```
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```
<img width="382" alt="JSDoc-todo" src="https://user-images.githubusercontent.com/108715216/216810804-26525861-82d8-44e6-87ce-5d486e140744.png">
