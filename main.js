const wethers= [
    {
    
         city: "slimani",
         deg:"50",

    },
    {
    
         city: "erbil",
         deg:"70",

    },
    {
    
         city: "duhok",
         deg:"50",

    },
    {
    
         city: "kerkuk",
         deg:"80",

    },
]

    
wethers.map(function(wether){
    ciliz = (wether.deg -32) * 5/9;
    wether.deg = ciliz;
    });
    console.log(wethers);

