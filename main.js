const successPromise = () => {
   return   new Promise((resolve, reject) => {
            resolve("Success!");          
    });
}
successPromise().then(result =>{console.log(result)})


const fullName = (firstName, lastName) => {
    return new Promise((resolve, reject) => {
        if(firstName && lastName){
            setTimeout(() => {
                resolve(`${firstName} ${lastName}`)
            }, 1000)
        }
        else{
            setTimeout(() => {
                reject("err leyzer")
            }, 1000);
        }
    })
}
fullName("leyzer", "gurewitz")
.then((result) =>{console.log(result)})
.catch((err) => {console.log(err)})

const multiplyByTwo = (num) => {
    return new Promise((resolve, reject) => {
        if(num){
            setTimeout(() => {
                resolve(num *2)
            }, 500);
        }
        else{
            reject("err")
        }
    })
}
const addFive = (num) =>  {
    return new Promise((resolve, reject) => {
        if(num){
            setTimeout(() => {
                resolve(num +5)
            }, 500);
        }
        else{
            reject("err")
        }
    })
}
const subtractTen = (num) => {
   return new Promise((resolve, reject) => {
        if(num){
            setTimeout(() => {
                resolve(num -10)
            }, 500);
        }
        else{
            reject("err")
        }
   })
}

multiplyByTwo(30)
.then((num) => addFive(num))
.then((num) => subtractTen(num))
.then((num) => {console.log(num)})
.catch((err) => {console.log(err)})
    

const vidNum = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num2){
            setTimeout(() => {
                resolve(num1/num2)
            }, 500);
        }
        else{
            reject("It is not possible to divide by zero")
        }
    })
}

vidNum(5, 0)
.then((result) => {console.log(result)})
.catch((err) => {console.log(err)})


//5//6

const getNumAsync =  async() =>{
    try{
    const add = await addFive(10);
    const mul = await multiplyByTwo(add)
    const sub = await subtractTen(mul);
    return sub
    }
    catch(err){
        console.log(err)
    }
}
getNumAsync().then((res) =>{console.log(res)})
 console.log(getNumAsync())