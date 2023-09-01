## Team

<table>
<tr>
    <td align="center">
        <a href="https://github.com/Woogie-94">
        <img src="https://avatars.githubusercontent.com/u/59603529?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>곽은욱(팀장)</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Mooobi">
        <img src="https://avatars.githubusercontent.com/u/124570875?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>박무생</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/net7281">
        <img src="https://avatars.githubusercontent.com/u/33312138?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>정현정</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/chochojj">
        <img src="https://avatars.githubusercontent.com/u/104323906?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>조지현</b></sub>
        </a>
    </td>
     <td align="center">
        <a href="https://github.com/hnoch">
        <img src="https://avatars.githubusercontent.com/u/53362953?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>황현호</b></sub>
        </a>
    </td>
</tr>
</table>

## 배포 링크

[배포 사이트](http://pre-onboarding-2-10.s3-website.ap-northeast-2.amazonaws.com)

## 프로젝트 실행 방법

```jsx
$ npm install && npm run dev
```

## Commit Message Rule

### **Ref**

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

[Angular Team Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/)

위의 컨벤션을 레퍼런스 삼아 아래의 룰을 만들었습니다.

```jsx
<type>: <description>

[optional body]

[optional footer(s)]
```

### Type

모든 커밋은 명사로 된 접두어를 포함해야 하고 `:`과 공백이 있어야 합니다. type은 다음 중 하나여야합니다.

- **feat** : 새로운 기능 추가
- **fix** : 버그 수정
- **docs** : 문서 수정
- **style** : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
- **refactor** : 코드 리팩터링
- **test** : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)
- **chore** : 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)
- **design** : CSS 등 사용자 UI 디자인 변경
- **comment** : 필요한 주석 추가 및 변경
- **rename** : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- **remove** : 파일을 삭제하는 작업만 수행한 경우

### Description

description은 type 접두어 뒤에 있는 콜론(:)과 공백 다음에 작성되어야 합니다. description은 코드 변경 사항에 대한 짧은 요약입니다.

```jsx
feat: Toast 구현
```

### Body [optional]

body는 짧은 설명 다음에 위치할 수 있으며 코드 변경 사항에 대한 추가적인 문맥적인 정보를 제공합니다. 본문은 반드시 설명 다음에 빈 행으로 시작해야 합니다. 형식이 자유로우며 새 줄로 분리된 많은 수의 단락들로 구성 될 수 있습니다.

```jsx
feat: Toast 구현

useToast Hook으로 Toast를 컨트롤할 수 있도록 구현했습니다.
```

### Footer [optional]

footer는 본문 다음 빈 행 다음에 위치합니다. 코드 변경 사항에 대한 정보로 구성되며 `-` 로 시작해야 합니다.

```jsx

feat: Toast 구현

useToast Hook으로 Toast를 컨트롤할 수 있도록 구현했습니다.

- Toast Component 구현
- Toast Context 구현
- useToast 구현
- App.tsx에 ToastProvider와 Toast Component 사용
```

## Git Flow

![Untitled](https://techblog.woowahan.com/wp-content/uploads/img/2017-10-30/git-flow_overall_graph.png)

저희는 Git Branch 전략으로 Git Flow 전략을 선택했습니다. 고도의 버전 관리와 QA가 필요하지 않은 상황이라 일반적인 전략을 간소화해 develop, release 과정을 제외했습니다. 구성과 과정 아래와 같습니다.

### **구성**

`main` - main 브랜치는 base 브랜치겸 배포가 될 브랜치입니다.

`feature/xxx` - feature 브랜치는 새 기능을 작업하는 브랜치입니다.

`fix/xxx` - fix 브랜치는 버그가 발생할 시 해결하는 브랜치입니다.

### **과정**

1. main 브랜치를 기반으로 feature, fix 브랜치를 생성합니다. (생성전 꼭 pull을 진행합니다)
2. 작업을 완료하면 main 브랜치를 타겟으로 PR을 생성합니다.
3. main 브랜치와 충돌을 확인하고 PR을 merge 시킵니다.

## Best Practice

### Github API

github에서 권장하는 octokit을 사용하여 github api에 접근하도록 구현했습니다. 하지만 타입 관련으로 지원이 부족하여 data에 대한 타입을 추론해줄 수 없어 추가로 @octokit/types 라이브러리를 사용해 타입 문제를 해결했습니다.

### Infinite Scroll

IntersectionObserver를 사용해 인피니티 스크롤을 구현했으며 재사용성을 고려해 useObserver라는 hook을 만들어 관리하고 있습니다. hook의 인자로 IntersectionObserver의 initial option을 넘겨줘 사용하는 쪽에서 option을 커스텀할 수 있도록 했습니다. useObserver를 사용하는 여러 상황을 고려해 callback 함수를 넘겨 hook 안에서 실행하기 보단 observe의 값이 담긴 entry를 리턴하여 사용하는 쪽에서 entry를 이용해 자유롭게 사용할 수 있도록 구현했습니다.

### Issue List Pagination

issus 조회 API의 header를 통해 다음 페이지를 추출하여 다음이 어느 페이지인지, 마지막 페이지인지 알 수 있도록 구현했습니다. 페이지 정보를 API 함수의 리턴 값에 포함하고 이러한 API 함수를 paginationFetch로 구분하여 사용하고 있습니다. paginationFetch은 usePaginationFetch와 상호 작용하도록 구현했습니다.

pagination을 도와주는 usePaginationFetch를 구현해 페이지 관리와 fetch에 관한 로직을 관심사 분리 시켰습니다. hook의 인자로 paginationFetch를 받아 fetch와 fetchNextPage 함수를 만들어 상황에 맞는 함수를 사용할 수 있도록 구현했고 paginationFetch의 리턴값을 받아 데이터와 페이지를 hook 내에서 관리할 수 있도록 구현했습니다.

### Issue Detail Page

이슈를 클릭하여 이슈 상세화면으로 넘어갈 경우 router에 issue의 정보를 state에 담아 보내도록 구현했습니다. 상세화면 페이지에서 만약 state를 찾치 못하는 경우 (주소로 바로 접속할 경우)를 고려하여 넘어온 state가 없을 경우 이슈를 조회하는 API 함수를 실행하도록 구현했습니다. 이렇게 구현하면 이슈를 클릭하여 상세화면에 접근할 경우 API를 조회하지 않기 때문에 불필요한 트래픽을 줄일 수 있는 장점이 있습니다.
