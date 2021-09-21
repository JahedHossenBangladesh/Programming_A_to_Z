let word = "You are my life";
let count = 0;

for (let i = 0; i < word.length; i++){
    word[i] == " " && count++; }
    count++;
console.log(count);//3 

// Function for word count 
function wordCountByBro(str){
    let count = 0;
    for ( let i = 0; i < str.length;i++){
        if(str[i] == " ") count++
    }
    count ++;
    return count;
}
let wordByYou = wordCountByBro("I Love Her everything")
console.log(`word is function ${wordByYou}`)



// The Short cut
let shortCut = word.match(/(\w+)/g).length;
console.log(shortCut); //4



// StackOver flow

function countWords(str){
    let count = 0 ;
    var words = str.split(" ");
    for (let i = 0; i < words.length; i++){
        if(words[i] !="") count++;
    }
 
    return count 
}
let a = countWords("You are my life");
console.log(a); //3


// find the sentence 

function findTheSentence(str){
    let count = 0;
    for(let i = 0 ; i< str.length; i ++){
        // str[i] == "." || '!' || '?' && count++;
        if(str[i] == "." || str[i] == "!" || str[i] == "?"){
            count++;
        }
    }
    // count ++;
    return count;
}
let writeASentence = findTheSentence("I love you.I Love your Family. YOur mom. your ded all of you. but who are you Baby?");

console.log(`total sentence is ${writeASentence} `);