// var challenge="30 Days Of JavaScript"
// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toLocaleUpperCase())
// console.log(challenge.toLocaleLowerCase())
// var sub=challenge.substr(0,2)
// console.log(sub)
// var subs2=challenge.substring(0,3)
// console.log(subs2)
// let last=challenge.length-1
// var slice1=challenge.substring(3,(last+1))
// console.log(slice1)
// console.log(challenge.includes('Script'))
// console.log(challenge.split())
// console.log(challenge.split(' '))
// soft='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log(soft.split(','))
// console.log(challenge.replace('JavaScript','Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt(challenge.indexOf('J')))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))
// str1="You cannot end a sentence with because because because is a conjuction"
// console.log(str1.indexOf('because'))
// console.log(str1.lastIndexOf('because'))
// console.log(str1.search('because'))
// var challenge2=" 30 Days Of JavaScript "
// console.log(challenge2.trim())
// console.log(challenge.startsWith('30'))
// console.log(challenge.endsWith('t'))
// console.log(challenge.match(/a/gi))
// var str3=""
// console.log(str3.concat(' 30 Days Of',' JavaScript'))
// console.log(challenge2.repeat(2))

//day 2 exercises level 2

// que 1

// console.log(`The quote 'There is no exercise better for the heart than reaching 
//     down and lifting people up.' by John Holmes teaches us to help one another.
// `)

//que 2

// console.log(`"Love is not patronizing and charity isn't about pity, 
// it is about love. Charity and love are the same -- with charity you give love, 
// so don't just give money but reach out your hand instead."`)

//que 3

// let a='10'
// let b=10
// if(a===b)
// {
//     console.log('they are the same')
// }
// else{
//     a=parseInt(a)
//     console.log(typeof a)
// }

//que 4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// let pi='9.8'
// let a=10
// if(parseFloat(pi)==a)
// {
//     console.log('tehyare the same')
// }
// else{
//     pi=Math.ceil(pi)
//     console.log(pi)
// }

//que 5 

// let a='python'
// let b='jargon'
// if(a.includes('on')&&b.includes('on'))
// {
//     console.log('its there')
// }
// else{
//     console.log('nope')
// }

//que 6

// let str1='I hope this course is not full of jargon'
// console.log(str1.includes('jargon'))

//que 7

// console.log(Math.random()*100)

//que 8

// console.log(Math.random()*(100-50+1)+50)

//que 10

// console.log(Math.random()*255)

//que 11

// console.log('1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//que 12

// let str1='You cannot end a sentence with because because because is a conjunction'
// let s=str1.indexOf('b')
// let e=str1.lastIndexOf('e')
// let d=e-s
// console.log(str1.substr(s,d))

//Day 2 level 3
//que 1

// let str1='Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let c=str1.match(/love/gi)
// console.log(c.length)

//que 2

// let str1='You cannot end a sentence with because because because is a conjunction'
// let c=str1.match(/because/gi)
// console.log(c.length)
