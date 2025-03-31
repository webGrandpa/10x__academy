//BMI Calculator
function bmiCalculator(name, weight, height){
    let bmi = weight / (height * height);
    return `${name}'s BMI is ${bmi}`;
}
console.log(bmiCalculator("John", 78, 1.69));
//პირობაში მოცემული ამოხსნის წესი სადაც გვეუბნება რომ შექმენით კონკრეტული
//ადამიანისთვის ცვლადიო არ იყო სწორი გადაწყვეტილება, მაგ შემთხვევაში ჩვენ
//უბრალოდ ყოველი ადამიანის BMI-ს შექმნა მოგვიწევს ვისიც უნდა გამოვთვალოთ,
//ამ ფუნქციის დახმარებით კი ცვლადებით დატვირთვა არ მოგვიწევს კოდის და 
//ნებისმიერი ადამიანის BMI-ს გამოვთვლით უბრალოდ არგუმენტებით.

//BMI Calculator 2
let markMass = 78;
let markHeight = 1.69;
let bmiMark = markMass / (markHeight * markHeight);
let johnMass = 95;
let johnHeight = 1.88;
let bmiJohn = johnMass / (johnHeight * johnHeight);
function whosBmiBigger(bmi1, bmi2){
    if (bmiMark > bmiJohn){
        console.log(`Marks BMI is bigger: ${bmiMark}`)
    } else if (bmiJohn > bmiMark){
        console.log(`Johnss BMI is bigger: ${bmiJohn}`)
    } else {
        console.log(`Both BMI equal\n ${bmiMark} vs ${bmiJohn}`);
    }
}
//შესრულებულია პირობაში მიხედვით

//exercise 3 gymnastics teams
function firstResult(){
    let dolphinsAvarage = (96 + 108 + 89) / 3;
    let koalasAvarage= (88 + 91 + 110) / 3;
    let result = (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) 
    ? "Dolphins are winners" : 
    (dolphinsAvarage < koalasAvarage&& koalasAvarage>= 100) ? "Koalas are winners" 
    :(dolphinsAvarage == koalasAvarage) ? "they both have equal scores"
    :"they dont have anough scores for minimum requirement";
    console.log(result);
}
console.log(firstResult());
//შევეცადე მაქსიმალურად ავტომატიზირებული გამეხადა პროცესი რომ 
// ცალცალკე არ ყოფილიყო შესაყვანი ამათი მონაცემები მაგრამ ჯერ ცოდნა
// არ მყოფნის მაგისთვის

//exercise 4 calculator
function tipValue(bill){
    // let bill;
    let tip = Math.floor(bill / 100 * 15);
    let tips = Math.floor(bill / 100 * 20);
    if (50 >= bill <= 300){
        return `Your bill is: ${bill} tips is: ${tip}. total is ${bill + tip}`;
    } else if(bill < 50 || bill > 300){
        return `Your bill is: ${bill} tips is: ${tips}. total is ${bill + tips}`;
    } else {
        return `you dont leave the tips`
    }
}

console.log(tipValue(275.4));
console.log(tipValue(430));