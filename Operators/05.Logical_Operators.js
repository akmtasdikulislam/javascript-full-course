/* 
Logical AND (&&) Operator: 
এটি তখনই true রিটার্ন করে যখন এর দুই পাশের সব শর্ত বা ভ্যালু সত্য (true) হয়। 
যদি একটিও false হয়, তবে পুরো ফলাফল false হবে। 
*/

/* উভয় ভ্যালু true, তাই ফলাফল true আসবে। */
console.log(true && true);

/* একটি ভ্যালু false হওয়ায় AND অপারেটর পুরো ফলাফল false করে দিয়েছে। */
console.log(true && false);

/* প্রথম ভ্যালু false হওয়ায় এটি আর পরেরটি চেক না করেই false রিটার্ন করবে। */
console.log(false && true);

/* উভয় ভ্যালু false, তাই ফলাফল false। */
console.log(false && false);


/* 
Logical OR (||) Operator: 
এটি তখনই true রিটার্ন করে যখন এর যেকোনো একটি শর্ত বা ভ্যালু সত্য (true) হয়। 
শুধুমাত্র তখনই false রিটার্ন করে যখন সবকটি ভ্যালু false হয়। 
*/

/* এখানে প্রথম ভ্যালু true, তাই OR অপারেটর সরাসরি true রিটার্ন করবে। */
console.log(true || true);

/* একটি ভ্যালু true আছে, তাই ফলাফল true আসবে। */
console.log(true || false);

/* এখানেও একটি ভ্যালু (দ্বিতীয়টি) true, তাই ফলাফল true। */
console.log(false || true);

/* এখানে কোনো ভ্যালুই true নয়, তাই ফলাফল false আসবে। */
console.log(false || false);


/* 
Logical NOT (!) Operator: 
এটি কোনো বুলিয়ান মানকে উল্টে দেয়। 
অর্থাৎ true-কে false এবং false-কে true বানিয়ে দেয়। 
*/

/* true-এর আগে '!' থাকায় এটি মানটিকে উল্টে false করে দিয়েছে। */
console.log(!true);

/* false-এর আগে '!' থাকায় এটি মানটিকে উল্টে true করে দিয়েছে। */
console.log(!false);

/* 
Double NOT (!!) Operator (Extra Note): 
এটি কোনো ভ্যালুকে তার প্রকৃত বুলিয়ান (Boolean) রূপে রূপান্তর করতে ব্যবহৃত হয়। 
*/
/* 
এখানে ১২ একটি truthy ভ্যালু। 
প্রথম '!' ১২-কে false করে, আর দ্বিতীয় '!' সেই false-কে আবার true করে দেয়। 
*/
console.log(!!12);
