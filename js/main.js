// GO!
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

// TASK 1 -- Show/Hide Nav
var navButton = document.querySelector('.navButton')

navButton.addEventListener('click', function(){
  var navMenu = document.querySelector('.nav-menu')
  navMenu.classList.toggle('nav-menu-hidden')

})
// TASK 2 -- Select an Icon

var selectedContainer = document.querySelectorAll('.wish-list div')

  forEach(selectedContainer,function(optionEl, index, array){
    optionEl.addEventListener('click',function(evt){
      var currentTarget = evt.currentTarget
      if(currentTarget.className !== 'option selected'){
        currentTarget.className = 'option selected'
      } else {
        currentTarget.className = 'option'
      }
    })
  })


// TASK 3 -- Move Item From List to List

var selectedButton = document.querySelectorAll('.add-points .point')

  forEach(selectedButton, function(numberEl, index, array){
    numberEl.addEventListener('click', function(){
      var totalPointsDomEl = document.querySelector('.total-points')
      var pointsInteger = parseInt(totalPointsDomEl.innerHTML)
      var buttonInteger = parseInt(numberEl.innerHTML)

      pointsInteger = buttonInteger + pointsInteger
      totalPointsDomEl.innerHTML = pointsInteger
    })
  })


// TASK 4 -- Add Guest to List

var listOfNames = document.querySelectorAll('.standing-list li')
var goodStandingLi = document.querySelector('.good-standing-list')
var probationLi = document.querySelector('.probation-list')
console.log(goodStandingLi)
  forEach(listOfNames, function (namesEl, index, array){
    namesEl.addEventListener('click', function(){
      console.log(namesEl.parentNode.className)
      if(namesEl.parentNode.className === 'good-standing-list'){
        console.log('namesEl')
        probationLi.appendChild(namesEl)
      }
      else{
        goodStandingLi.appendChild(namesEl)
      }
    })
  })


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
