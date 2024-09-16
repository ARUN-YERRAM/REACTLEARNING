import {serve} from 'bun';


serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response("Welcome to Bun!");
        }
    }
})

const server = Bun.serve({
    port: 3000,
    fetch(request) {
      return new Response("Welcome to Bun!");
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);