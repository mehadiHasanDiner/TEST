const newObj = {
  name: "Alu miah",
  age: 40,
  job: "business",
  hobby: "Reading Book",
  education: "BBA",
  income: 7000,
};

for (const featuresName in newObj) {
  //   console.log(features);
  const features = newObj[featuresName];
  console.log(featuresName + ": " + features);
}

// এখানে featuresName হচ্ছে Property / Key  এবং features হচ্ছে Value

// Property / Key কে আলাদা করতে হয় for in লুপ দিয়ে।

// তাহলে Value কে সেট করতে হয় অবজেক্টের নামের সাথে [] এই ব্রাকেটে Property লিখে ‍ু।
