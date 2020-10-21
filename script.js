function factorial() {
    let nElement = document.getElementById('n')
    let n = nElement.value
    
    
    let fact = 1
    for (n; n > 1; n--) {
        fact = fact * n 
    }
    console.log (fact)
    
    let factElement = document.getElementById('fact')
    factElement.value = fact
}
