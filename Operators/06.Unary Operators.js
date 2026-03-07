/* 
Unary Plus (+) Operator: 
এটি একটি স্ট্রিংকে নাম্বারে রূপান্তর করার চেষ্টা করে। 
এখানে "5" একটি স্ট্রিং, কিন্তু এর আগে '+' থাকায় এটি নাম্বার ৫-এ পরিণত হয়েছে। 
*/
console.log(+"5"); // 5

// But if we try to convert a text string to number, it will return NaN.
/* 
যদি স্ট্রিংটি কোনো সংখ্যা না হয়ে সাধারণ টেক্সট হয়, তবে সেটি নাম্বারে রূপান্তর হতে পারে না। 
তাই ফলাফল হিসেবে NaN (Not a Number) আসে। 
*/
console.log(+"harsh"); // NaN

/* 
Unary Minus (-) Operator: 
এটি কোনো সংখ্যার মানকে নেগেটিভ বা ঋণাত্মক করে দেয়। 
*/
console.log(-5); // -5

/* 
Logical NOT (!) Operator: 
এটি কোনো ভ্যালুর বুলিয়ান মানকে উল্টে দেয়। 
যেহেতু ১২ একটি truthy ভ্যালু, তাই '!' ব্যবহারের ফলে এটি false হয়ে গেছে। 
*/
console.log(!12); // false

/* 
typeof Operator: 
এটি কোনো ভ্যালু বা ভ্যারিয়েবলের ডাটা টাইপ কী, তা জানতে ব্যবহৃত হয়। 
১২ একটি সংখ্যা, তাই এটি 'number' রিটার্ন করছে। 
*/
console.log(typeof 12); // 'number'

/* 
JavaScript-এ NaN (Not a Number) এর ডাটা টাইপও 'number' হিসেবে গণ্য করা হয়। 
*/
console.log(typeof NaN); // 'number'

/* 
কোটেশনের ভেতরে থাকা যেকোনো কিছু স্ট্রিং, তাই এটি 'string' রিটার্ন করছে। 
*/
console.log(typeof "string"); // 'string'

/* 
এখানে 'a' একটি খালি অবজেক্ট এবং 'b' একটি ইউনিক সিম্বল। 
*/
let a = {};
let b = Symbol("uid");

/* 
অবজেক্টের টাইপ চেক করলে 'object' পাওয়া যায়। 
*/
console.log(typeof a); // 'object'

/* 
এটি JavaScript-এর একটি পুরনো বাগ (bug); null-এর টাইপ চেক করলে 'object' দেখায়। 
*/
console.log(typeof null); // 'object'

/* 
সিম্বল ডাটা টাইপের জন্য এটি 'symbol' রিটার্ন করে। 
*/
console.log(typeof b); // 'Symbol'

/* 
বড় সংখ্যার শেষে 'n' থাকলে সেটি BigInt হিসেবে ধরা হয়। 
*/
console.log(typeof 12n); // 'bigint'

/* 
Increment Operator (++) 
*/
let c = 12;

/* 
Prefix Increment (++c): 
এটি প্রথমে ভ্যারিয়েবলের মান ১ বাড়িয়ে দেয়, তারপর সেটি ব্যবহার বা প্রিন্ট করে। 
তাই ১২ থেকে বেড়ে ১৩ হয়েছে এবং ১৩-ই প্রিন্ট হয়েছে। 
*/
console.log(++c); // 13

/* 
Postfix Increment (c++): 
এটি প্রথমে বর্তমান মানটি ব্যবহার বা প্রিন্ট করে, তারপর মান ১ বাড়ায়। 
এখানে 'c' এর বর্তমান মান ১৩ প্রিন্ট হয়েছে, কিন্তু মেমোরিতে এটি বেড়ে ১৪ হয়ে গেছে। 
*/
console.log(c++); // 13

/* 
আগের লাইনে Postfix Increment হওয়ার কারণে এখন 'c' এর মান ১৪। 
*/
console.log(c); // 14
