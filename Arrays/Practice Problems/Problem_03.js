// Q3. Sort the following array alphabetically and then reverse it:

/* 
   এখানে 'names' নামে একটি অ্যারে তৈরি করা হয়েছে যাতে চারটি স্ট্রিং (নাম) রয়েছে।
   আমাদের লক্ষ্য হলো এই নামগুলোকে প্রথমে বর্ণানুক্রমিকভাবে (A-Z) সাজানো এবং তারপর সেটিকে উল্টে দেওয়া (Z-A)।
*/
let names = ["Zara", "Arjun", "Mira", "Bhavya"];

/* 
   এখানে মেথড চেইনিং (Method Chaining) ব্যবহার করা হয়েছে:
   
   ১. names.sort(): 
      sort() মেথড অ্যারের উপাদানগুলোকে ডিফল্টভাবে বর্ণানুক্রমিকভাবে (Alphabetically) সাজায়। 
      এটি করার পর অ্যারেটি হবে: ["Arjun", "Bhavya", "Mira", "Zara"]।
   
   ২. .reverse(): 
      sort() করার পর প্রাপ্ত রেজাল্টের ওপর reverse() মেথড চালানো হয়েছে। 
      এটি অ্যারের বর্তমান ক্রমটিকে সম্পূর্ণ উল্টে দেয়। 
      ফলে চূড়ান্ত ফলাফল হবে: ["Zara", "Mira", "Bhavya", "Arjun"]।

   মনে রাখতে হবে, sort() এবং reverse() উভয় মেথডই মূল অ্যারে (Original Array) পরিবর্তন করে ফেলে।
   console.log() এর মাধ্যমে আমরা চূড়ান্ত আউটপুটটি দেখতে পাচ্ছি।
*/
console.log(names.sort().reverse());
