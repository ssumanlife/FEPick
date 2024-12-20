export const data = {
  html: [
    {
      title: "기초 1",
      quiz: [
        {
          id: 1,
          question: "다음 중 HTML에서 문서의 제목을 나타내는 태그는 무엇입니까?",
          options: ["<title>", "<header>", "<h1>", "<meta>"],
          answer: "<title>",
        },
        {
          id: 2,
          question:
            "HTML5에서 새롭게 추가된 입력 필드 속성 중 이메일 주소를 입력받기 위한 속성은 무엇입니까?",
          options: [
            '<input type="email">',
            '<input type="text">',
            '<input type="password">',
            '<input type="url">',
          ],
          answer: '<input type="email">',
        },
        {
          id: 3,
          question: "HTML에서 텍스트를 굵게 표시하는 태그는 무엇입니까?",
          options: ["<b>", "<strong>", "<i>", "<u>"],
          answer: "<strong>",
        },
        {
          id: 4,
          question: "HTML에서 목록을 만들기 위한 태그는 무엇입니까?",
          options: ["<ul>", "<ol>", "<li>", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 5,
          question: "HTML에서 하이퍼링크를 생성하는 태그는 무엇입니까?",
          options: ["<a>", "<link>", "<nav>", "<href>"],
          answer: "<a>",
        },
        {
          id: 6,
          question: "HTML에서 줄바꿈을 하기위해 추가하는 태그는 무엇입니까?",
          options: ["<br>", "<space>", "<hr>", "<p>"],
          answer: "<br>",
        },
        {
          id: 7,
          question: "HTML5에서 동영상을 삽입하기 위해 사용하는 태그는 무엇입니까?",
          options: ["<video>", "<embed>", "<iframe>", "<object>"],
          answer: "<video>",
        },
        {
          id: 8,
          question: "HTML5에서 오디오 파일을 삽입하기 위한 태그는 무엇입니까?",
          options: ["<audio>", "<sound>", "<music>", "<embed>"],
          answer: "<audio>",
        },
        {
          id: 9,
          question: "HTML에서 테이블의 열을 생성하는 태그는 무엇입니까?",
          options: ["<tr>", "<td>", "<th>", "<table>"],
          answer: "<tr>",
        },
        {
          id: 10,
          question: "HTML에서 입력 필드를 생성하는 태그는 무엇입니까?",
          options: ["<input>", "<form>", "<button>", "<textarea>"],
          answer: "<input>",
        },
      ],
    },
    {
      title: "기초 2",
      quiz: [
        {
          id: 1,
          question: "HTML에서 이미지 파일을 삽입하는 태그는 무엇입니까?",
          options: ["<img>", "<src>", "<picture>", "<object>"],
          answer: "<img>",
        },
        {
          id: 2,
          question: "HTML에서 웹 페이지의 구조를 정의하는 기본적인 태그는 무엇입니까?",
          options: ["<div>", "<span>", "<section>", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 3,
          question: "HTML5에서 요소의 콘텐츠를 직접적으로 설명하는 태그는 무엇입니까?",
          options: ["<article>", "<section>", "<aside>", "<footer>"],
          answer: "<article>",
        },
        {
          id: 4,
          question: "HTML에서 목록의 항목을 나타내는 태그는 무엇입니까?",
          options: ["<li>", "<ul>", "<ol>", "<dl>"],
          answer: "<li>",
        },
        {
          id: 5,
          question: "HTML에서 인용을 나타내는 태그는 무엇입니까?",
          options: ["<blockquote>", "<q>", "<cite>", "<em>"],
          answer: "<blockquote>",
        },
        {
          id: 6,
          question:
            "HTML5에서 웹 애플리케이션의 로컬 데이터 저장을 위해 사용하는 API는 무엇입니까?",
          options: ["localStorage", "sessionStorage", "cookie", "IndexedDB"],
          answer: "localStorage",
        },
        {
          id: 7,
          question: "HTML에서 기본적으로 글씨를 기울이는 태그는 무엇입니까?",
          options: ["<i>", "<em>", "<strong>", "<b>"],
          answer: "<i>",
        },
        {
          id: 8,
          question: "HTML에서 메타데이터를 제공하는 태그는 무엇입니까?",
          options: ["<meta>", "<head>", "<title>", "<link>"],
          answer: "<meta>",
        },
        {
          id: 9,
          question: "HTML에서 자바스크립트 파일을 포함하는 태그는 무엇입니까?",
          options: ["<script>", "<style>", "<link>", "<meta>"],
          answer: "<script>",
        },
        {
          id: 10,
          question: "HTML에서 제목 요소는 무엇입니까?",
          options: ["<h1> - <h6>", "<p>", "<span>", "<div>"],
          answer: "<h1> - <h6>",
        },
      ],
    },
    {
      title: "기초 3",
      quiz: [
        {
          id: 1,
          question: 'HTML에서 "for" 속성은 어떤 태그에서 사용됩니까?',
          options: ["<label>", "<form>", "<input>", "<button>"],
          answer: "<label>",
        },
        {
          id: 2,
          question: "HTML에서 내비게이션 링크를 그룹화하는 데 사용되는 태그는 무엇입니까?",
          options: ["<nav>", "<header>", "<aside>", "<footer>"],
          answer: "<nav>",
        },
        {
          id: 3,
          question: "HTML에서 정의된 인라인 스타일을 제공하는 태그는 무엇입니까?",
          options: ["<style>", "<script>", "<link>", "<meta>"],
          answer: "<style>",
        },
        {
          id: 4,
          question: "HTML에서 form 태그 내에서 제출 버튼을 나타내는 태그는 무엇입니까?",
          options: ["<button>", '<input type="submit">', "<a>", "<form>"],
          answer: '<input type="submit">',
        },
        {
          id: 5,
          question: "HTML에서 특수 문자를 표현하기 위해 사용하는 것은 무엇입니까?",
          options: ["엔티티", "태그", "속성", "클래스"],
          answer: "엔티티",
        },
        {
          id: 6,
          question: "HTML에서 a 태그의 기본적인 속성은 무엇입니까?",
          options: ["href", "src", "alt", "rel"],
          answer: "href",
        },
        {
          id: 7,
          question: "HTML에서 텍스트를 강조할 때 사용하는 태그는 무엇입니까?",
          options: ["<em>", "<strong>", "<b>", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 8,
          question: "HTML에서 테이블의 데이터를 나타내는 태그는 무엇입니까?",
          options: ["<td>", "<tr>", "<table>", "<th>"],
          answer: "<td>",
        },
        {
          id: 9,
          question: "HTML에서 `<input>` 요소의 타입 중 비밀번호를 입력받는 것은?",
          options: ["password", "text", "email", "hidden"],
          answer: "password",
        },
        {
          id: 10,
          question: "HTML에서 여러 줄의 텍스트를 입력받기 위한 요소는?",
          options: ["<textarea>", '<input type="text">', '<input type="password">', "<textarea>"],
          answer: "<textarea>",
        },
      ],
    },
  ],
  css: [
    {
      title: "기초 1",
      quiz: [
        {
          id: 1,
          question: "CSS에서 텍스트의 색상을 설정하는 속성은 무엇입니까?",
          options: ["color", "background-color", "font-size", "text-align"],
          answer: "color",
        },
        {
          id: 2,
          question: "CSS에서 외부 스타일 시트를 연결하는 방법은?",
          options: ["<link> 태그 사용", "<style> 태그 사용", "import 문 사용", "script 태그 사용"],
          answer: "<link> 태그 사용",
        },
        {
          id: 3,
          question: "CSS에서 클래스 선택자를 지정할 때 사용하는 기호는 무엇입니까?",
          options: [".", "#", "*", ">"],
          answer: ".",
        },
        {
          id: 4,
          question: "CSS에서 id 선택자를 지정할 때 사용하는 기호는 무엇입니까?",
          options: ["#", ".", "*", ">"],
          answer: "#",
        },
        {
          id: 5,
          question: "CSS에서 글꼴의 크기를 지정하는 속성은 무엇입니까?",
          options: ["font-size", "font-family", "text-align", "color"],
          answer: "font-size",
        },
        {
          id: 6,
          question: "CSS에서 요소의 배경 색상을 지정하는 속성은 무엇입니까?",
          options: ["background-color", "color", "border", "display"],
          answer: "background-color",
        },
        {
          id: 7,
          question: "CSS에서 요소의 내부 여백을 지정하는 속성은 무엇입니까?",
          options: ["padding", "margin", "border", "width"],
          answer: "padding",
        },
        {
          id: 8,
          question: "CSS에서 요소의 외부 여백을 지정하는 속성은 무엇입니까?",
          options: ["margin", "padding", "border", "width"],
          answer: "margin",
        },
        {
          id: 9,
          question: "CSS에서 글꼴을 굵게 표시하는 속성은 무엇입니까?",
          options: ["font-weight", "font-style", "font-family", "font-size"],
          answer: "font-weight",
        },
        {
          id: 10,
          question: "CSS에서 요소의 가로 크기를 설정하는 속성은 무엇입니까?",
          options: ["width", "height", "margin", "padding"],
          answer: "width",
        },
      ],
    },
    {
      title: "기초 2",
      quiz: [
        {
          id: 1,
          question: "CSS에서 요소의 투명도를 설정하는 속성은 무엇입니까?",
          options: ["opacity", "visibility", "filter", "display"],
          answer: "opacity",
        },
        {
          id: 2,
          question: "CSS에서 요소를 화면의 중앙에 배치하는 방법 중 올바른 것은?",
          options: [
            "margin: auto;",
            "text-align: center;",
            "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
            "모두 포함",
          ],
          answer: "모두 포함",
        },
        {
          id: 3,
          question: "CSS에서 플렉스 컨테이너의 정렬 축을 변경하는 속성은 무엇입니까?",
          options: ["flex-direction", "align-items", "justify-content", "flex-wrap"],
          answer: "flex-direction",
        },
        {
          id: 4,
          question: "CSS 그리드 레이아웃에서 그리드 항목의 열 간격을 조정하는 속성은 무엇입니까?",
          options: ["grid-column-gap", "grid-row-gap", "gap", "grid-template-areas"],
          answer: "grid-column-gap",
        },
        {
          id: 5,
          question: "CSS에서 요소의 정렬을 수직 중앙으로 맞추는 방법은?",
          options: ["align-items", "justify-content", "align-self", "vertical-align"],
          answer: "align-items",
        },
        {
          id: 6,
          question: "CSS에서 콘텐츠가 넘칠 때 스크롤바를 추가하는 속성은 무엇입니까?",
          options: ["overflow", "scroll", "display", "height"],
          answer: "overflow",
        },
        {
          id: 7,
          question: "CSS에서 요소의 글꼴을 이탤릭체로 변경하는 속성은 무엇입니까?",
          options: ["font-style", "font-variant", "font-weight", "text-transform"],
          answer: "font-style",
        },
        {
          id: 8,
          question: "CSS에서 `float` 속성의 기본값은 무엇입니까?",
          options: ["none", "left", "right", "inline"],
          answer: "none",
        },
        {
          id: 9,
          question: "CSS에서 `z-index` 속성은 무엇을 조정합니까?",
          options: ["요소의 쌓임 순서", "요소의 투명도", "요소의 위치", "요소의 크기"],
          answer: "요소의 쌓임 순서",
        },
        {
          id: 10,
          question: "CSS에서 마우스 커서를 변경하는 속성은 무엇입니까?",
          options: ["cursor", "pointer", "hover", "display"],
          answer: "cursor",
        },
      ],
    },
    {
      title: "기초 3",
      quiz: [
        {
          id: 1,
          question: "CSS에서 요소의 그림자를 추가하는 속성은 무엇입니까?",
          options: ["box-shadow", "text-shadow", "filter", "opacity"],
          answer: "box-shadow",
        },
        {
          id: 2,
          question: "CSS에서 전체 페이지의 배경 이미지를 설정하는 방법은 무엇입니까?",
          options: [
            'background-image: url("image.jpg");',
            'background: url("image.jpg");',
            "background: url(image.jpg) no-repeat;",
            "모두 포함",
          ],
          answer: "모두 포함",
        },
        {
          id: 3,
          question: "CSS에서 글꼴의 두께를 설정하는 값 중 가장 두꺼운 값은 무엇입니까?",
          options: ["900", "bold", "bolder", "600"],
          answer: "900",
        },
        {
          id: 4,
          question: "CSS에서 동적 애니메이션을 정의하기 위해 사용하는 규칙은 무엇입니까?",
          options: ["@keyframes", "@media", "@font-face", "@import"],
          answer: "@keyframes",
        },
        {
          id: 5,
          question: "CSS에서 다양한 장치별로 스타일을 적용하기 위해 사용하는 규칙은 무엇입니까?",
          options: ["@media", "@keyframes", "@font-face", "@import"],
          answer: "@media",
        },
        {
          id: 6,
          question: "CSS에서 특정 화면 크기 이상일 때만 스타일을 적용하려면 어떻게 해야 합니까?",
          options: [
            "@media (min-width: 768px)",
            "@keyframes",
            "@font-face",
            "@media (max-width: 768px)",
          ],
          answer: "@media (min-width: 768px)",
        },
        {
          id: 7,
          question:
            "CSS에서 상위 요소의 크기에 맞춰 하위 요소의 크기를 비율로 설정하려면 어떤 단위를 사용합니까?",
          options: ["%", "px", "em", "rem"],
          answer: "%",
        },
        {
          id: 8,
          question: "CSS에서 요소의 상태(예: hover, focus)를 조정하는 선택자는 무엇입니까?",
          options: [":hover", ":focus", ":before", ":after"],
          answer: ":hover",
        },
        {
          id: 9,
          question:
            "CSS에서 여러 개의 선택자에 동일한 스타일을 적용할 때 사용하는 구분자는 무엇입니까?",
          options: [", (콤마)", "+ (플러스)", "> (꺾은 화살표)", "~ (틸드)"],
          answer: ", (콤마)",
        },
        {
          id: 10,
          question: "CSS에서 요소의 너비를 100%로 설정하면 어떻게 됩니까?",
          options: [
            "부모 요소의 너비를 기준으로 너비가 설정됩니다.",
            "화면 너비에 맞게 조정됩니다.",
            "고정 크기로 설정됩니다.",
            "자동으로 설정됩니다.",
          ],
          answer: "부모 요소의 너비를 기준으로 너비가 설정됩니다.",
        },
      ],
    },
  ],
  javascript: [
    {
      title: "기초 1",
      quiz: [
        {
          id: 1,
          question: "다음 중 JavaScript에서 원시 타입(primitive type)이 아닌 것은 무엇입니까?",
          options: ["문자열(String)", "숫자(Number)", "객체(Object)", "불리언(Boolean)"],
          answer: "객체(Object)",
        },
        {
          id: 2,
          question: "JavaScript에서 `2 + '2'`의 결과는 무엇입니까?",
          options: ["4", "'22'", "NaN", "undefined"],
          answer: "'22'",
        },
        {
          id: 3,
          question: "다음 중 JavaScript에서 변수를 선언하는 키워드는 무엇입니까?",
          options: ["var", "let", "const", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 4,
          question: "JavaScript에서 배열의 길이를 확인하는 속성은 무엇입니까?",
          options: ["length", "size", "count", "total"],
          answer: "length",
        },
        {
          id: 5,
          question: "다음 중 JavaScript의 비동기 처리 방법이 아닌 것은 무엇입니까?",
          options: ["콜백(callback)", "프로미스(Promise)", "async/await", "반복문"],
          answer: "반복문",
        },
        {
          id: 6,
          question: "JavaScript에서 null과 undefined의 차이는 무엇입니까?",
          options: [
            "둘 다 값이 없다.",
            "null은 정의되지 않은 값, undefined는 값이 할당되지 않은 상태이다.",
            "둘 다 동일하다.",
            "null은 문자열 타입이다.",
          ],
          answer: "null은 정의되지 않은 값, undefined는 값이 할당되지 않은 상태이다.",
        },
        {
          id: 7,
          question: "JavaScript에서 배열을 합치기 위해 사용하는 메서드는 무엇입니까?",
          options: ["concat()", "join()", "push()", "slice()"],
          answer: "concat()",
        },
        {
          id: 8,
          question: "JavaScript에서 문자열을 분할하는 메서드는 무엇입니까?",
          options: ["split()", "slice()", "substr()", "concat()"],
          answer: "split()",
        },
        {
          id: 9,
          question: "JavaScript에서 함수의 기본값을 설정할 때 사용하는 방법은 무엇입니까?",
          options: ["기본 매개변수", "함수 내에서 조건문", "try-catch", "callback 사용"],
          answer: "기본 매개변수",
        },
        {
          id: 10,
          question: "JavaScript에서 클래스는 어떻게 정의합니까?",
          options: [
            "class 키워드 사용",
            "function 키워드 사용",
            "객체 리터럴 사용",
            "Arrow 함수 사용",
          ],
          answer: "class 키워드 사용",
        },
      ],
    },
    {
      title: "기초 2",
      quiz: [
        {
          id: 1,
          question: "JavaScript에서 전역 객체는 무엇입니까?",
          options: ["window", "document", "this", "globalThis"],
          answer: "globalThis",
        },
        {
          id: 2,
          question: "JavaScript에서 함수 호출 시 매개변수가 없는 경우 기본값을 지정하는 방법은?",
          options: ["초기화", "if문 사용", "기본 매개변수 설정", "try-catch"],
          answer: "기본 매개변수 설정",
        },
        {
          id: 3,
          question: "다음 중 자바스크립트에서 함수의 기본적인 형태는 무엇입니까?",
          options: ["함수 선언", "익명 함수", "화살표 함수", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 4,
          question: "JavaScript에서 가장 빠른 반복문은 무엇입니까?",
          options: ["for loop", "while loop", "forEach", "do while loop"],
          answer: "for loop",
        },
        {
          id: 5,
          question: "JavaScript에서 배열의 요소를 찾을 때 사용하는 메서드는 무엇입니까?",
          options: ["find()", "filter()", "map()", "reduce()"],
          answer: "find()",
        },
        {
          id: 6,
          question: "다음 중 JavaScript의 기본 데이터 타입이 아닌 것은?",
          options: ["Symbol", "Undefined", "Object", "Tuple"],
          answer: "Tuple",
        },
        {
          id: 7,
          question: "다음 중 JavaScript에서 이벤트를 처리하는 방법이 아닌 것은?",
          options: ["onEvent 핸들러", "addEventListener", "removeEventListener", "attachEvent"],
          answer: "attachEvent",
        },
        {
          id: 8,
          question: "JavaScript에서 함수 내부에서 자신을 참조하는 키워드는 무엇입니까?",
          options: ["this", "self", "window", "global"],
          answer: "this",
        },
        {
          id: 9,
          question: "JavaScript에서 스프레드 연산자는 어떤 기호로 표현됩니까?",
          options: ["...", "++", "--", "**"],
          answer: "...",
        },
        {
          id: 10,
          question: "JavaScript에서 깊은 복사를 하기 위해 사용하는 방법은?",
          options: [
            "JSON.parse(JSON.stringify())",
            "Object.assign()",
            "Array.slice()",
            "Array.splice()",
          ],
          answer: "JSON.parse(JSON.stringify())",
        },
      ],
    },
    {
      title: "기초 3",
      quiz: [
        {
          id: 1,
          question: "JavaScript에서 객체의 모든 키를 배열로 반환하는 메서드는 무엇입니까?",
          options: ["Object.keys()", "Object.values()", "Object.entries()", "Array.keys()"],
          answer: "Object.keys()",
        },
        {
          id: 2,
          question: "JavaScript에서 기본적으로 값이 전달되는 방식은 무엇입니까?",
          options: ["값 전달", "참조 전달", "직접 전달", "포인터 전달"],
          answer: "값 전달",
        },
        {
          id: 3,
          question: '다음 중 JavaScript에서 "==="의 의미는 무엇입니까?',
          options: ["동등 비교", "형 변환 없이 동등 비교", "형 변환 포함 동등 비교", "크기 비교"],
          answer: "형 변환 없이 동등 비교",
        },
        {
          id: 4,
          question: "JavaScript에서 메서드가 정의된 객체는 무엇을 의미합니까?",
          options: ["Object", "Array", "Function", "JSON"],
          answer: "Object",
        },
        {
          id: 5,
          question: "JavaScript에서 객체의 프로토타입 체인에 접근할 수 있는 방법은?",
          options: ["__proto__", "Object.getPrototypeOf()", "Object.setPrototypeOf()", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 6,
          question: "JavaScript에서 스코프의 종류는 무엇입니까?",
          options: ["전역 스코프와 지역 스코프", "블록 스코프", "함수 스코프", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 7,
          question: "JavaScript에서 메서드를 객체에 바인딩하기 위해 사용하는 함수는 무엇입니까?",
          options: ["bind()", "call()", "apply()", "concat()"],
          answer: "bind()",
        },
        {
          id: 8,
          question:
            "JavaScript에서 특정 메서드를 미리 정의된 매개변수로 호출하기 위해 사용하는 것은 무엇입니까?",
          options: ["apply()", "call()", "bind()", "setTimeout()"],
          answer: "call()",
        },
        {
          id: 9,
          question: "JavaScript에서 객체의 속성을 동적으로 정의할 때 사용하는 구문은?",
          options: [
            "Object.defineProperty()",
            "Object.freeze()",
            "Object.assign()",
            "Object.create()",
          ],
          answer: "Object.defineProperty()",
        },
        {
          id: 10,
          question: "JavaScript에서 NaN은 무엇을 의미합니까?",
          options: ["숫자가 아님", "널 값", "정의되지 않은 값", "0"],
          answer: "숫자가 아님",
        },
      ],
    },
    {
      title: "var, let, const",
      quiz: [
        {
          id: 1,
          question: "JavaScript에서 재할당이 가능한 변수 선언 방법은 무엇입니까?",
          options: ["var", "let, const", "var, let", "모두 포함"],
          answer: "var, let",
        },
        {
          id: 2,
          question: "JavaScript에서 재선언이 가능한 변수 선언 방법은 무엇입니까?",
          options: ["var", "let, const", "var, let", "모두 포함"],
          answer: "var",
        },
        {
          id: 3,
          question: "선언이 호이스팅 되는 선언 방법은 무엇입니까?",
          options: ["var", "let, const", "var, let", "모두 포함"],
          answer: "모두 포함",
        },
        {
          id: 4,
          question: "블럭 레벨의 스코프로 사용되는 선언 방법은 무엇입니까?",
          options: ["var", "let, const", "var, let", "모두 포함"],
          answer: "let, const",
        },
        {
          id: 5,
          question:
            "let apple = '사과'의 선언 위치보다 상단에서 console.log(apple)로 출력한 결과는 무엇입니까?",
          options: ["undefined", "null", "reference error", "사과"],
          answer: "reference error",
        },
        {
          id: 6,
          question:
            "var apple = '사과'의 선언 위치보다 상단에서 console.log(apple)로 출력한 결과는 무엇입니까?",
          options: ["undefined", "null", "reference error", "사과"],
          answer: "undefined",
        },
        {
          id: 7,
          question: "let과 const가 공식적으로 탄생한 자바스크립트의 표준 버전은 무엇입니까?",
          options: ["ES3", "ES4", "ES5", "ES6"],
          answer: "ES6",
        },
        {
          id: 8,
          question: "let과 const로 선언된 변수는 초기화되기 전까지 어떤 스코프에 위치해있을까요?",
          options: ["window", "TDZ", "전역 스코프", "지역 스코프"],
          answer: "TDZ",
        },
        {
          id: 9,
          question: "const로 선언된 변수에서 객체 자체를 재할당하려고 하면 어떤 일이 발생합니까?",
          options: [
            "재할당이 가능하다",
            "TypeError가 발생한다",
            "객체 내부 속성이 변경된다",
            "undefined가 반환된다",
          ],
          answer: "TypeError가 발생한다",
        },
        {
          id: 10,
          question: "let과 var의 가장 큰 차이점 중 하나는 무엇입니까?",
          options: [
            "let은 함수 스코프, var는 블록 스코프",
            "let은 블록 스코프, var는 함수 스코프",
            "let은 호이스팅되지 않는다",
            "var는 재할당이 불가능하다",
          ],
          answer: "let은 블록 스코프, var는 함수 스코프",
        },
      ],
    },
  ],
  typescript: [
    {
      title: "기초 1",
      quiz: [
        {
          id: 1,
          question: "TypeScript는 JavaScript에 어떤 기능을 추가한 언어입니까?",
          options: ["정적 타입 검사", "비동기 처리", "DOM 조작", "프로미스(Promise)"],
          answer: "정적 타입 검사",
        },
        {
          id: 2,
          question: "TypeScript에서 인터페이스를 사용하여 정의할 수 없는 것은 무엇입니까?",
          options: ["클래스의 메서드", "객체의 속성", "생성자 함수", "상수"],
          answer: "상수",
        },
        {
          id: 3,
          question: "TypeScript에서 기본적으로 제공하는 타입이 아닌 것은?",
          options: ["string", "number", "boolean", "tuple"],
          answer: "tuple",
        },
        {
          id: 4,
          question: "TypeScript에서 선택적 속성을 나타내기 위해 사용하는 문법은 무엇입니까?",
          options: [
            "속성명 뒤에 물음표(?)",
            "속성명 앞에 느낌표(!)",
            "속성명 앞에 물음표(?)",
            "속성명 뒤에 느낌표(!)",
          ],
          answer: "속성명 뒤에 물음표(?)",
        },
        {
          id: 5,
          question: "TypeScript에서 튜플(tuple)의 예시로 적절한 것은?",
          options: ["['Hello', 42]", "[42, 42]", "['Hello', 'World']", "42, 'Hello'"],
          answer: "['Hello', 42]",
        },
        {
          id: 6,
          question: "TypeScript에서 타입 단언(type assertion)을 사용하는 방법은?",
          options: ["값 as 타입", "타입 as 값", "타입! 값", "값! 타입"],
          answer: "값 as 타입",
        },
        {
          id: 7,
          question: "TypeScript의 `never` 타입은 언제 사용됩니까?",
          options: ["결코 반환되지 않는 함수", "값이 항상 참인 변수", "선택적 속성", "객체 타입"],
          answer: "결코 반환되지 않는 함수",
        },
        {
          id: 8,
          question: "TypeScript에서 제네릭(Generic)을 사용하는 이유는 무엇입니까?",
          options: [
            "다양한 타입에 대해 재사용 가능한 함수나 클래스를 작성하기 위해",
            "객체의 속성을 보호하기 위해",
            "비동기 코드를 처리하기 위해",
            "타입 변환을 위해",
          ],
          answer: "다양한 타입에 대해 재사용 가능한 함수나 클래스를 작성하기 위해",
        },
        {
          id: 9,
          question: "TypeScript에서 인터페이스(interface)를 사용하여 할 수 없는 것은?",
          options: [
            "객체의 형태 정의",
            "함수의 시그니처 정의",
            "클래스의 메서드 정의",
            "함수 구현",
          ],
          answer: "함수 구현",
        },
        {
          id: 10,
          question: "TypeScript에서 타입 별칭을 정의할 때 사용하는 키워드는 무엇입니까?",
          options: ["type", "alias", "interface", "declare"],
          answer: "type",
        },
      ],
    },
    {
      title: "기초 2",
      quiz: [
        {
          id: 1,
          question:
            "TypeScript에서 객체의 특정 속성을 읽기 전용으로 만들기 위해 사용하는 키워드는?",
          options: ["readonly", "const", "final", "static"],
          answer: "readonly",
        },
        {
          id: 2,
          question: "TypeScript에서 함수의 매개변수가 선택적일 때 사용하는 문법은?",
          options: [
            "매개변수명 뒤에 물음표(?)",
            "매개변수명 앞에 느낌표(!)",
            "매개변수명 뒤에 느낌표(!)",
            "매개변수명 앞에 물음표(?)",
          ],
          answer: "매개변수명 뒤에 물음표(?)",
        },
        {
          id: 3,
          question: "TypeScript에서 `unknown` 타입과 `any` 타입의 차이점은 무엇입니까?",
          options: [
            "`unknown`은 더 안전하게 사용할 수 있으며, 사용 전 타입 확인이 필요합니다.",
            "`any`는 타입 검사에서 제외되지만 `unknown`은 검사됩니다.",
            "`unknown`은 항상 기본값을 가지지만, `any`는 그렇지 않습니다.",
            "`any`는 특정 타입으로 제한되고, `unknown`은 그렇지 않습니다.",
          ],
          answer: "`unknown`은 더 안전하게 사용할 수 있으며, 사용 전 타입 확인이 필요합니다.",
        },
        {
          id: 4,
          question:
            "TypeScript에서 함수 반환 타입을 명시하지 않으면 기본적으로 어떤 타입이 추론됩니까?",
          options: ["void", "any", "undefined", "null"],
          answer: "any",
        },
        {
          id: 5,
          question: "TypeScript에서 클래스 상속을 나타내는 키워드는 무엇입니까?",
          options: ["extends", "implements", "inherits", "derives"],
          answer: "extends",
        },
        {
          id: 6,
          question: "TypeScript에서 함수 오버로딩을 지원하는 이유는 무엇입니까?",
          options: [
            "다른 매개변수로 같은 함수 이름을 사용할 수 있게 하기 위해",
            "비동기 코드를 처리하기 위해",
            "객체의 속성을 보호하기 위해",
            "타입 단언을 위해",
          ],
          answer: "다른 매개변수로 같은 함수 이름을 사용할 수 있게 하기 위해",
        },
        {
          id: 7,
          question: "TypeScript에서 클래스가 인터페이스를 구현할 때 사용하는 키워드는 무엇입니까?",
          options: ["implements", "extends", "inherits", "uses"],
          answer: "implements",
        },
        {
          id: 8,
          question:
            "TypeScript에서 `strictNullChecks` 옵션을 활성화하면 발생하는 효과는 무엇입니까?",
          options: [
            "null과 undefined를 명시적으로 처리해야 합니다.",
            "모든 변수에 기본값으로 null이 할당됩니다.",
            "모든 함수가 null을 반환할 수 있습니다.",
            "객체의 속성만 null을 가질 수 있습니다.",
          ],
          answer: "null과 undefined를 명시적으로 처리해야 합니다.",
        },
        {
          id: 9,
          question: "TypeScript에서 기본 매개변수 값을 설정할 수 있는 방법은 무엇입니까?",
          options: [
            "함수 선언 시 매개변수에 기본값 할당",
            "타입 단언으로 기본값 설정",
            "인터페이스에서 기본값 설정",
            "제네릭 타입으로 기본값 설정",
          ],
          answer: "함수 선언 시 매개변수에 기본값 할당",
        },
        {
          id: 10,
          question:
            "TypeScript에서 모든 타입을 허용하지만 타입 안전성을 유지하기 위한 안전한 타입은 무엇입니까?",
          options: ["unknown", "any", "never", "void"],
          answer: "unknown",
        },
      ],
    },
    {
      title: "기초 3",
      quiz: [
        {
          id: 1,
          question: "TypeScript에서 모듈을 가져올 때 사용하는 키워드는 무엇입니까?",
          options: ["import", "export", "require", "load"],
          answer: "import",
        },
        {
          id: 2,
          question: "TypeScript에서 제네릭을 사용하여 함수의 반환 타입을 유추하는 것은 무엇입니까?",
          options: [
            "제네릭이 함수의 매개변수와 반환 타입 간의 관계를 정의합니다.",
            "제네릭은 타입을 동적으로 변환합니다.",
            "제네릭은 타입을 고정합니다.",
            "제네릭은 함수 오버로딩을 대체합니다.",
          ],
          answer: "제네릭이 함수의 매개변수와 반환 타입 간의 관계를 정의합니다.",
        },
        {
          id: 3,
          question: "TypeScript에서 readonly로 선언된 배열에 대해 할 수 없는 작업은?",
          options: ["배열 요소 수정", "배열 요소 읽기", "배열 길이 확인", "배열 반복"],
          answer: "배열 요소 수정",
        },
        {
          id: 4,
          question: "TypeScript에서 타입을 재정의하는 방법은?",
          options: [
            "타입 단언(type assertion)",
            "타입 변환(type casting)",
            "타입 체크(type checking)",
            "타입 추론(type inference)",
          ],
          answer: "타입 단언(type assertion)",
        },
        {
          id: 5,
          question: "TypeScript에서 `enum`을 사용하면 무엇을 정의할 수 있습니까?",
          options: ["이름이 있는 상수 집합", "동적 객체", "함수형 인터페이스", "클래스의 속성"],
          answer: "이름이 있는 상수 집합",
        },
        {
          id: 6,
          question: "TypeScript에서 `as` 키워드를 사용하여 하는 작업은 무엇입니까?",
          options: ["타입 단언", "타입 변환", "변수 선언", "모듈 가져오기"],
          answer: "타입 단언",
        },
        {
          id: 7,
          question: "TypeScript에서 배열의 타입을 정의할 때 사용하는 문법은?",
          options: ["type[]", "Array<type>", "type|Array", "type|[]"],
          answer: "type[]",
        },
        {
          id: 8,
          question: "TypeScript에서 `void` 타입은 언제 사용됩니까?",
          options: [
            "값을 반환하지 않는 함수",
            "항상 null을 반환하는 함수",
            "매개변수가 없는 함수",
            "모든 타입을 허용하는 함수",
          ],
          answer: "값을 반환하지 않는 함수",
        },
        {
          id: 9,
          question: "TypeScript에서 private 속성에 접근할 수 없는 경우는 언제입니까?",
          options: [
            "상속받은 클래스에서",
            "동일한 클래스에서",
            "같은 모듈 내에서",
            "다른 파일에서",
          ],
          answer: "다른 파일에서",
        },
        {
          id: 10,
          question: "TypeScript에서 `this`의 타입을 정의하기 위해 사용하는 키워드는 무엇입니까?",
          options: ["this", "self", "current", "context"],
          answer: "this",
        },
      ],
    },
  ],
  react: [
    {
      title: "기초 1",
      quiz: [
        {
          id: 1,
          question: "React에서 컴포넌트를 정의할 때 사용하는 함수는 무엇입니까?",
          options: ["render()", "createElement()", "setState()", "useEffect()"],
          answer: "createElement()",
        },
        {
          id: 2,
          question: "React에서 상태 관리를 위해 사용하는 Hook은 무엇입니까?",
          options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
          answer: "useState()",
        },
        {
          id: 3,
          question:
            "React 컴포넌트의 생명주기 메서드 중 컴포넌트가 처음 렌더링된 후 호출되는 메서드는?",
          options: [
            "componentDidMount",
            "componentWillUnmount",
            "componentDidUpdate",
            "shouldComponentUpdate",
          ],
          answer: "componentDidMount",
        },
        {
          id: 4,
          question: "React에서 조건부 렌더링을 할 때 사용하는 방법 중 하나는 무엇입니까?",
          options: ["if/else", "switch", "&& 연산자", "try/catch"],
          answer: "&& 연산자",
        },
        {
          id: 5,
          question: "React에서 JSX란 무엇입니까?",
          options: [
            "JavaScript XML로 HTML과 유사한 문법을 사용하여 UI를 작성하는 방식",
            "JavaScript의 새로운 버전",
            "CSS를 위한 도구",
            "React 컴포넌트를 관리하는 라이브러리",
          ],
          answer: "JavaScript XML로 HTML과 유사한 문법을 사용하여 UI를 작성하는 방식",
        },
        {
          id: 6,
          question: "React에서 컴포넌트 간 데이터를 전달할 때 사용하는 방법은 무엇입니까?",
          options: ["Props", "State", "Event", "Context"],
          answer: "Props",
        },
        {
          id: 7,
          question: "React에서 useEffect Hook은 주로 무엇을 위해 사용됩니까?",
          options: [
            "부수 효과(side effects)를 처리하기 위해",
            "상태 관리를 위해",
            "UI 렌더링을 위해",
            "라우팅을 위해",
          ],
          answer: "부수 효과(side effects)를 처리하기 위해",
        },
        {
          id: 8,
          question: "React에서 배열을 렌더링할 때, 각 항목에 고유한 무엇이 필요합니까?",
          options: ["key", "id", "ref", "class"],
          answer: "key",
        },
        {
          id: 9,
          question: "React에서 상태 변경을 트리거하는 함수는 무엇입니까?",
          options: ["setState()", "useState()", "setEffect()", "changeState()"],
          answer: "setState()",
        },
        {
          id: 10,
          question: "React에서 컴포넌트가 재사용 가능하게 하려면 무엇을 사용해야 합니까?",
          options: ["Props", "State", "Event", "Context"],
          answer: "Props",
        },
      ],
    },
    {
      title: "기초 2",
      quiz: [
        {
          id: 1,
          question:
            "React에서 클래스형 컴포넌트에서 상태를 관리하기 위해 사용하는 객체는 무엇입니까?",
          options: ["this.state", "this.props", "this.effect", "this.context"],
          answer: "this.state",
        },
        {
          id: 2,
          question: "React에서 클릭 이벤트와 같은 사용자 이벤트를 처리하는 방법은?",
          options: [
            "onClick 속성 사용",
            "onEvent 속성 사용",
            "addEventListener 사용",
            "dispatchEvent 사용",
          ],
          answer: "onClick 속성 사용",
        },
        {
          id: 3,
          question: "React에서 context API는 주로 무엇을 위해 사용됩니까?",
          options: [
            "컴포넌트 간에 전역적으로 데이터를 공유하기 위해",
            "상태 관리를 위해",
            "비동기 작업을 처리하기 위해",
            "UI 렌더링 속도를 향상시키기 위해",
          ],
          answer: "컴포넌트 간에 전역적으로 데이터를 공유하기 위해",
        },
        {
          id: 4,
          question: "React에서 useReducer Hook은 어떤 패턴을 기반으로 상태를 관리합니까?",
          options: ["리듀서 패턴", "옵저버 패턴", "싱글톤 패턴", "팩토리 패턴"],
          answer: "리듀서 패턴",
        },
        {
          id: 5,
          question: "React에서 setState는 상태를 어떻게 업데이트합니까?",
          options: [
            "비동기로 상태를 업데이트한다",
            "동기로 상태를 업데이트한다",
            "배치(batch) 업데이트를 한다",
            "모두 포함",
          ],
          answer: "비동기로 상태를 업데이트한다",
        },
        {
          id: 6,
          question: "React에서 컴포넌트를 비구조화 할당으로 분리할 때 사용하는 문법은 무엇입니까?",
          options: ["구조 분해 할당", "스프레드 연산자", "템플릿 리터럴", "화살표 함수"],
          answer: "구조 분해 할당",
        },
        {
          id: 7,
          question: "React에서 useRef Hook은 주로 무엇을 위해 사용됩니까?",
          options: [
            "DOM 요소에 접근하기 위해",
            "상태를 관리하기 위해",
            "비동기 작업을 처리하기 위해",
            "라우팅을 위해",
          ],
          answer: "DOM 요소에 접근하기 위해",
        },
        {
          id: 8,
          question: "React에서 컴포넌트가 업데이트된 후에 호출되는 생명주기 메서드는?",
          options: [
            "componentDidUpdate",
            "componentDidMount",
            "componentWillUnmount",
            "shouldComponentUpdate",
          ],
          answer: "componentDidUpdate",
        },
        {
          id: 9,
          question: "React에서 useCallback Hook은 주로 무엇을 위해 사용됩니까?",
          options: ["함수 메모이제이션", "상태 초기화", "렌더링 최적화", "비동기 작업 처리"],
          answer: "함수 메모이제이션",
        },
        {
          id: 10,
          question: "React에서 메모이제이션된 값을 반환하는 Hook은 무엇입니까?",
          options: ["useMemo", "useEffect", "useState", "useReducer"],
          answer: "useMemo",
        },
      ],
    },
    {
      title: "기초 3",
      quiz: [
        {
          id: 1,
          question:
            "React에서 하위 컴포넌트에 함수를 전달할 때, 함수가 불필요하게 재생성되는 것을 막기 위해 사용하는 Hook은?",
          options: ["useCallback", "useMemo", "useEffect", "useState"],
          answer: "useCallback",
        },
        {
          id: 2,
          question: "React에서 사용자 정의 Hook을 만들 때 함수의 이름은 무엇으로 시작해야 합니까?",
          options: ["use", "custom", "handle", "on"],
          answer: "use",
        },
        {
          id: 3,
          question:
            "React에서 useEffect Hook의 두 번째 매개변수로 전달되는 배열은 무엇을 의미합니까?",
          options: ["의존성 배열", "상태 배열", "props 배열", "리듀서 배열"],
          answer: "의존성 배열",
        },
        {
          id: 4,
          question: "React에서 JSX에서 자바스크립트 코드를 실행하려면 무엇을 사용합니까?",
          options: ["중괄호 {}", "대괄호 []", "괄호 ()", "백틱 ``"],
          answer: "중괄호 {}",
        },
        {
          id: 5,
          question:
            "React에서 부모 컴포넌트가 자식 컴포넌트의 DOM에 직접 접근하려면 무엇을 사용해야 합니까?",
          options: ["ref", "props", "state", "context"],
          answer: "ref",
        },
        {
          id: 6,
          question: "React에서 JSX 요소를 조건부로 렌더링할 때 사용하는 삼항 연산자는?",
          options: ["조건 ? 참 : 거짓", "조건 && 참", "조건 || 참", "조건 ? 거짓 : 참"],
          answer: "조건 ? 참 : 거짓",
        },
        {
          id: 7,
          question: "React에서 Fragment의 역할은 무엇입니까?",
          options: [
            "불필요한 DOM 요소를 추가하지 않고 여러 요소를 그룹화하는 데 사용",
            "상태 관리를 위해 사용",
            "스타일링을 위해 사용",
            "이벤트 처리를 위해 사용",
          ],
          answer: "불필요한 DOM 요소를 추가하지 않고 여러 요소를 그룹화하는 데 사용",
        },
        {
          id: 8,
          question: "React에서 컴포넌트가 마운트될 때 한 번만 실행하고 싶은 코드를 배치하는 곳은?",
          options: [
            "useEffect Hook의 빈 의존성 배열",
            "useState Hook",
            "useReducer Hook",
            "useMemo Hook",
          ],
          answer: "useEffect Hook의 빈 의존성 배열",
        },
        {
          id: 9,
          question: "React에서 성능 최적화를 위해 렌더링 결과를 메모이제이션하는 방법은?",
          options: ["React.memo", "useEffect", "useState", "useContext"],
          answer: "React.memo",
        },
        {
          id: 10,
          question: "React에서 이벤트 핸들러 함수에 기본적으로 제공되는 매개변수는 무엇입니까?",
          options: ["이벤트 객체", "상태 객체", "props 객체", "DOM 객체"],
          answer: "이벤트 객체",
        },
      ],
    },
  ],
  nextJS: [
    {
      title: "기초 1",
      quiz: [
        {
          id: 1,
          question: "Next.js는 어떤 종류의 프레임워크입니까?",
          options: [
            "React 기반의 풀스택 프레임워크",
            "Angular 기반 프레임워크",
            "Vue 기반의 서버사이드 프레임워크",
            "Node.js 전용 프레임워크",
          ],
          answer: "React 기반의 풀스택 프레임워크",
        },
        {
          id: 2,
          question: "Next.js에서 정적 페이지 생성을 위해 사용하는 함수는 무엇입니까?",
          options: ["getStaticProps", "getServerSideProps", "useEffect", "getInitialProps"],
          answer: "getStaticProps",
        },
        {
          id: 3,
          question:
            "Next.js에서 서버 사이드 렌더링(SSR)을 구현하기 위해 사용하는 함수는 무엇입니까?",
          options: ["getServerSideProps", "getStaticProps", "useEffect", "useState"],
          answer: "getServerSideProps",
        },
        {
          id: 4,
          question: "Next.js에서 페이지는 기본적으로 어디에 저장됩니까?",
          options: ["pages 폴더", "src 폴더", "components 폴더", "lib 폴더"],
          answer: "pages 폴더",
        },
        {
          id: 5,
          question: "Next.js에서 동적 라우팅을 구현하기 위해 사용하는 것은 무엇입니까?",
          options: ["[param].js 파일", "{param}.js 파일", ":param.js 파일", "(param).js 파일"],
          answer: "[param].js 파일",
        },
        {
          id: 6,
          question: "Next.js에서 API 라우트는 어디에 위치합니까?",
          options: ["pages/api 폴더", "src/api 폴더", "components/api 폴더", "lib/api 폴더"],
          answer: "pages/api 폴더",
        },
        {
          id: 7,
          question: "Next.js에서 서버 사이드에서만 실행되는 코드는 어디에서 작성해야 합니까?",
          options: ["getServerSideProps", "getStaticProps", "useEffect", "useState"],
          answer: "getServerSideProps",
        },
        {
          id: 8,
          question:
            "Next.js에서 정적 사이트 생성을 통해 미리 생성된 페이지를 배포하는 방식은 무엇입니까?",
          options: [
            "Static Site Generation (SSG)",
            "Server Side Rendering (SSR)",
            "Incremental Static Regeneration (ISR)",
            "Dynamic Rendering",
          ],
          answer: "Static Site Generation (SSG)",
        },
        {
          id: 9,
          question:
            "Next.js에서 페이지 간 데이터를 공유하기 위해 사용할 수 있는 데이터 페칭 방법은 무엇입니까?",
          options: ["getStaticProps", "getServerSideProps", "getInitialProps", "모두 해당"],
          answer: "모두 해당",
        },
        {
          id: 10,
          question:
            "Next.js에서 Link 컴포넌트를 사용할 때, href 외에 필수적으로 사용되는 속성은 무엇입니까?",
          options: ["없음", "as", "replace", "passHref"],
          answer: "없음",
        },
      ],
    },
    {
      title: "기초 2",
      quiz: [
        {
          id: 1,
          question: "Next.js에서의 기본적인 이미지 최적화 기능을 제공하는 컴포넌트는 무엇입니까?",
          options: ["Image", "img", "Picture", "NextImage"],
          answer: "Image",
        },
        {
          id: 2,
          question:
            "Next.js에서 Incremental Static Regeneration (ISR)을 사용할 때의 주요 이점은 무엇입니까?",
          options: [
            "페이지를 선택적으로 업데이트할 수 있다.",
            "모든 페이지를 실시간으로 생성한다.",
            "페이지를 캐싱하지 않는다.",
            "서버에서만 사용 가능하다.",
          ],
          answer: "페이지를 선택적으로 업데이트할 수 있다.",
        },
        {
          id: 3,
          question: "Next.js에서 getStaticProps와 getServerSideProps의 차이점은 무엇입니까?",
          options: [
            "getStaticProps는 빌드 시 데이터를 가져오고, getServerSideProps는 요청 시 데이터를 가져옵니다.",
            "getStaticProps는 서버에서만 사용되고, getServerSideProps는 클라이언트에서 사용됩니다.",
            "getStaticProps는 클라이언트 측에서 실행되고, getServerSideProps는 서버에서 실행됩니다.",
            "두 함수는 동일하게 동작합니다.",
          ],
          answer:
            "getStaticProps는 빌드 시 데이터를 가져오고, getServerSideProps는 요청 시 데이터를 가져옵니다.",
        },
        {
          id: 4,
          question: "Next.js에서 동적 라우팅을 구현하는 데 사용하는 파일명은?",
          options: ["[id].js", "[...id].js", "{id}.js", ":id.js"],
          answer: "[id].js",
        },
        {
          id: 5,
          question:
            "Next.js에서 API 라우트를 만드는 경우 기본적으로 어떤 HTTP 메서드를 지원합니까?",
          options: ["GET과 POST", "GET만", "POST만", "모든 HTTP 메서드"],
          answer: "GET과 POST",
        },
        {
          id: 6,
          question: "Next.js에서 미들웨어(Middleware)의 주요 역할은 무엇입니까?",
          options: [
            "요청을 처리하기 전에 중간 작업을 수행합니다.",
            "정적 페이지를 생성합니다.",
            "라우트를 정의합니다.",
            "CSS 파일을 로드합니다.",
          ],
          answer: "요청을 처리하기 전에 중간 작업을 수행합니다.",
        },
        {
          id: 7,
          question: "Next.js에서 `getInitialProps`는 언제 사용됩니까?",
          options: [
            "페이지가 서버와 클라이언트 모두에서 데이터 페칭이 필요할 때",
            "정적 페이지 생성을 위해",
            "CSS를 로드하기 위해",
            "이미지를 최적화하기 위해",
          ],
          answer: "페이지가 서버와 클라이언트 모두에서 데이터 페칭이 필요할 때",
        },
        {
          id: 8,
          question: "Next.js에서 환경 변수를 사용할 때 `.env.local` 파일은 어디에서 로드됩니까?",
          options: ["개발 환경에서만", "프로덕션 환경에서만", "모든 환경에서", "로컬 서버에서만"],
          answer: "개발 환경에서만",
        },
        {
          id: 9,
          question:
            "Next.js에서 정적 사이트와 서버사이드 렌더링을 혼합하여 사용하는 것을 무엇이라고 합니까?",
          options: ["Mixed Rendering", "Hybrid Rendering", "SSR with SSG", "Dynamic Rendering"],
          answer: "Hybrid Rendering",
        },
        {
          id: 10,
          question: "Next.js에서 페이지를 비동기로 미리 렌더링할 수 있는 방법은 무엇입니까?",
          options: [
            "Incremental Static Regeneration (ISR)",
            "getStaticProps",
            "getServerSideProps",
            "useEffect",
          ],
          answer: "Incremental Static Regeneration (ISR)",
        },
      ],
    },
    {
      title: "기초 3",
      quiz: [
        {
          id: 1,
          question: "Next.js에서 페이지의 SEO 성능을 높이기 위해 사용할 수 있는 것은 무엇입니까?",
          options: ["Head 컴포넌트", "useState", "getServerSideProps", "getStaticProps"],
          answer: "Head 컴포넌트",
        },
        {
          id: 2,
          question: "Next.js에서 CSS 모듈은 어떻게 사용됩니까?",
          options: [
            "파일 이름에 `.module.css`를 붙여 사용합니다.",
            "CSS 파일을 직접 import 합니다.",
            "inline 스타일을 사용합니다.",
            "global CSS를 사용합니다.",
          ],
          answer: "파일 이름에 `.module.css`를 붙여 사용합니다.",
        },
        {
          id: 3,
          question: "Next.js에서 기본적으로 제공하는 CSS-in-JS 솔루션은 무엇입니까?",
          options: ["styled-jsx", "styled-components", "emotion", "sass"],
          answer: "styled-jsx",
        },
        {
          id: 4,
          question: "Next.js에서 API 라우트에서 비동기 함수를 처리할 때 주로 사용하는 방법은?",
          options: [
            "async/await",
            "콜백(callback)",
            "프로미스 체이닝(Promise chaining)",
            "동기 함수 사용",
          ],
          answer: "async/await",
        },
        {
          id: 5,
          question: "Next.js에서 페이지 리디렉션을 설정할 수 있는 방법은 무엇입니까?",
          options: [
            "next.config.js 파일에서 redirects 설정",
            "getStaticProps 함수에서 설정",
            "Head 컴포넌트에서 설정",
            "useState를 사용해 설정",
          ],
          answer: "next.config.js 파일에서 redirects 설정",
        },
        {
          id: 6,
          question: "Next.js에서 이미지 최적화 기능이 기본적으로 적용되는 태그는 무엇입니까?",
          options: ["Image", "img", "picture", "NextImage"],
          answer: "Image",
        },
        {
          id: 7,
          question: "Next.js에서 다국어 지원을 위해 사용하는 라이브러리는 무엇입니까?",
          options: ["next-i18next", "react-i18next", "i18next", "next-localization"],
          answer: "next-i18next",
        },
        {
          id: 8,
          question: "Next.js에서 Favicon을 설정하는 방법은 무엇입니까?",
          options: [
            "Head 컴포넌트에 link 태그 추가",
            "pages/_app.js에 설정",
            "next.config.js에서 설정",
            "pages/_document.js에서 설정",
          ],
          answer: "Head 컴포넌트에 link 태그 추가",
        },
        {
          id: 9,
          question: "Next.js에서 폴더 구조에서 pages 폴더 외에 중요한 폴더는 무엇입니까?",
          options: ["public 폴더", "components 폴더", "styles 폴더", "lib 폴더"],
          answer: "public 폴더",
        },
        {
          id: 10,
          question: "Next.js에서 getStaticPaths 함수의 주 목적은 무엇입니까?",
          options: [
            "동적 페이지 생성을 위한 경로를 정의합니다.",
            "정적 페이지 생성을 위한 데이터를 가져옵니다.",
            "API 라우트를 설정합니다.",
            "이미지를 최적화합니다.",
          ],
          answer: "동적 페이지 생성을 위한 경로를 정의합니다.",
        },
      ],
    },
  ],
}
