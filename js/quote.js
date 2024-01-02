//
(function(){
    const API_URL="https://random-quote.hyobb.com/";
console.log("명언:"+API_URL);
const quoteElement = document.getElementById("quote");
const quoteItem = localStorage.getItem("quote");

const nowDate = new Date();
const month = nowDate.getMonth()+1;
const date = nowDate.getDate();

const setQuote = (result)=>{
    let quote = {createDate: `${month}-${date}`,quoteData:result};
    localStorage.setItem("quote",JSON.stringify(quote));
    quoteElement.textContent=`"${result}"`;
}

const getQuote = async()=>{
    try{
        const data = await fetch(API_URL).then((res)=>res.json());
        const result = data[1] && data[1].respond;
        setQuote(result);
    } catch(err) {
        console.log(`err:${err}`);
        setQuote("작은 기회로 부터 종종 위대한 업적이 시작된다.");    
    }
    
}

if(quoteItem){
   let {createDate, quoteData} = JSON.parse(quoteItem);
   if(createDate === `${month}-${date}`){
        quoteElement.textContent=`"${quoteData}"`;
   } else {
    getQuote();
   }
}else{
getQuote();
}
})();