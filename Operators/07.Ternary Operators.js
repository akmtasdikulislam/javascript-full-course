/* 
Ternary Operator (? :) হলো if-else এর একটি সংক্ষিপ্ত রূপ। 
এর গঠন হলো: condition ? expression_if_true : expression_if_false;

এখানে ১২ কি ১৩-এর চেয়ে বড়? শর্তটি মিথ্যা (false)। 
যেহেতু শর্তটি মিথ্যা, তাই '?' এর পরের অংশ কাজ না করে ':' এর পরের অংশ অর্থাৎ console.log(false) কাজ করবে।
*/
12 > 13 ? console.log(true) : console.log(false);

/* 
এখানে ১২ কি ১৩-এর চেয়ে ছোট? শর্তটি সত্য (true)। 
যেহেতু শর্তটি সত্য, তাই '?' এর ঠিক পরের অংশ অর্থাৎ console.log(true) এক্সিকিউট হবে। 
':' এর পরের অংশটি আর কাজ করবে না।
*/
12 < 13 ? console.log(true) : console.log(false);
