// function joinName(){
//     first='hello'
//     last='wrold'
//     console.log(first+last)
// }
// joinName()

// function Carea(r){
//     let area=Math.PI*r*r
//     return area
// }
// let a=Carea(8)
// a=Math.floor(a)
// console.log(a)

// function join(f,l){
//     return f+' '+l
// }
// console.log(join('hi','hello'))

// arr1=[1,2,3,4,5,6,7]
// function arSum(arr){
//     let s=0
//     for(i=0;i<arr.length;i++)
//     {
//         s+=arr[i]
//     }
//     return s
// }
// a=arSum(arr1)
// console.log(a)

//-----prime numbers in a range

// function rangePrime(s,e)
// {
//     let count=0
//     for(i=s;i<e;i++)
//     {
//         for(j=1;j<=i;j++)
//         {
//             if(i%j==0)
//             {
//                 count++
//             }
//         }
//         if(count==2)
//         {
//             console.log(i)
//         }
//         count=0
//     }
// }
// rangePrime(10,25)
// console.log('\n')
// rangePrime(50,100)

// given value palllindrome or not

// function palllindrome(value){
//     value=String(value)
//     const arr=value.split('')
//     const rev=arr.reverse()
//     const revValue=rev.join('')
//     if(revValue==value)
//     {
//         console.log('palindrome')
//     }
//     else{
//         console.log('not palindrome')
//     }
// }
// palllindrome(121)

// fibonachi

// function fib(num){
//     let n1=0
//     let n2=1
//     console.log(n1+'\n'+n2)
//     let n3=n1+n2
//     while(n3<=num)
//     {
//         console.log(n3)
//         n1=n2
//         n2=n3
//         n3=n1+n2
//     }
// }
// fib(10)

//exercise level 1
//que 14

// let str1='may'
// let str=str1.toLowerCase()
// switch(str){
//     case 'october':
//     case 'november':
//     case 'september':
//         console.log('Autmn')
//         break
//     case 'december':
//     case 'january':
//     case 'february':
//         console.log('Winter')
//         break
//     case 'march':
//     case 'april':
//     case 'may':
//         console.log('Spring')
//         break
//     case 'june':
//     case 'july':
//     case 'august':
//         console.log('Summer')
//         break
//     default:
//         console.log('It is not a week day.')
// }

//que 15

// let findMax=(a,b,c)=>{
//     if(a>b && a>c)
//         return a
//     else if(b>a && b>c)
//         return b
//     else
//         return c
// }
// console.log(findMax(0,10,5))
// console.log(findMax(0,-10,-2))

//level 2
//que 1 linear equation

//  function solveQuadEquation(a,b,c,x){
//     let y=-(-((a*x)+c)/b)
//     return y
//  }
//  console.log(solveQuadEquation(1,2,3,4))

//que 2
// Quadratic equation is calculated as follows:
//  ax**2 + bx + c = 0. 
//  Write a function which calculates value or 
// values of a quadratic equation, solveQuadEquation.
// ---!a && !b && !c checks if all three values of a, b, and c are "falsy".
// ---In JavaScript, the following values are considered falsy:
// -=-0
// -=-null
// -=-undefined
// -=-NaN
// -=-false
// -=-'' (empty string)

// let solveQuadratic=(a,b,c)=>{
//     if(!a && !b && !c){
//         return `{0}`
//     }
//     else{
//         let rootFn=((b**2)-(4*a*c))
//     if(rootFn==0){
//         let root=(-b/(2*a))
//         return `{${root}}`
//     }
//     else if(rootFn>0){
//         let root1=(-b+Math.sqrt(rootFn))/(2*a)
//         let root2=(-b-Math.sqrt(rootFn))/(2*a)
//         return `{${root1}, ${root2}}`
        
//     }
//     else{
//         return 'no real values'
//     }
//     }
// }
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//que 3

// const ar1=[1,2,3,4,5,6]
// function printArray(arr){
//     for(i=0;i<arr.length;i++)
//       {
//          console.log(arr[i])
//       }
// }
// printArray(ar1)

//que 4

// let showDateTime =()=>{
//     const tod=new Date()
//     let DD=String(tod.getDate()+1).padStart(2,'0')
//     let MM=String(tod.getMonth()+1).padStart(2,'0')
//     let YYYY=tod.getFullYear()
//     let hh=String(tod.getHours()+1).padStart(2,'0')
//     let mm=String(tod.getMinutes()+1).padStart(2,'0')
//     return `${DD}/${MM}/${YYYY} ${hh}:${mm}`
// }
// console.log(showDateTime())

//que 5

