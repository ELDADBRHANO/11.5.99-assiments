// function Hello(){
//   document.write("hello world")
// }
// var i = 0
// while (i<3){
//   Hello()
//   i++
// }

// function max(num1,num2){

//   var num1=+prompt("enter number")
//   var num2=+prompt("enter number")
//   if(num1>num2){
//     return console.log(num1)
//   }
//   else{
//     return console.log(num2)
//   }
// }
// max()



// function sum(num1,num2) {
// var num1 = +prompt()
// var num2 = +prompt()
// if(num1>=num2){
//   return num1+num2
// }
// else{
//   return num1+num2
//   }
// }

// console.log(sum())



// var x = 0  
// var y = 2
// function myFunction()
// {
//   var j = x;
//   x = y; 
//   y=j;
// }
// document.write(x , y); 
// myFunction();
// document.write(x , y); 



// function myNum() {


// var i =0
// while(i<5){
//   console.log("hello world")
//   i++
// }
// }
// myNum()


// function min(num1,num2) {
  

// var num1 =+prompt()
// var num2 =+prompt()
// if(num1<num2){
//   console.log(num1)
// }
// else{
//   (num1>num2)
//   console.log(num2)
//   }
// }
// min()





// var a=+prompt()
// var b=+prompt()
// var c=+prompt()

// function min(){
// 	if (a <= b && a <= c)
// 		console.log( a + " is the smallest");

// 	else if (b <= a && b <= c)
// 	console.log( b + " is the smallest");

// 	else
//   console.log( c + " is the smallest");

// 	}
// min()







// function sum (num){
// 	var num=+prompt()
// 	for(var i=num-1;i>0;i--)
// 		num+=i
// 	return	console.log(num)
// }
// sum()







// function printIsrael() {
//   document.write("israel")
// }
// printIsrael()



// function myName() {
//   console.log("eldad")
// }
// myName()


// function myNumber(){
//   console.log(9)
// }
// myNumber()



// function print5Numbers(){
//     for(i=0;i<5;i++){
//       console.log(6)
//     }
// }
// print5Numbers()




// var a = 2
// var b = 3
// var c = 4
// var d = 5
// function avgAndSum() {

//  var sum=  a+b+c+d
//  var avg =sum/4 

//  console.log(sum, avg)

// }
// avgAndSum()




// var height=2
// var width=3
// function heightAndWidth() {
//   console.log(height*width)
// }
// heightAndWidth()




// var num1=1
// var num2=2
// var num3=1

// function change() {
//   num1=num2
//   num2=num3

// }
//   console.log(num1, num2)
// change()
// console.log(num1, num2)




// var a =+prompt()
// var b =+prompt()
// var c =+prompt()
// var d =+prompt()
// function returnSumAndAvg() {
//   var sum = a+b+c+d
//   var avg = sum/4
//   console.log(sum, avg)
// }
// returnSumAndAvg()





// var height = +prompt()
// var width = +prompt()
// function heightAndPrompt() {
//   height*width
//   console.log(height*width)
// }
// heightAndPrompt()





// var num1 = +prompt()
// var num2 = +prompt()
// var num3 = num1
// function change(){
//   num1=num2
//   num2=num3
  
// }
// console.log(num1, num2)
// change()
// console.log(num1, num2)








// var myArray = ["eldad", "yon","lior","daniel","or"]
// console.log(myArray)
// for(var i = 0; i<myArray.length;i++){
//   console.log(myArray[i])
// }


// var myArray = [100,200,300,400,500,600,900]
// console.log(myArray[3]);
// for(var i = 0; i<myArray.length;i++){
//   console.log(myArray[i])
// }





// var myNumbers = [0,5,6,8,9,2,3,30,40,25]
// console.log(myNumbers)

// for(var i = 0;i<myNumbers.length;i++){
//   if(myNumbers[i]%2==0){
//     console.log(myNumbers[i])
//   }
// }










// var myArray = ["hello",2, "world", "jacob" , 6 , 7 , "bye" , 98]
// for(var i = 0;i<myArray.length;i++){
//   if(myArray[i]*1!= myArray[i]){
//    console.log(myArray[i])
//   }
// }








// var myArray = []
// myArray.push(9)
// console.log(myArray)



// myArray = []
// for(var i = 0;i<10;i++){
//   myArray.push(i)
// }
// console.log(myArray);






// var arrayNum = [5, 3, 7, 8, 11]
// var sum = 0
// var avg = 0
// for(var i = 0; i<arrayNum.length;i++){
//   sum+=arrayNum[i]
//   avg=sum/5
// }
// console.log(sum)
// console.log(avg)



