/*
  JavaScript-এ প্রতিটি ভ্যালুর একটি সহজাত Boolean value থাকে। 
  যাদের মান 'false' এর মতো আচরণ করে তাদের Falsy বলা হয়, আর বাকি সব Truthy।
  নিচে বিস্তারিত ব্যাখ্যা দেওয়া হলো:
*/

/* 
  !!0: 
  ০ (zero) একটি falsy ভ্যালু। 
  প্রথম '!' একে true করে, দ্বিতীয় '!' পুনরায় false করে দেয়। 
  এর মাধ্যমে আমরা ভ্যালুটির আসল boolean প্রকৃতি যাচাই করি।
*/
console.log(!!0);    // false

/* 
  !!"": 
  একটি খালি স্ট্রিং (Empty String) সবসময় falsy হয়। 
  ভিতরে কোনো স্পেস বা ক্যারেক্টার না থাকায় এটি false রিটার্ন করে।
*/
console.log(!!"");    // false

/* 
  !!null: 
  null মানে হলো কোনো ভ্যালু নেই (intentional absence)। 
  এটি জাভাস্ক্রিপ্টে একটি falsy ভ্যালু হিসেবে গণ্য হয়।
*/
console.log(!!null);    // false

/* 
  !!NaN: 
  NaN এর পূর্ণরূপ Not-a-Number। 
  গাণিতিক ভুল বা অবৈধ ক্যালকুলেশনের ফলে এটি তৈরি হয় এবং এটি একটি falsy ভ্যালু।
*/
console.log(!!NaN);    // false

/* 
  !!document.all: 
  এটি একটি বিশেষ অবজেক্ট যা পুরনো ব্রাউজারের জন্য ব্যবহৃত হতো। 
  আধুনিক জাভাস্ক্রিপ্টে এটিকে falsy হিসেবে ধরা হয়।
*/
console.log(!!document.all);    // false

/* 
  !!undefined: 
  যখন কোনো ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু মান দেওয়া হয় না, তখন সেটি undefined থাকে। 
  এটিও একটি falsy ভ্যালু।
*/
console.log(!!undefined);    // false

/* 
  Boolean(-1):
  আগের কোডে `if(-1)` সরাসরি console.log-এর ভেতরে ভুল ছিল (Syntax Error)। 
  এখানে -1 একটি truthy ভ্যালু। 
  মনে রাখতে হবে: ০ বাদে সকল পজিটিভ এবং নেগেটিভ সংখ্যাই truthy।
  নিচে Boolean() ফাংশন ব্যবহার করে এটি চেক করা হলো।
*/
if (-1) {
    console.log(true); // এটি প্রিন্ট হবে কারণ -1 একটি truthy ভ্যালু
} else {
    console.log(false);
}