// let swapValues=(a,b)=>{
//     let temp=a
//     a=b
//     b=temp
//     console.log(`x=>${a}, y=>${b}`)
// }
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

//que 6

// let reverseArray=(arr)=>{
//     let l=arr.length-1
//     let revArr=[]
//     for(i=0;i<arr.length;i++)
//     {
//         revArr.push(arr[l-i])
//     }
//     return revArr
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

//que 7

// let capitalizeArray=(arr)=>{
//     for(let str of arr){
//         let caps=str[0].toUpperCase()
//         let join=str.slice(1,str.length)
//         console.log(caps+join)
//     }
// }
// arr1=['hi','hello']
// capitalizeArray(arr1)
//----meth 2
// let capitalizeArray=(arr)=>{
//     let arr2=[]
//     for(let str of arr){
//         arr2.push(str.replace(str[0],str[0].toUpperCase()))   
//     }
//     console.log(arr2)
// }
// arr1=['hi','hello']
// capitalizeArray(arr1)

//que 8

// let addItom=(arr,itom)=>{
//     arr.push(itom)
//     return arr
// }
// arr1=[1,2,3,4,5,6]
// console.log(addItom(arr1,7))

//que 9

// let removeItem=(arr,index)=>{
//     arr.splice(index,1)
//     return arr
// }
// arr1=[1,2,3,4,5,6]
// console.log(removeItem(arr1,3))

//que 10

// let sumOfNumbers=(start,end)=>{
//     let sum=0
//     for(i=start;i<=end;i++)
//     {
//         sum+=i
//     }
//     return sum
// }
// console.log(sumOfNumbers(0,100))

//que 11

// let sumOfOdds=(start,end)=>{
//     let sum=0
//     for(i=start;i<=end;i++)
//     {
//         if(i%2!=0)
//             sum+=i
//     }
//     return sum
// }
// console.log(sumOfOdds(0,100))

//que 12

// let sumOfEven=(start,end)=>{
//     let sum=0
//     for(i=start;i<=end;i++)
//     {
//         if(i%2==0)
//             sum+=i
//     }
//     return sum
// }
// console.log(sumOfEven(0,100))

//que 13

// let evensAndOdds=(num)=>{
//     let eve=0
//     let odd=0
//     for(i=0;i<=num;i++)
//     {
//         if(i%2==0)
//         {
//             eve++
//         }
//         else{
//             odd++
//         }
//     }
//     console.log(`The number of odds are ${odd}.`)
//     console.log(`The number of evens are ${eve}.`)
// }
// evensAndOdds(100);

//que 14

// let sum=(...a)=>{
//     let s=0;
//     for(let it of a)
//     {
//         s+=it
//     }
//     console.log(s)
// }
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10


//que 15

// let randomUserIp=()=>{
//     let r=Math.floor(Math.random()*256)
//     let r1=Math.floor(Math.random()*256)
//     let r2=Math.floor(Math.random()*256)
//     let r3=Math.floor(Math.random()*256)
//     let r4=Math.floor(Math.random()*256)
//     return `${r}.${r1}.${r2}.${r3}`
// }
// console.log(randomUserIp())

//que 16

// let randomMacAddress=()=>{
//     let rans=''
//     let str='1234567890ABCDEF'
//     let ran=[]
//     for(j=0;j<6;j++)
//     {
//         for(i=0;i<2;i++)     
//         {
//             let r=Math.floor(Math.random()*16)
//             rans+=str[r]
//         }
//         ran.push(rans)
//         rans=''
//     }
//     console.log(`${ran[0]}-${ran[1]}-${ran[2]}-${ran[3]}-${ran[4]}-${ran[5]}`)
// }
// randomMacAddress()

//que 17

// let randomHexaNumberGenerator=()=>{
//     let str='1234567890abcdefghijklmnopqrstuvwxyz'
//     let rands=''
//     for(i=0;i<6;i++)
//     {
//         let r=Math.floor(Math.random()*36)
//         rands+=str[r]
//     }
//     return `#${rands}`
// }
// console.log(randomHexaNumberGenerator());

//que 18 

// let userIdGenerator=()=>{
//     let id=''
//     let str='1234567890abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ'
//     for(i=0;i<7;i++)
//     {
//         let r=Math.floor(Math.random()*62)
//         id+=str[r]
//     }
//     return `${id}`
// }
// console.log(userIdGenerator());

//exercises: level 3
//que 2

// let rgbColorGenerator=()=>{
//     let i,r=0
//     let rgb=[]
//     for(i=0;i<3;i++)
//     {
//         let rand=Math.round(Math.random()*255)
//         rgb[i]=rand
//     }
//     console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

// }
// rgbColorGenerator()

