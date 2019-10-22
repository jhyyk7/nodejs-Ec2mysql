function realTimeWeather() {
    

    // fetch('http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?serviceKey=e0%2BAk2r1HN6uoNO9EdA1Q0tcRJ5G4xLhNOVRDKL5aFgnu2L0%2BypiHgaZ0CjPctzJF%2BtjWNX5cIOMUVWRe7pvQA%3D%3D&base_date=20191007&base_time=0500&nx=60&ny=127&numOfRows=10&pageNo=1&_type=json',{credentials: 'include'}).then(response=>response.json())
    // .then(text=>$('article').html(text));

    fetch('http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?serviceKey=e0%2BAk2r1HN6uoNO9EdA1Q0tcRJ5G4xLhNOVRDKL5aFgnu2L0%2BypiHgaZ0CjPctzJF%2BtjWNX5cIOMUVWRe7pvQA%3D%3D&base_date=20191007&base_time=0500&nx=60&ny=127&numOfRows=10&pageNo=1&_type=json')
      .then(response=>response.json())
      .then(text=>$('article').html(text));
    // var today = new Date();
    // var week = new Array('일','월','화','수','목','금','토');
    // var year = today.getFullYear();
    // var month = today.getMonth()+1;
    // var day = today.getDate();
    // var hours = today.getHours();
    // var minutes = today.getMinutes();
 
    // $('.weather-date').html(month +"월 " + day + "일 " + week[today.getDay()]+"요일");
 
    // /*
    //  * 기상청 30분마다 발표
    //  * 30분보다 작으면, 한시간 전 hours 값
    //  */
    // if(minutes < 30){
    //     hours = hours - 1;
    //     if(hours < 0){
    //         // 자정 이전은 전날로 계산
    //         today.setDate(today.getDate() - 1);
    //         day = today.getDate();
    //         month = today.getMonth()+1;
    //         year = today.getFullYear();
    //         hours = 23;
    //     }
    // }
    
    // /* example
    //  * 9시 -> 09시 변경 필요
    //  */
    
    // if(hours < 10) {
    //     hours = '0'+hours;
    // }
    // if(month < 10) {
    //     month = '0' + month;
    // }    
    // if(day < 10) {
    //     day = '0' + day;
    // } 
 
    // today = year+""+month+""+day;
    
    // /* 좌표 */
    // var _nx = 56, 
    // _ny = 126,
    // apikey = "e0%2BAk2r1HN6uoNO9EdA1Q0tcRJ5G4xLhNOVRDKL5aFgnu2L0%2BypiHgaZ0CjPctzJF%2BtjWNX5cIOMUVWRe7pvQA%3D%3D",    
    // ForecastGribURL = "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData";
    // ForecastGribURL += "?ServiceKey=" + apikey;
    // ForecastGribURL += "&base_date=" + today;
    // ForecastGribURL += "&base_time=" + hours +"00";
    // ForecastGribURL += "&nx=" + _nx + "&ny=" + _ny;
    // ForecastGribURL += "&pageNo=1&numOfRows=7";
    // ForecastGribURL += "&_type=json";



    
}