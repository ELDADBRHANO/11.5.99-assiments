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
//   return false
//   }
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
// myArray([2,4,6,3,8])













function max(array) {
  for(var i = 0; i<array.length;i++){
  if(i>0){
    console.log(i)
  }
}
}
max([8,7,5,9,10])