

// consome tabelajson

        window.addEventListener('load', () =>{
            fetch("/convertcsv.json").then((r)=>{
                r.json().then((tabelaPokemon) =>{
                    console.log(tabelaPokemon);
                    
                    new Vue({
                        el:"#app",
                        data:{
                         tabelaPokemon:tabelaPokemon,   
                        },
                        
                    });
                });
            });

        })
    