//que 3

// let arrayOfHexaColors=(num)=>{   
//     let str='1234567890abcdefghijklmnopqrstuvwxyz'
//     let rands=''
//     let arr=[]
//     for(i=0;i<num;i++)
//     {
//         for(j=0;j<6;j++)
//         {
//             let r=Math.floor(Math.random()*36)
//             rands+=str[r]
//         }
//         arr.push('#'+rands)
//         rands=''
//     }
//     return arr
// }
// console.log(arrayOfHexaColors(4))

//que 4

// let arrayOfRgbColors =(num)=>{
//     let rgb=[]
//     let arr=[]
//     for(j=0;j<num;j++)
//     {
//         for(i=0;i<3;i++)
//         {
//             let rand=Math.round(Math.random()*255)
//             rgb[i]=rand
//         }
//         arr.push(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)
//     }
//     return arr
// }
// console.log(arrayOfRgbColors(4))

//que 5

// let convertHexaToRgb =()=>{

// }

//que 6

//que 7

// let generateColors =(colo,num)=>{
//     let col=colo.toLowerCase()
//     let str='1234567890abcdefghijklmnopqrstuvwxyz'
//     let rands=''
//     let arr=[]
//     if(col=='hexa'){ 
//         for(i=0;i<num;i++)
//         {
//             for(j=0;j<6;j++)
//             {
//                 let r=Math.floor(Math.random()*36)
//                 rands+=str[r]
//             }
//             arr.push('#'+rands)
//             rands=''
//         }
//         return arr
//     }
//     else{
//         let rgb=[]
//         for(j=0;j<num;j++)
//         {
//             for(i=0;i<3;i++)
//             {
//                 let rand=Math.round(Math.random()*255)
//                 rgb[i]=rand
//             }
//             arr.push(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)
//         }
//         return arr
//     }
// }
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

//que 8

//que 9

// let factorial=(num)=>{
//     let f=1
//     for(i=1;i<=num;i++)
//     {
//         f=f*i
//     }
//     return f
// }
// console.log(factorial(5))

//que 10

// let isEmpty=(par)=>{
//     if(!par)
//     {
//         console.log('empty')
//     }
//     else{
//         console.log('not empty')
//     }
// }
// let b
// isEmpty(b)

//que 11

// let sum=(...args)=>{
//     let s=0
//     for(let it of args)
//     {
//         s=s+it
//     }
//     return s
// }
// console.log(sum(1,2,3,4))

//que 12

// let sumOfArrayItems=(arr)=>{
//     let s=0
//     for(i=0;i<arr.length;i++)
//     {
//         if(typeof(arr[i])!="number")
//         {
//             console.log(`element at ${i} is a ${typeof(arr[i])}`) 
//         }
//         else{
//             s+=arr[i]   
//         }
//     }
//     return s
// }
// arr1=[1,2,'3',4]
// console.log(sumOfArrayItems(arr1))

//que 13

// let average=(arr)=>{
//     let s=0
//     let count=0
//     for(i=0;i<arr.length;i++)
//     {
//         if(typeof(arr[i])!="number")
//         {
//             console.log(`element at ${i} is a ${typeof(arr[i])}`) 
//         }
//         else{
//             s+=arr[i]   
//             count++
//         }
//     }
//     let avg=s/count
//     return avg
// }
// arr1=[1,2,'3',4]
// console.log(average(arr1))

//que 14

// let modifyArray =(arr)=>{
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr.length<5)
//         {
//             console.log('item not found')
//         }
//         else{
//             arr[4]=arr[4].toUpperCase()
//         }
//     }
//     return arr
// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

//que 18

// let isValidVariable =(name)=>{
//     let f=0
//     let str='!@#%^&*()-+={}|\;:?/<.>'
//     for(i=0;i<name.length;i++)
//     {
//         if(str.includes(name[i]))
//         {
//             console.log('invalid')
//         }
//         else{
//             f=1
//         }
//     }
//     if(f==1)
//     {
//         console.log('valid') 
//     }
// }
// isValidVariable('gekk')

// let sevenRandomNumbers=()=>{
//     let arr=[]
//     while(arr.length<=7)
//     {
//         let r=Math.floor(Math.random()*9)
//         if(!arr.includes(r))
//         {
//             arr.push(r)
//         }
//     }
//     console.log(arr)
// }
// sevenRandomNumbers()

//que 20

// let reverseCountries=(c)=>{
//     let revC=[]
//     for(let i=0;i<c.length;i++)
//     {
//         revC.push(c[c.length-1-i])
//     }
//     return revC
// }
// const countries =[
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya']
// console.log(reverseCountries(countries))