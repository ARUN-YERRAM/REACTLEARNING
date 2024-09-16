import {serve} from 'bun';


serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response("Welcome to Bun!",{status:200});
        } else if(url.pathname === '/ice-tea'){
            return new Response("Iced Tea",{status:200});
        } else{
            return new Response("Not Found",{status:404});
        }
    },
    port: 3000
    
})

const server = Bun.serve({
    port: 3000,
    fetch(request) {
      return new Response("Welcome to Bun!");
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);