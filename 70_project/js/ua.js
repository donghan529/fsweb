        /*
            location.href ='url:';
                http://id.dothome.co.kr/index.html -> 데스크탑
                http://id.dothome.co.kr/m/index.html -> 모바일

            String(문자열) 객체
                문자열a.indexOf('문자열b') ~ a에 b가 존재하면 섹인 번호 출력, 아니면 -1
                문자열.toLowerCase() ~ 문자열을 소문자로 변환
        */

        const ua = navigator.userAgent.toLowerCase();

        if (ua.indexOf('window') > 0) {
            // ua에 window 문자열이 있으면 데스크탑
            location.href = 'http://kdh123.dothome.co.kr/index.html';
        } else {
            location.href = 'http://kdh123.dothome.co.kr/m/index.html';
        }