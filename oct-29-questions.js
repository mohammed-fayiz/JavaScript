//factorial

// let fact=1
// let num=10
// for(let i=1;i<=num;i++)
// {
//     fact*=i
// }
// console.log(fact)

//capitalize each word in a array

// let str=['india','srilanka','nepal','bhutan','china']
// let str2=[]
// for(let it of str)
// {
//     str2.push(it[0].toUpperCase()+it.substr(1,it.length-1))
// }
// console.log(str2)

//sort values inside an array of object using a key passed as parameter

// arr2=[{age:12},{age:25},{age:8},{age:6},{age:11},{age:15}]
// let objectSort=(arr,{key})=>{
    
//     let arr1=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         let temp=arr[i]
//         arr1.push(temp.key)
//     }
//     let sor=arr1.sort()
    
// }
// objectSort(arr2,key)

//que 4--merge two aorted array without sort

// let ar1=[1,2,3,4,5,6]
// let ar2=[7,8,9,10,11,12]
// let New=[]
// let len=ar1.length+ar2.length
// let i=0
// while(New.length!=len){

//     if(ar1[ar1.length-1]<ar2[0])
//     {
//         New.push(ar1[i])
//         i++
//     }
//     else{
//         New=New+ar2
//     }
// }
// console.log(New)

// que 5--2 strings anagrams or not

// let anagrams=(str1,str2)=>{
//     let temp1=str1.split('')
//     let temp2=str2.split('')
//     let count=0
//     for(let it of temp1)
//     {
//         if (temp2.includes(it))
//             count++
//     }
//     if(count==temp1.length)
//     {
//         return 'anagrams'
//     }
//     else{
//         return 'not anagrams'
//     }
// }
// console.log(anagrams('they see','the eye'))

//que 6--reverse a string without builtin fun

// let str1= 'no way'
// let strRev=(str)=>{
//     let len=str.length
//     let str2=''
//     for(let i=len-1;i>=0;i--)
//     {
//         str2+=str[i]
//     }
//     return str2
// }
// console.log(strRev(str1))

//que 7--randam array

// let randArr=()=>{
//     let arr1=[]
//     let r1=Math.floor(Math.random()*11)
//     for(let i=0;i<r1;i++){
//         let r2=Math.floor(Math.random()*21)
//         if(arr1.includes(r2)==false)
//         {
//             arr1.push(r2)
//         }
//     }
//     return arr1
// }
// console.log(randArr())

//que 8--count occurance of charectors in string

// let occuranceCheck=(str)=>{
//     let result = {}
//     for(let i = 0;i< str.length;i++){
//         let ch = str.charAt(i)
//         if(!result[ch]){
//             result[ch] =1
//         }
//         else{
//             result[ch]+=1
//         }
//     }
//     console.log("The occurrence of each letter in given string is:",result)
// }
// occuranceCheck('malayalam')

