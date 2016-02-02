# Gmkt.Resize.Iframe
https://github.com/Guide-Line/Gmkt.Resize.Iframe

## Summary
- G페이지내 Iframe접근시 Cross-Domain문제 해결을 위한 폴러그인
- 클라이언트에서 작동 안함
- 대상 Iframe 경로가 G페이지가 아닐때 작동 안함

## Upates

- Version 0.1.160202 : 플러그인 Github 공개


## Usage


#### Step1. index.html `<head></head>` 추가
```html

<!-- Library :: 라이브러리 -->
<script type="text/javascript" src="lib/jquery-1.9.1.min.js"></script>
<!-- Plug-in :: 플러그인 -->
<script type="text/javascript" src="src/gmkt.resize.iframe.js"></script>

```

#### Step2. 플러그인 호출
```javascript

$(document).ready(function(){

	$(document).ready(function(){

		$("#ifr_sns").GmktResizeIframe({
			type : "sns" // default;
		});
		
	});

});

```

## Demos

- http://event.gmarket.co.kr/html/CD_Common/resize/index.html