// var arrayNames = ["eldad","yon","lior","sara","yehuda"]
// for(var i = 0; i<5;i++){
//   console.log(arrayNames[i])
// }



// function myNumbers(num,array) {
// for(var i = 0;i < array.length;i++){
//   if(array[i]==num){
//     return true
//    }
//   }  
//   return false

// }
// console.log(myNumbers(8,[7,9,6]))








// function myArray(array) {
//   var save = 0;
//   for(var i = 0; i < array.length; i++){
//     if(array[i]%2==0){
//       save++;
//     }
//   }    
//     console.log(save)

// }
// myArray([2,4,6,3,10])













// function myNum(array){
// var maxNum = 0;
// for(var i = 0; i<array.length;i++){
//   if(array[i]>maxNum){
//     maxNum=array[i]
//   }
// }
//   return maxNum
// }
// console.log(myNum([2,4,5,8,10]));






// function myArrays(array1) {
//   var minNum = array1[0]
//   var index = 0
//   for(var i = 0; i < array1.length;i++){
//     if(array1[i] <= minNum){
//       array1[i]=minNum
//       index = [i]
//     }
//   }
//   return index
//   }
//   console.log(myArrays([4,1,6]))












// function mySum(array) {
//   var sum=0
//   for(var i = 0; i < array.length; i++){
//    sum+=array[i]
//   }
//    return sum
// }
//  console.log(mySum([]))







// function minAndMax(array) {
//   var min = array[0]
//   var max = 0
//   for(var i = 0; i < array.length;i++){
//     if(array[i]<min){
//       min=array[i]
//     }
//     if(array[i]>max){
//      max= array[i]
//     }
//   }
//   return console.log(min*max)
// }
// minAndMax([2,9,10])







// function myArray(array) {
//   var max = true
//   var index;
//   var i=0;
//   while(max==true && i<array.length){
//     if(array[i]%2==0){
//       max = array[i]
//       index = i
//       }
//       i++;
//     }
//     for(var i =0;i<array.length;i++){
//       if(array[i]%2==0){
//         if(array[i]>max){
//           max=array[i]
//           index=i
//         }
//       }
//     }
//     console.log(array)
//     console.log(max, index)
//   }
// myArray([80,7,91,8,50,90])









// function myOdd(array) {
//   var odd = 0
//   for(var i = 0; i < array.length ;i++){
//     if(array[i]%2==1){
//       odd+=array[i]
//     }
//   }
//   console.log(odd)
// }
// myOdd([2,,4,5,1])






// function namesPush(name1,nameArr) {
//   nameArr.push(name1);
//     return nameArr
// }
// console.log(namesPush("lior",["eldad","or","daniel"]))





// function myEmails(email1,emailArr) {
//   emailArr.unshift(email1)
//   return emailArr
// }
// console.log(myEmails("ebrhago@gmail.com",["ebrhano@gmail.com","lior@gmail.com"]))







// function arrays(arrayNumbers,num) {
//   for(var i = 0;i<arrayNumbers.length;i++){
//     if(num%2==0){
//       arrayNumbers.unshift(num)
//       return arrayNumbers
//     }
//     arrayNumbers.push(num)
//     return arrayNumbers
//   }
  
// }
// console.log(arrays([1,2,3,4],4))




// function myNumbers(number1,numArray) {
//   for(var i = 0; i < numArray.length ; i++){
//     if(number1==numArray[i]){
//       numArray.splice(i,1)
//       return numArray
//     }
//   numArray.push(number1)
//   return numArray
// }
// }
// console.log(myNumbers(1,[2,4,7,9]))

// function numbers(num,numAr) {
//   var numHr=0
//   for(var i = 0 ; i < numAr.length ; i++){
//     if(numAr[i] >=numHr){
//       numHr=numAr[i]
//     }
//   }
//   if(num>numHr){
//     numAr.unshift(num)
//   }
//   else{
//     numAr.push(num)
//   }
//   console.log(numAr)
// }
// console.log(numbers(15,[9,0,1,10]))




// function min(num,numArray) {
// if(num<numArray.length){
//   numArray.splice(num,1)
// }
// console.log(numArray)
// }
// min(3,[1,2,3,4])




// function getNumber(num1,num2){
//   for(var i = num1 ;   i < num2 ; i++){
//     if(i<=num2){
//     }
//     console.log(i)                       
//   } 
// }
//  getNumber(1,7)






