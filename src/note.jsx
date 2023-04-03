/* component.jsx ফাইলের সাথে component.css ফাইলে যতক্ষণ পর্যন্ত আংটা 
or import না লাগানো হয়,
 ততক্ষণ পর্যন্ত component.css file component.jsx কোন পরিবর্তন করতে পারবে না 
 যদিও এটা খুব ছোট ভুল
   ব্যস্ততার কারণে তাও তো অনেক সময় এই ভুল হয়ে থাকে এসাইনমেন্ট ৮ এর সময় 
   এই ভুলটা খুব প্যারা দিয়েছিল 
 */


/* 
এই useState declare করার মূল কারণ হচ্ছে একজন মানুষ কোন প্রোডাক্ট cart
 করলে কোথাও তো রাখতে হবে, তো কোন কিছু সংরক্ষণ করার জন্যই মূলত 
 এই useState ব্যবহার করা হয় 

যেহেতু এই সাইট থেকে product পছন্দ করে cart করলে  অনেকগুলো productর
 কালেকশন হবে ।  তাই  কালেকশন হলে সেটা একটা array নির্দেশ করে ।  আর 
 সেই array কে useState এ রাখতে হলে empty array প্রয়োজন হবে ।
 কারণ empty array এর মধ্যেই তো cart collection রাখতে হবে । 


*/


/* 2
     useEffect এ 1st প্যারামিটার anonymous function দেয়ার মূল  কারণ হচ্ছে 
    যদি sideEffect এ
    এক বা একাধিকবার  কোন কারণে পরিবর্তন হয় সেজন্য লোড হবে।।
     second প্যারামিটের empty array দেওয়ার মূল কারণ যখন ডাটা লোড হবে 
     তখন দেখাবে যেহেতু empty array তাই কারো উপর নির্ভর করে না 
     সোজা ডাটা লোড করে দেয় 

      console.log(data) এই জায়গায় setProducts দেয়ার মূল কারণ হচ্ছে 
     ftech করা data টাকে সংরক্ষণের জন্য useState 
     এর সাথে set বা সংযুক্ত করে দেওয়া ।

     যদি ঠিক মতো করে সেট হয়ে যায় তাহলে সবগুলো product এর array টা 
     useState এর products এর মধ্যে চলে যাবে 

      set করা data টাকে chack করার জন্য(কনসোল ছাড়া) useState
      এর 1st parameter.length ব্যবহার করতে হবে component এর যে কোন জায়গায় 
 */

/* 3
যেহেতু react unidirectional তাই নিচ থেকে উপরে কিছু পাঠানো যায় না।
তবে চালাকি করে event handler k উপরে নিয়ে যেতে পারি অর্থাৎ যে component  
এ নিলে কাজ হবে ওই component এ অথবা মূল App component এ নেয়া যায়।
 নেওয়ার..............
 পরে props আকারে পাঠিয়ে দিলে ঝামেলা মুক্ত যা ইচ্ছা তাই করা যাবে 
 
 এখানে উদাহরণ হিসেবে যদি বলি তাহলে আমি product.jsx থেকে
  shop.jsx এ নিয়ে গেছি কারণ ওইখানে event handler টা যোগ করলে তারপর cart
  বাটনে ক্লিক করলে সেই ক্লিকটা হবে product.jsx এ এবং handler টা
  পরিবর্তন হবে shop.jsx এ 

*/

/* 4
নরমাল জাভাস্ক্রিপ্টে cart.push(product) এটা সম্ভব কিন্তু react js এ এভাবে
  push সম্ভব না। 
React এ cart.push(product) এভাবে সরাসরি state চেঞ্জ করা যায় না
চেঞ্জ করতে হলে setState এর মাধ্যমে পরিবর্তন করতে হয়।
তাই react এর জন্য নতুন করে array বানাতে হবে অর্থাৎ
react এ নতুন কিছু push করতে চাইলে [... oldArray, newElement ]

*/

/* 5
shop.jsx এ useState এর ব্যবহিত cart  কে Cart.jsx component এ 
 পাঠিয়েছি এখন এই cart k ওই cart.jsx কম্পনেন্টে পাঠাতে হলে props এর 
 মাধ্যমে পাঠাতে হবে 
 */

/*
কোন একটা array এর মধ্যে for in loop চালালে output-এ index সিরিয়াল বা 
index ক্রম পাওয়া  যায়। আবার, 
কোন একটা array এর মধ্যে for of loop চালালে ওই array-র index 
অনুযায়ী elements গুলোকে পাওয়া যায় 

*/


/*
data.json-এ কোন tax এর data নাই তাই ui অনুযায়ী ট্যাক্স এর পরিমাণ
 দেখাতে হলে বিকৃত মূল্যের উপর ইচ্ছামতো একটা শতকরা হিসেবে ধরে tax কে দেখাতে হবে 

*/

