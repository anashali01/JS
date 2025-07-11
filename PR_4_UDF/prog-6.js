
let num=10;
const mainfunc=()=>{
    let num=15;
    const innerfunc=()=>{
        let num=20;
        const subfunc=()=>{
            let num=30;
            console.log(`Sub ${num}`);
        }
        subfunc();
        console.log(`Inner ${num}`);
    }
    innerfunc();
    console.log(`Main ${num}`);
}
mainfunc();
console.log(`Outter ${num}`);