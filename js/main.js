//tgian het han
const deadline = "2021/07/01"

function getTime(){
    //const now = Date.now();
    const deadLineDate = new Date(deadline)
    const now =new Date();//lay tg hien tai

    //kcach giua 2 ngay
    const distant = (deadLineDate - now)/1000; //giay
    console.log(distant);//mili giay

    //days
    const days = Math.floor (distant / 3600 / 24 ) ;
    const hours = Math.floor (distant / 3600) % 24 ;
    const mins = Math.floor (distant / 60 )  % 60;
    const secs = Math.floor (distant)  % 60;

    //render HTML
    $(".time-days").text(days);
    $(".time-hours").text(hours);
    $(".time-mins").text(mins);
    $(".time-secs").text(secs);
}

// setInterval(getTime("2021/07/01"),1000);
setInterval(() => {
    getTime("2021/07/01");
},1000);