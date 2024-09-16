// import React from 'react'

// function Card({username, btnText="visit me"}) {
//     console.log(username);
//   return (
//     <div className="relative h-[400px] w-[300px] rounded-md ">
//   <img
//     src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
//     alt="AirMax Pro"
//     className="z-0 h-full w-full rounded-md object-cover"
//   />
//   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//   <div className="absolute bottom-4 left-4 text-left">
//     <h1 className="text-lg font-semibold text-white">{username}</h1>
//     <p className="mt-2 text-sm text-gray-300">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
//       debitis?
//     </p>
//     <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
//       {btnText } →
//     </button>
//   </div>
// </div>
//   )
// }

// export default Card



// import React from 'react'



function Card(name) {
console.log("props",name);
  return (
              <div>
              <h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'> Tailwind Test</h1>

              <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/20215015/pexels-photo-20215015/free-photo-of-a-person-holding-a-book-on-a-bed-with-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="600" height="600"/>

          <div className="relative h-[400px] w-[300px] rounded-md mg-4">
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent "></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              profile →
            </button>


          </div>

          </div>

          </figure>

          </div>
  )
}

export default Card



