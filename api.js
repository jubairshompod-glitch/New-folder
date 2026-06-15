

// এখন আমি জাভাস্কিপ্ট  এ কিভাবে এপিআই কল করে, ডাটা আপডেট করে, ডাটা পাঠায়, ডাটা ডিলিট করে সেই প্রোজেক্ট করব 

//প্রথমে আমরা একটা ফ্রি এপিআই উআরএল নিবো  https://jsonplaceholder.typicode.com/todos

//সেটা পোস্টম্যান দিয়ে চেক দিবো ঠিক আছে কিনা 

//তারপর প্রথমে ডাটা গেট করা শিখব 



//ডাটা গেট 


//  async function getData(){

//     try{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await response.json();
//     console.log(data);
//     console.log(response.status);

//     }catch(erro){
//         console.log(erro)
        
//     }
//  }

//  getData();


 //এখানে ‍ async /await ব্যাবহার করা হয়েছে কারণ ডাটা অনলাইন থেকে আসবে সময় লাগবে এই জন্যে 

//fetch ম্যাথড ব্যবহার করা হয় এপিআই কে কল করার জন্যে 



//আরেকভাবে এপিআই কল করা যায় 

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response=>response.json())
// .then(data=> console.log(data))
// .catch(error=>console.log(error));

//এখানে fetch() Api তে রিকুয়েস্ট পাঠায়
//সেটা response ভেরিয়েবল এ আসে

//json()ম্যথড দিয়ে ডাটা জেসন ডাটায় কনর্ভাট হয় 



//এখন আমরা শিখব কিভাবে সাভার্রে ডাটা পাঠানো হয় 


fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "My First Post",
    body: "Hello API",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data));