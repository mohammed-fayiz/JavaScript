//day 5 level 1
//que 1

// let arr1=Array()
// console.log(arr1)

// //que 2
// let arr1=[1,2,3,4,5,6]
// //que 3
// console.log(arr1.length)

//que 4

// let arr1=[1,2,3,4,5,6,7]
// let m=Math.ceil((arr1.length)/2)-1
// let e=arr1.length-1
// console.log(arr1[0])
// console.log(arr1[m])
// console.log(arr1[e])

//que 5

// let mixedDataTypes=[1,'as',true,[1,2,3],2,"dfg"]
// console.log(mixedDataTypes.length)

//que 6

let itCompanies =['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// //que 7
// console.log(itCompanies)
// //que 8
// console.log(itCompanies.length+1)
// //que 9
// console.log(`first element ${itCompanies[0]}`)
// console.log(`last element ${itCompanies[itCompanies.length-1]}`)
// console.log(`middle element is ${itCompanies[Math.ceil((itCompanies.length)/2)-1]}`)
// //que 10
// for(i=0;i<itCompanies.length;i++)
// {
//   console.log(itCompanies[i])
// }
//que 11
// for(i=0;i<itCompanies.length;i++)
// {
//   console.log(itCompanies[i].toUpperCase())
// }
//que 12
// //Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// let arr3=itCompanies.slice(0,itCompanies.length-2)
// let last=itCompanies.pop()
// let arr1=arr3.join(', ')
// let arr2=' are big IT companies.'
// console.log(`${arr1} and ${last}${arr2}`)
// que 13
// let key='Google'
// if(itCompanies.includes(key))
// {
//     console.log(`${key} at ${itCompanies.indexOf(key)+1} position`)
// }
// else{
//     console.log('not found')
// }

// que 14 Filter out companies which have more than one 'o' without the filter method

// for(i=0;i<itCompanies.length;i++)
// {
//   if(itCompanies[i].includes('o')){
//     let m=itCompanies[i].match(/o/g)
//   let ms=m.length
//   if(ms>1)
//   {
//     console.log(itCompanies[i])
//   }
//   }
// }

// //que 15
//console.log(itCompanies.sort())
//que 16
//console.log(itCompanies.reverse())
//que 17
//console.log(itCompanies.slice(0,3))
//que 18
// let s=itCompanies.length
// let e=itCompanies.length-3
// console.log(itCompanies.slice(e,s))
//que 19
// let m=itCompanies.length/2
// console.log(itCompanies.slice(m,m+1))
//que 20 delete first element
// itCompanies.shift()
// console.log(itCompanies)
//que 21 delete middle
// let m=itCompanies.length/2
// itCompanies.splice(m,1)
// console.log(itCompanies)
//que 22 delete last
// itCompanies.pop()
// console.log(itCompanies)

//que 23 Remove all IT companies

// itCompanies.splice(0,itCompanies.length)
// console.log(itCompanies)

//Exercise: Level 2
//que 2

// let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let words=text.split(' ','. ',', ')
// console.log(words)
// console.log(words.length)

//que 3

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//qye 3.1
//shoppingCart.unshift('meat')
//que 3.2
// shoppingCart.push('sugar')
// console.log(shoppingCart)
//que 3.3
// let k=shoppingCart.indexOf('Honey')
// shoppingCart.splice(k,1)
// console.log(shoppingCart)
//que 3.4
// let t=shoppingCart.indexOf('Tea')
// shoppingCart[t]='Green Tea'
// console.log(shoppingCart)

//que 4

// const countries = [
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
//     'Kenya'
//   ]
// let key='India'
// if(countries.includes(key))
// {
//     console.log(key.toUpperCase())
// }
// else{
//     countries.push(key)
//     console.log(countries)
// }

//que 5

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
//   let key='Saas'
//   if(webTechs.includes(key))
//   {
//       console.log(`${key} is a CSS preprocess`)
//   }
//   else{
//       webTechs.push(key)
//       console.log(webTechs)
//   }

  //que 6

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// let fullStack=frontEnd.concat(backEnd)
// console.log(fullStack)

//level 3 
//que 1

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,]
// let sorted= ages.sort()
// //1.1
// console.log(sorted)
// let f=sorted[0]
// console.log(f)
// let l=sorted[sorted.length-1]

// console.log(l)
// let n=sorted.length/2
// //1.2
// if(sorted.length%2==0){
//     let med=((sorted[n]+sorted[n-1])/2)
//     console.log(med)
// }
// else{
//     let me=Math.floor(sorted.length/2)
//     console.log(me)
// }

// //1.4
// console.log(Math.abs(sorted[l]-sorted[f]))
