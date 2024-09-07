function slugify(title) {
let slug = "";
const slugLower = title.toLowerCase();

for (let i = 0; i < slugLower.length; i++) {
   if (slugLower[i] === " ") {
   slug += "-";   
    } else {
        slug += slugLower[i];
    }   
} 
return slug;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

