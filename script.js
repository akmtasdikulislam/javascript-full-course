// Predict the result of the following

// Q1. true+false
/* 
এখানে true এর সংখ্যাগত মান ১ এবং false এর মান ০ ধরা হয়। 
যোগ করার সময় JavaScript এদেরকে নাম্বারে রূপান্তর করে ফেলে (Type Coercion), 
তাই ১ + ০ = ১ আউটপুট আসে। 
*/
console.log(true + false); // 1

//Q2. null + 1
/* 
null যখন কোনো গাণিতিক অপারেশনে ব্যবহৃত হয়, তখন JavaScript একে ০ হিসেবে গণ্য করে। 
তাই ০ + ১ যোগ হয়ে ফলাফল ১ পাওয়া যায়। 
*/
console.log(null + 1); // 1

// Q3. 5 + "5"
/* 
এখানে একটি নাম্বার (5) এবং একটি স্ট্রিং ("5") যোগ করা হচ্ছে। 
JavaScript-এ যখনই কোনো নাম্বারের সাথে স্ট্রিং যোগ করা হয়, তখন সেটিকে 
যোগ না করে পাশাপাশি বসিয়ে দেয় (Concatenation)। তাই ফলাফল হয় "55"। 
*/
console.log(5 + "5"); // 55

// Q4. !!undefined
/* 
undefined একটি 'falsy' ভ্যালু।
*/

console.log(!!undefined); // false
