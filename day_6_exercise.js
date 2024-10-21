//day 6 exercise level 1


// for(let i=0;i<100;i++)
// {
//     //que 7
//     // if(i%2==0)
//     // {
//     //     console.log(i)
//     // }
//     //que 8
//     // if(i%2!=0)
//     // {
//     //     console.log(i)
//     // }
// }

//que 9

// let count=0
// for(j=2;j<=100;j++)
// {
//     for(let i=1;i<=j;i++)
//     {
//         if(j%i==0)
//         count++
//     }
//     if(count==2)
//         console.log(j)
//         count=0
// }

//que 10

// let s=0
// for(let i=0;i<=100;i++)
// {
//     s+=i
// }
// console.log(s)

//que 11

// let eve=0
// let odd=0
// for(let i=0;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         eve+=i
//     }
//     else{
//         odd+=i
//     }
// }
// console.log('sum of all even number are : '+eve+'\nsum of all odd numbers are : '+odd)

//que 12

// let eve=0
// let odd=0
// let arr=[]
// for(let i=0;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         eve+=i
//     }
//     else{
//         odd+=i
//     }
// }
// arr.push(eve,odd)
// console.log(arr)

//que 13

// let arr=Array()
// for(let i=0;i<5;i++)
// {
//     arr[i]=Math.floor(Math.random()*10)
// }
// console.log(arr)

//que 14

// let arr1=Array()
// while(arr1.length<5)
// {
//     let r=Math.floor(Math.random()*10)
//     if(arr1.includes(r)!=true)
//     {
//         arr1.push(r)
//     }
// }
// console.log(arr1)

//que 15

// let str='1234567890abcdefghijklmnopqrstuvwxyz'
// let rans=''
// while(rans.length<=6)
// {
//     let r=Math.floor(Math.random()*36)
//     if(rans.includes(str[r])==false){
//         rans+=str[r]
//     }
// }
// console.log(rans)

//level 2 
//que 1

// let r=Math.floor(Math.random()*(20-5+1)+5)
// let str='1234567890abcdefghijklmnopqrstuvwxyz'
// let rands=''
// for(i=1;i<=r;i++){
//     let r=Math.floor(Math.random()*36)
//     rands+=str[r]
// }
// console.log(rands)

//que 2

// let str='1234567890abcdefghijklmnopqrstuvwxyz'
// let rands=''
// for(i=1;i<=6;i++){
//     let r=Math.floor(Math.random()*36)
//     rands+=str[r]
// }
// console.log(`#${rands}`)

//que 3

// let i,r=0
// let rgb=[]
// for(i=0;i<3;i++)
// {
//     let rand=Math.round(Math.random()*255)
//     rgb[i]=rand
// }
// console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

//que 4

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
// let capCountries=[]
// for(i=0;i<countries.length;i++)
// {
//     capCountries[i]=countries[i].toUpperCase()
// }
// console.log(capCountries)

//que 5

// let CountriesLen=[]
// for(i=0;i<countries.length;i++)
// {
//     CountriesLen[i]=countries[i].length
// }
// console.log(CountriesLen)

//*********** que 6

// let countryNew=[]
// let arrIn=[]
// for(i=0;i<countries.length;i++)
// {
//     for(j=0;j<1;j++)
//     {
//       arrIn.push(countries[i])
//       arrIn.push((countries[i].substr(0,3)).toUpperCase())
//       arrIn.push(countries[i].length)
//     }
//     countryNew[i]=arrIn
//     arrIn=[]
// }
// console.log(countryNew)

//que 7

// let f=0
// let ar=[]
// for(i=0;i<countries.length;i++)
// {
//     if(countries[i].includes('land'))
//     {
//         ar.push(countries[i])
//     }
//     else{
//         f=1
//     }
// }
// if(ar.length>=1)
//     {
//         console.log(ar)
//     }
//     else{
//         console.log('All these countries are without land')
//     }

//que 8

// let ar=[]
// for(i=0;i<countries.length;i++)
// {
//     if(countries[i].endsWith('ia'))
//     {
//         ar.push(countries[i])
//     }
// }
// if(ar.length>=1)
// {
//     console.log(ar)
// }
// else{
//     console.log('These are countries ends without ia')
// }

//que 9

// let ar=[]
// for(i=0;i<countries.length;i++)
// {
//     ar.push(countries[i].length)
// }
// let ar2=ar.sort()
// let m= ar2[ar2.length-1]
// for(i=0;i<countries.length;i++)
//     {
//         if(countries[i].length==m)
//         {
//             console.log(countries[i])
//         }
//     }

//que 10

// let m=5
// let arr=[]
// for(i=0;i<countries.length;i++)
// {
//     if(countries[i].length==m)
//     {
//         arr.push(countries[i])
//     }
// }
// console.log(arr)

//que 11

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// let len=[]
// for(i=0;i<webTechs.length;i++)
// {
//     len.push(webTechs[i].length)
// }
// let max=Math.max(...len)
// let p=len.indexOf(max)
// console.log(webTechs[p])

//que 12

// let arrOut=[]
// let arrIn=[]
// for(i=0;i<webTechs.length;i++)
// {
//   let j=0
//   while(j<1)
//   {
//     arrIn.push(webTechs[i])
//     arrIn.push(webTechs[i].length)
//     j++
//   }
//   arrOut[i]=arrIn
//   arrIn=[]
// }
// console.log(arrOut)

//que 13 ??

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// let str=''
// for(let it of mernStack)
// {
//   str+=it[0]
// }
// console.log(str)

//que 14

// const arr=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// for(let itoms of arr)
// {
//     console.log(itoms)
// }

//que 15

// let f=[]
// let fruits= ['banana', 'orange', 'mango', 'lemon']
// let n=fruits.length-1
// for(let i=0;i<fruits.length;i++)
// {
//     f.push(fruits[n--])
// }
// console.log(f)

//que 16

//level 3
//que 1

// let arra=[]
// for(i=0;i<countries.length;i++)
// {
//     arra.push(countries[i])
// }
// console.log(arra)

//que 2

// let arra=[]
// for(i=0;i<countries.length;i++)
// {
//     arra.push(countries[i])
// }
// let sortedCountry=arra.sort()
// console.log(sortedCountry)

//que 3

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// let sor1=webTechs.sort()
// let sor2=mernStack.sort()
// console.log(sor1+'\n'+sor2)

//que 4

// let arra=[]
// for(i=0;i<countries.length;i++)
// {
//     if(countries[i].includes('land'))
//     {
//         arra.push(countries[i])
//     }
// }
// console.log(arra)

//que 7

// let arra=[]
// for(i=0;i<countries.length;i++)
// {
//     if(countries[i].length==4)
//     {
//         arra.push(countries[i])
//     }
// }
// console.log(arra)

//que 8

// let arra=[]
// for(i=0;i<countries.length;i++)
// {
//     let m=countries[i].split(' ')
//     if(m>=2)
//     {
//         arra.push(countries[i])
//     }
// }
// console.log(arra)

//que 9

// let c=countries.reverse()
// let arra=[]
// for(i=0;i<c.length;i++)
// {
//     arra.push(c[i].())
// }
// console.log(arra)