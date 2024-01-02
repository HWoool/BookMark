//
(function(){
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

// 숫자를 수정하는 기능 함수
const modifyNumber = (number) =>{
    // 10보다 작은숫자이면 0을붙여 ex) 04월
    return parseInt(number) < 10 ? "0"+number: number;
}

const getNowDate = ()=>{
    const nowDate = new Date();
    const week = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
    let month = modifyNumber(nowDate.getMonth()+1); // 월
    let date = modifyNumber(nowDate.getDate());     // 일
    let day = nowDate.getDay();                     // 요일
    // console.log(month,date,day);
    setNowDate(month,date,week[day]);
}

const setNowDate = (month,date,day)=>{
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
}

const getNowTime = () =>{
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    // console.log(hour,minute);
    setNowTime(hour,minute);
}

const setNowTime = (hour,minute)=>{
    timeElement.textContent=`${hour}시 ${minute}분`;
}

getNowDate();
getNowTime();
setInterval(getNowTime,1000); // 0.5초간격으로 함수 반복 실행

})();