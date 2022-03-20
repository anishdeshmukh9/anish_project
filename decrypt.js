function function_1(){
    const  a = document.getElementById("message").value;
    const b = document.getElementById("key").value;
    
     message_array  = []
    message_array =( a.split(""));            
    
    key_array = []
    key_array = b.split("");
    ascii_array = []
    ascii_array_key = []
    var key_array_sum = 0;
    ascii_array_final = []
    
    for (let i = 0; i < message_array.length; i++) {
        
        let letter = message_array[i]
    
        let ascii =letter.charCodeAt(0)
    
    
        ascii_array.push(ascii)
        
    }
    for (let i = 0; i < key_array.length; i++) {
        
        let letter = key_array[i]
    
        let ascii =letter.charCodeAt(0)
    
    
        ascii_array_key.push(ascii)
    
        key_array_sum = key_array_sum + ascii;
    
        // console.log(key_array_sum)
        // console.log(ascii_array_key)
    
    
        
    }
    
    for (let i = 0; i < ascii_array.length; i++) {
        ascii_array_final.push(ascii_array[i]-key_array_sum)
        
    }
    
    
    var cipher = ""
    
    for (let i = 0; i < ascii_array_final.length; i++) {
    
    let text = String.fromCharCode(ascii_array_final[i])
    
    cipher = cipher + text
        
        
    }
    
    document.getElementById("output").innerHTML = cipher
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
    