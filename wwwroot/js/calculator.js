
class myCalculator{
    
    findValue(classId) {
        let  tempNum= document.getElementById(classId);
        let valueOfButton = parseInt(tempNum.textContent);
        
        console.log(valueOfButton);
    }

    answer() {
        myNumber.value = eval(myNumber.value)
    }
    
    measure(num) {
        
        if ((num === '+' || num === '-' || num === '*' || num === '/') &&  
            (myNumber.value[myNumber.value.length-1] === '+' || 
                myNumber.value[myNumber.value.length-1] === '-' || myNumber.value[myNumber.value.length-1] === '/' ||
        myNumber.value[myNumber.value.length-1] === '*'))
            this.clear();
        
        myNumber.value += num;
            
    }
    
    reset() {
        myNumber.value = '';
    }
    
    clear() {
       myNumber.value = myNumber.value.slice(0, -1);
    }
    
    sinClicked() {
        myNumber.value = Math.sin(myNumber.value * (Math.PI / 180));
    }
    
    cosClicked() {
        myNumber.value = Math.cos(myNumber.value * (Math.PI / 180));
    }
    
    tanClicked() {
        myNumber.value = Math.tan(myNumber.value * (Math.PI / 180));
    }
    
    secondRoot() {
        myNumber.value = Math.sqrt(myNumber.value);
    }
}
const myInstance = new myCalculator();
let myNumber = document.getElementById("display");



