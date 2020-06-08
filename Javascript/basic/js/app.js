// 즉시실행함수
(function () {


/*
    // 변수 소개

        var msg;                        // 변수를 선언했다
        msg = "var msg";                // 변수 안에 데이터를 넣는 행위 > 변수를 초기화했다
        console.log(msg);               // 확인하고 싶은 때는 콘솔 

        var name = "yunjoo";            // 변수 선언과 함께 초기화, 실무에 많이 씀
        console.log(name);



    // 자바스크립트 변수명 표기명

        var widthTable; 
        var width_table;                // width_table 형식은 사용안함
        var $test = $("#test");         // $ 기호는 제이쿼리로 사용했다는걸 알려줌  


        var a, b, c;                    //변수 여러개일때 한줄로
        var d = 10, e = 20, f = 30;     // 변수 여러개를 선언하면서 초기화 
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
        

        // 에러 찾을때 유용하게 사용됨

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
        console.log(first + " " + last + 7);        // 빈공백도 문자열로 인식, 요즘은 자주 사용하진 않음




    // 연산자 (2)

        var num1 = 10;

        console.log(--num1); // 9
        console.log(--num1); // 8
        console.log(++num1);
        
        console.log(num1--);            // 연산자가 뒤에 붙었을 때는 한 텀 쉬고 출력됨
        console.log(num1);              // 10

        // 팁 - 변수안에 있는 데이터는 얼마든지 바꿀수 있음

        var box1 = "Box";
        console.log(box1);

        box1 = "Data Change";
        console.log(box1);




   //  +=, -=, *=, /=, %=  자기 자신을 연산하고 싶을 때

        var num2 = 20;
        num2 += 40;                     //num2=num2+40; 와 같은 의미
        console.log(num2);




    // 비교 연산자
    
        var a = 10;
        var b = 20;
        var c = 10;

        console.log( a === b);          // 같은지  에러없이 사용하려면 등호 3개 추천
        console.log( a !== b);          // ! 다른지
        console.log( a > b);   
        console.log( a < b);
        console.log( a >= b)
        console.log( a <= b)



    // 논리 연산자

        console.log( a === b && a === c);       // and  둘 다 참일 경우에 ex) 회원가입에 이용
        console.log( a === b || a === c);       // more 둘중 하나라도 있는 경우

        var num10 = 10 ;
        var str10 = "10";
        console.log(num10 == str10);            // 등호 2개는 값만 중요
        console.log(num10 === str10);           // 등호 3개는 데이터 타입을 따짐
 


    // 원시타입 : 불리언 true , false

        console.log(true);
        console.log(false);
        console.log(1 === 2);
        console.log(1 < 2);




    // 원시타입 : null, undefined

        var n = null;                    // 빈상태로 알려주고 있음
        var u;                           // 변수의 자료형이 정해지지 않았음

        // console.log(n);
        // console.log(u);

        console.log(typeof "str");
        console.log(typeof 10);
        console.log(typeof n);           // null은 object로 출력되는건 버그 
        console.log(typeof u);

        console.log(n == u);
        console.log(n === u);

        console.log(!n);                  // true null을 부정하면 boolean 타입이 됨
        console.log(!!n);                 // false
        
        console.log(!u);  // true
        console.log(!!n); // false

        console.log(1 + n);               // 숫자 데이터와 연산이 되면 null = 0
        console.log(1 + u);               // =  NaN 숫자가 아니다 




    // 참조타입 : 함수

        // 함수 선언 
        function foo(){
            console.log("Call Foo");
        }

        // 함수 호출
        foo();
        
        function printName(name, a){            // name = 매개변수 
        var fullName = name + a;
        console.log(fullName);
        }

        // printName("yunzu", "jojo");          // yunzu = 함수를 호출할때 입력되는 값을 '인자','인수' = argument
        // printName();                         // name의 디폴트는 undefined   Q : 

        
        function yourAge(age) {
            // console.log(age + "살 입니다.");
            var result = age + "살입니다."; 
            // return age + "살입니다.";        // return 다른 변수한테 결과를 전달하고 싶을때 사용
            
            console.log("Before Return");
            return result;
            console.log("Close Return");        // return은 함수를 종료 시킨다는 의미도 있음

        }

        yourAge(20);

        // console.log(yourAge(20));  
        // var age = yourAge(20);
        // console.log(age);          



    // 참조타입 : 배열  = 하나의 변수 안에 여러개의 데이터를 넣을수 있음

        var fruit = ["apple", "banana", "mango"];      // 같은 타입, 성격의 데이터가 좋다

        console.log(fruit);

        // console.log(fruit[0]);              // 대괄호[] 안에 데이터의 위치값 0을 넣어줌
        // console.log(fruit[1]);
        // console.log(fruit[2]);

        // 배열 안의 데이터에 접근을 할수 있다면, 데이터를 변경할 수도 있다
        // fruit[0] = "Text";
        // console.log(fruit);

        // 배열 안의 배열에 접근
        var scores = [
            [10, 20, 30],
            [100, 200, 300]
        ];

        console.log(scores);
        console.log(scores[1] [1]);
        console.log(scores[0] [1]);             // 배열의 1번째, 2번의 데이터 출력




    // 참조타입 : 객체

        var student = {
            name : "yunzu",
            age : 20,
            skills : ['JavaScript', 'HTML', 'CSS'],
            sum : function(a, b) {            // 객체안에 들어가있는 함수는 메서드
                console.log(a + b);
            }
        };

        console.log(student);
        console.log(student['name']);         // [] 사용하는 방법, 접근하고자 하는 key 값을 넣어줌 
        console.log(student.age);             // student.property
        student.age = 100; 
        student.sum(10, 20);                  // student 안에 있는 sum 메서드를 호출해라
        console.log()



    // 원시타입과 참조타입의 차이점 (중요)
        // 원시 타입 - 원본 데이터를 바꿔도 복사본 데이터는 변함없음
        var str1 = "Hello";
        var str2 = str1;                      // 변수 자체를 데이터로 전달 가능
        console.log(str2);
        // 원본 데이터를 변경했을 때, 원본 데이터를 할당받은 변수 안의 데이터를 따짐
        str1 = "Nice";


        // 참조 타입 - 원본 데이터를 바꾸면 복사본 데이터도 변경
        var obj1 = { name: "jo"};
        var obj2 = obj1;
        obj1.name = "zu";

        console.log(obj2);
        console.log(obj2);

        var obj3 = {name: "Kim"};       // obj3 주소
        var obj4 = {name: "Kim"};       // obj4 주소

        console.log(obj3 === obj4);     // 가르키는 주소가 다르기 때문에 false

    



    // 배경 컬러 체인지 실행  코드

        var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];

        var screen = document.getElementById('screen');
        var mouse = document.getElementById('mouse');

        mouse.addEventListener('click', function() {

            var random = Math.floor(Math.random() * colors.length);
            screen.style.background = colors[random];

        });
*/
        
        var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];

        var screen = document.getElementById('screen');
        var mouse = document.getElementById('mouse');

        // console.log(screen);
        // console.log(mouse);

        // 마우스를 클릭했을 때
        mouse.addEventListener('click', function(){       // 익명함수 = 이름이 없는 함수 , 콜백함수 = 어떤 조건에 따라 자동으로 실행되는 함수
            
            console.log("btnClick");
        });




})();



















