/* 
typeof অপারেটর মূলত প্রিমিটিভ ডাটা টাইপ (যেমন: number, string, boolean, undefined, symbol, bigint) 
এবং ফাংশন শনাক্ত করতে ব্যবহৃত হয়। 
*/

/* ১২ একটি সংখ্যা, তাই এটি 'number' রিটার্ন করবে। */
console.log(typeof 12);

/* কোটেশনের ভেতরে থাকা যেকোনো কিছু স্ট্রিং, তাই এটি 'string' রিটার্ন করবে। */
console.log(typeof "string");

/* 
JavaScript-এ অ্যারে ([]) আসলে এক ধরণের অবজেক্ট। 
তাই typeof ব্যবহার করলে এটি 'object' রিটার্ন করে, যা সুনির্দিষ্ট নয়। 
*/
console.log(typeof []);

/* খালি অবজেক্টের টাইপ চেক করলে 'object' পাওয়া যায়। */
console.log(typeof {});

/* ফাংশনের ক্ষেত্রে typeof সরাসরি 'function' রিটার্ন করে। */
console.log(typeof function () {});

/* 
এটি JavaScript-এর একটি ঐতিহাসিক ভুল (bug); null-এর টাইপ চেক করলে 'object' দেখায়। 
*/
console.log(typeof null);

/* 
NaN (Not a Number) গাণিতিকভাবে সংখ্যা না হলেও, ডাটা টাইপ হিসেবে এটি 'number'। 
*/
console.log(typeof NaN);

/* সিম্বল ডাটা টাইপের জন্য এটি 'symbol' রিটার্ন করে। */
console.log(typeof Symbol("uid"));

/* বড় সংখ্যার শেষে 'n' থাকলে সেটি BigInt হিসেবে ধরা হয়, তাই এটি 'bigint' রিটার্ন করে। */
console.log(typeof 12n);

/* 
instanceof অপারেটর: 
এটি চেক করে যে একটি অবজেক্ট নির্দিষ্ট কোনো কনস্ট্রাক্টর বা ক্লাসের কি না। 
এটি মূলত রেফারেন্স টাইপ (Array, Object, Function) শনাক্ত করতে বেশি কার্যকর। 
*/

let a = [];
let b = {};
let c = function () {};
let d = 12;

/* 
typeof দিয়ে অ্যারে চেক করলে 'object' আসে, কিন্তু instanceof দিয়ে চেক করলে 
নিশ্চিত হওয়া যায় যে এটি একটি 'Array'। তাই এটি true রিটার্ন করবে। 
*/
console.log(a instanceof Array);

/* 
যেহেতু 'b' একটি অবজেক্ট, তাই এটি Object ক্লাসের অন্তর্ভুক্ত। এটি true রিটার্ন করবে। 
*/
console.log(b instanceof Object);

/* 
ফাংশনও এক ধরণের অবজেক্ট, তবে এটি Function কনস্ট্রাক্টর থেকে তৈরি হয়। 
তাই এটি true রিটার্ন করবে। 
*/
console.log(c instanceof Function);

/* 
এখানে 'd' একটি প্রিমিটিভ নাম্বার (primitive number)। 
instanceof শুধুমাত্র অবজেক্টের ক্ষেত্রে কাজ করে। 
যেহেতু ১২ কোনো Number অবজেক্ট নয় (বরং লিটারাল), তাই এটি false রিটার্ন করবে। 
*/
console.log(d instanceof Number);

/* 
সারাংশ: 
১. সাধারণ ডাটা টাইপ চেক করতে typeof ব্যবহার করুন। 
২. কোনো ভ্যালু অ্যারে কি না বা নির্দিষ্ট কোনো অবজেক্ট কি না তা নিশ্চিত হতে instanceof ব্যবহার করুন। 
*/
