// 즉시실행함수
(function () {


/*
    // 변수 소개

    var msg; // 변수를 선언했다
    msg = "var msg"; // 변수 안에 데이터를 넣는 행위 > 변수를 초기화했다
    console.log(msg); // 확인하고 싶은 때는 콘솔 



    var name = "yunjoo"; // 변수 선언과 함께 초기화, 실무에 많이 씀
    console.log(name);

    // 자바스크립트 변수명 표기명
    var widthTable; //
    var width_table; //width_table 형식은 사용안함
    var $test = $("#test"); // 달러 기호는 제이쿼리로 사용했다는걸 알려줌  


    var a, b, c; //변수 여러개일때 한줄로
    var d = 10, e = 20, f = 30; // 변수 여러개를 선언하면서 초기화 
    var d = 10, 
        e = 20, 
        f = 30;



    // 원시타입 : 문자열
    var msg1 = "Hello Text!";

    console.log(msg1);

    // 문자열 작은 따옴표 사용 할때 
    var msg3 = "She's girl";
    var msg4 = 'She\'s girl';
    
    console.log(msg3);
    console.log(msg4);
   

    // 원시타입 : 숫자
   
    var int = 10;
    var flo = 5.25;
    console.log(int + flo);
    

    // 에러 찾을때 유용하게 사용됨, 
    var msg5 = "10";
    
    console.log()


    // 연산자 (1)
    var a = 20;
    var b = 10;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);


    var first = "yunjoo";
    var last = "jo";
    console.log(first + last + 7);
    console.log(first + " " + last + 7); // 빈공백도 문자열로 인식, 요즘은 자주 사용하진 않음


    // 연산자 (2)
    var num1 = 10;

    console.log(--num1); // 9
    console.log(--num1); // 8
    console.log(++num1);
    
    console.log(num1--); // 연산자가 뒤에 붙었을 때는 한 텀 쉬고 출력됨
    console.log(num1); // 10

    // 팁 - 변수안에 있는 데이터는 얼마든지 바꿀수 있음

    var box1 = "Box";
    console.log(box1);

    box1 = "Data Change";
    console.log(box1);



   //  +=, -=, *=, /=, %=  자기 자신을 연산하고 싶을 때
    var num2 = 20;
    num2 += 40; //num2=num2+40; 와 같은 의미
    console.log(num2);







    // 비교 연산자
    
    var a = 10;
    var b = 20;
    var c = 10;

    console.log( a === b); // 같은지  에러없이 사용하려면 등호 3개 추천
    console.log( a !== b); // ! 다른지
    console.log( a > b);   
    console.log( a < b);
    console.log( a >= b)
    console.log( a <= b)



    // 논리 연산자
    console.log( a === b && a === c); // and  둘 다 참일 경우에 ex) 회원가입에 이용
    console.log( a === b || a === c); // more 둘중 하나라도 있는 경우

    var num10 = 10 ;
    var str10 = "10";
    console.log(num10 == str10); // 등호 2개는 값만 중요
    console.log(num10 === str10); // 등호 3개는 데이터 타입을 따짐
 


    // 원시타입 : 불리언 true , false

    console.log(true);
    console.log(false);
    console.log(1 === 2);
    console.log(1 < 2);

*/



    // 원시타입 : null, undefined
    var n = null; // 빈상태로 알려주고 있음
    var u;        // 변수의 자료형이 정해지지 않았음

    // console.log(n);
    // console.log(u);

    console.log(typeof "str");
    console.log(typeof 10);
    console.log(typeof n); // null은 object로 출력되는건 버그 
    console.log(typeof u);

    console.log(n == u);
    console.log(n === u);

    console.log(!n);  // true null을 부정하면 boolean 타입이 됨
    console.log(!!n); // false
    
    console.log(!u);  // true
    console.log(!!n); // false

    console.log(1 + n);  // 숫자 데이터와 연산이 되면 null = 0
    console.log(1 + u);  // =  NaN 숫자가 아니다 


    // 참조타입 : 함수
       




    // 참조타입 : 배열
    /*
    var fruit = ["apple", "banana", "tomato"];

    console.log(fruit);

    // console.log(fruit[0]);
    // console.log(fruit[1]);
    // console.log(fruit[2]);
    */







    // 참조타입 : 객체
    /*
    var student = {
        name : "inkweon",
        age : 31,
        skills : [‘JavaScript’, ‘HTML’, ‘CSS’]
    };

    console.log(student);
    */







    // 배경 컬러 체인지 실행  코드

    var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];

    var screen = document.getElementById('screen');
    var mouse = document.getElementById('mouse');

    mouse.addEventListener('click', function() {

        var random = Math.floor(Math.random() * colors.length);
        screen.style.background = colors[random];

    });




})();



















