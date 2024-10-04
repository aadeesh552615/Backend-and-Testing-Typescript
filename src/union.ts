let flat: number | string;
function decide(flat: number | string){
    if(typeof flat === "number"){
        console.log("number");
    }
    else{
        console.log("string");
    }
}
flat = "12";
decide(flat);