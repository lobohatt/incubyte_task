



function Stringcal(){
}
Stringcal.prototype.add = function(string_numbers) {
    this.number = string_numbers;
    if(this.number.includes('-')){
        return 'negative numbers not allowed <negative number>'
    }
   var numbers=this.number.toString().replace(/(\r\n|\n\r)/gm,",");
    if(numbers == ''){
        return 0;
    }else if(numbers.length === 1){
        return (parseInt(numbers));
    }else {
      var  res = numbers.split(',');
        var total = 0;
        var arrayLength = res.length;
        for (var i = 0; i < arrayLength;i++){
            total = total + parseInt(res[i]);
        }
        return total;
        
    }
};


export default Stringcal;