// Q6. What will happen if coordinates is missing? How can you prevent errors?

/* 
   প্রশ্ন ৬: যদি অবজেক্টের ভেতর 'coordinates' প্রপার্টিটি না থাকে, তবে কী ঘটবে? এবং এই ধরনের এরর (Error) কীভাবে ঠেকানো যায়?
   উদ্দেশ্য: অপশনাল চেইনিং (Optional Chaining - ?.) এর ব্যবহার শেখা যা আধুনিক জাভাস্ক্রিপ্টে এরর হ্যান্ডলিংয়ের জন্য অত্যন্ত গুরুত্বপূর্ণ।
*/

const locations = {
  /* 
     'city' একটি সাধারণ স্ট্রিং প্রপার্টি।
  */
  city: "Bhopal",

  /* 
     'coordinates' একটি নেস্টেড অবজেক্ট। 
     বাস্তব ক্ষেত্রে অনেক সময় সার্ভার থেকে ডাটা আসার সময় এই প্রপার্টিটি মিসিং থাকতে পারে।
  */
  coordinates: {
    lat: 23.2,
    lng: 77.4,
  },
};

/* 
   অ্যাক্সেস করার নিরাপদ পদ্ধতি (Optional Chaining):
   
   ১. আমরা যদি সরাসরি locations.coordinates.lat লিখি এবং কোনো কারণে 'coordinates' অবজেক্টটি 
      না থাকে (undefined হয়), তবে জাভাস্ক্রিপ্ট একটি "TypeError" দিবে এবং পুরো প্রোগ্রামটি বন্ধ হয়ে যাবে।
   
   ২. এই সমস্যা সমাধানের জন্য আমরা '?' (Question mark) ব্যবহার করি, যাকে বলা হয় Optional Chaining।
   
   ৩. locations?.coordinates এর মানে হলো: জাভাস্ক্রিপ্ট প্রথমে চেক করবে 'locations' আছে কি না। 
      যদি থাকে, তবে সে 'coordinates' খুঁজবে। 
      যদি 'coordinates' থাকে, তবেই সে 'lat' খুঁজবে।
   
   ৪. যদি চেইনের কোনো একটি অংশ (যেমন coordinates) না থাকে, তবে এটি এরর না দিয়ে সরাসরি 'undefined' রিটার্ন করবে। 
      এতে আমাদের কোড ক্র্যাশ করবে না।
*/
console.log(locations?.coordinates?.lat);

/* 
   সারসংক্ষেপ: 
   - ডট নোটেশন (.) সরাসরি ব্যবহার করলে ডাটা না থাকলে এরর দেয়।
   - অপশনাল চেইনিং (?.) ব্যবহার করলে ডাটা না থাকলে এরর না দিয়ে 'undefined' দেখায়।
   - এটি বড় প্রজেক্টে ডাটা অ্যাক্সেস করার সবচেয়ে নিরাপদ উপায়।

   উদাহরণস্বরূপ: 
   যদি locations = { city: "Bhopal" } হতো (অর্থাৎ coordinates নেই), 
   তবে locations.coordinates.lat লিখলে Error আসতো, 
   কিন্তু locations?.coordinates?.lat লিখলে আউটপুট আসবে undefined।
*/
