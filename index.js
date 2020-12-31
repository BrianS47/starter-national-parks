console.log(document)

const heading = document.querySelector('h1')
console.log(heading)

const value = document.querySelector(".value")
console.log(value)

const button = document.querySelector("button")
console.log(button)

const area = document.querySelector(".area")
console.log(area)

const divOfStat = document.querySelector(".stat div")
console.log(divOfStat)

const hello = document.querySelector(".hello")
console.log(hello)

const buttons = document.querySelectorAll("button")
console.log(buttons)

const ratings = document.querySelectorAll('.rating ')
console.log(ratings)

const areas = document.querySelectorAll('.area')

for(let element of areas.values()) {
    console.log(element)
}

const list = document.querySelectorAll(".description")

Array.prototype.forEach.call(list, function (element) {
    console.log(element)
})
