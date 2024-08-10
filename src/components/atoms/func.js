


function Stringcal() {
}


Stringcal.prototype.add = function(string_numbers) {
    if (!string_numbers) {
        return 0;
    }

    let delimiter = ',';
    let numbers = string_numbers;

    
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
        delimiter = delimiterMatch[1];  
        numbers = numbers.substring(numbers.indexOf('\n') + 1);  
    }

   
    numbers = numbers.replace(/\D|\n/g, ",").replace(/^,|,$/g, "");
    console.log("After newline replacement:", numbers); 

    
    const regexDelimiter = new RegExp(`[${delimiter},]`);
    const res = numbers.split(regexDelimiter).filter(Boolean); 
    console.log("Split array:", res); 

    
    const negatives = res.filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
        return `negative numbers not allowed ${negatives.join(', ')}`;
    }

    const total = res.reduce((sum, num) => sum + (parseInt(num) || 0), 0);

    return total;
};

export default Stringcal;