//Day 3 Exercise level 1
//que 1

// let firstName=null
// let lastName='Fayiz'
// let country
// let city='Calicut'
// let age=22
// let isMarried=false
// let year= 2024
// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof year)

//que 4

// let a1=3>4
// let a2=2==3
// let a3=(5**2==25)
// let a4=(4+2==10)
// let a5=0
// let a6=''
// let a7=(a5==a6)
// let a8="hi"
// let a9="h"+"i"
// let a10=(a8==a9)
// console.log(a1,a2,a3,a4,a7,a10)

//que 5

// let b1= 4 > 3
// let b2= 4 >= 3
// let b3= 4 < 3
// let b4= 4 <= 3
// let b5= 4 == 4
// let b6= 4 === 4
// let b7= 4 != 4
// let b8= 4 !== 4
// let b9= 4 != '4'
// let b10= 4 == '4'
// let b11= 4 === '4'
// let b12='python'
// let b13='jatgon'
// let b14=b12.length!=b13.length
// console.log("b1 "+b1,"\nb2 "+b2,"\nb3 "+b3,"\nb4 "+b4,"\nb5 "+b5,"\nb6 "+b6,"\nb7 "+b7,"\nb8 "+b8,"\nb9 "+b9,"\nb10 "+b10,"\nb11 "+b11)
// console.log("b14 "+b14)

//que 6

// b1= 4 > 3 && 10 < 12 //true
// b2= 4 > 3 && 10 > 12 //false
// b3= 4 > 3 || 10 < 12 //true
// b5= 4 > 3 || 10 > 12 //true
// b6= !(4 > 3) //false
// b7= !(4 < 3) //true
// b8= !(false) //true
// b9= !(4 > 3 && 10 < 12) //false
// b10= !(4 > 3 && 10 > 12) //true
// b11= !(4 === '4') //true
// //There is no 'on' in both dragon and python
// let b12='dragon'
// let b13='python'
// console.log("b1 "+b1,"\nb2 "+b2,"\nb3 "+b3,"\nb5 "+b5,"\nb6 "+b6,"\nb7 "+b7,"\nb8 "+b8,"\nb9 "+b9,"\nb10 "+b10,"\nb11 "+b11)
// let b14=(b12,b13).includes('on')
// console.log('\nb14 -'+b14)

// que 7

// const today=new Date()
// console.log(today)
// console.log(today.getFullYear())
// console.log(today.getMonth()+1)
// console.log(today.getDate())
// console.log(today.getDay()+1)
// console.log(today.getHours())
// console.log(today.getMinutes())
// //Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(Date.now())

//Day 3 Exercise level 2 
//que 1 area of traingle

// let b=10
// let h=20
// let area=0.5*b*h
// console.log(`area of traingle is ${area}`)

//que 2 perimeter of traingle

// let a=10
// let b=20
// let c=30
// let perimeter=a+b+c
// console.log('Perimeter of the traingle is '+perimeter)

//que 5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
//y=mx+b
// let eq1='y=mx+b'
// let eq2='y=2x-2'
// let ind=eq1.indexOf('m')
// let m=eq2.charAt(ind)
// console.log("slope is "+m)

//que 6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// let x1=2
// let y1=2
// let x2=6
// let y2=10
// let m=(y2-y1)/(x2-x1)
// console.log(`Slope between point(${x1},${y1}) and point(${x2},${y2}) is ${m}`)

//que 7 compare above slopes

// let m1=2
// let m2=2
// m1==m2?console.log("slopes are same"):console.log("slopes are diffrent")

//que 8

// let x=-3
// let y= (x**2)+(6*x)+9
// console.log(y)
// console.log(x)  

//que 11 //Asabeneh //Yetayeh

// let firstName = 'naruto'
// let lastName = 'uzumaki'
// if(firstName.length>=lastName.length)
// {
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// }
// else{
//     console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// }

//que 12

// let myAge = 250
// let yourAge = 25
// console.log(`I am ${myAge-yourAge} years older than you.`)

//que 15 Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// today=new Date()
// YYYY=today.getFullYear()
// MM=today.getMonth()
// DD=today.getDate()
// HH=today.getHours()
// mm=today.getMinutes()
// console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)
// console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`)
// console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`)

// Create a human readable time format using the Date time object. The hour and the minute should be 
// all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// today=new Date()
// YYYY=today.getFullYear()
// MM=String(today.getMonth()+1).padStart(2,'0')
// DD=String(today.getDate()+1).padStart(2,'0')
// HH=String(today.getHours()+1).padStart(2,'0')
// mm=String(today.getMinutes()+1).padStart(2,'0')

// console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)
