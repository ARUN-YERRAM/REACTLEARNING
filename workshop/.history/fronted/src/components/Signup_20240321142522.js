const Signup = () => {
    return (
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                <p className="mt-2 text-base text-gray-600">
                  Already have an account?{' '}
                  <a
                    href="#"
                    title=""
                    className="font-medium text-black transition-all duration-200 hover:underline"
                  >
                    Sign In
                  </a>
                </p>
                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-base font-medium text-gray-900">
                        {' '}
                        Full Name{' '}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Full Name"
                          id="name"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="text-base font-medium text-gray-900">
                        {' '}
                        Email address{' '}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                          {' '}
                          Password{' '}
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Create Account <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  <button
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-6 w-6 text-rose-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                      </svg>
                    </span>
                    Sign up with Google
                  </button>
                  <button
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-6 w-6 text-[#2563EB]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                      </svg>
                    </span>
                    Sign up with Facebook
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="mx-auto h-full w-full rounded-md object-cover"
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt=""
              />
            </div>
          </div>
        </section>
    )<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Weather App</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <style>
          /* Add your custom CSS rules here */
          body {
            background-image: '.images/weather1_bgpic.jpg';
            background-size: cover; /* Cover the entire viewport */
            background-position: center; /* Center the image */
            background-repeat: no-repeat; /* Do not repeat the image */
          }
          /* Override Bootstrap styles */
          .btn {
              background-color: transparent;
              border-color: #ffffff;
          }
          .card-body{
            background-color: pink;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border: 1px solid #ccc;
          }
      </style>
      </head>
      <body>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Weather App</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <!-- <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li> -->
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">About this App</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Usage Guide</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Select City
                    </a>
                    <ul class="dropdown-menu" >
                      <li><a class="dropdown-item" href="#">Hyderabad</a></li>
                      <li><a class="dropdown-item" href="#">Bangalore</a></li>
                      <li><a class="dropdown-item" href="#">Chennai</a></li>
                      <li><a class="dropdown-item" href="#">Delhi</a></li>
                      <li><a class="dropdown-item" href="#">Mumbai</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input id="city" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit" id="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          
          <div class="container">
            <main>
              <h1 class= "my-4 text-center">Weather for <span id="cityName"></span></h1>
              <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary" >
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Temperatures</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title"><span id="temp2"></span><small class="text-body-secondary fw-light"></span><span>&#8451;</span></small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Temperature - <span id="temp" ></span></li>
                      <li>Min Temperature - <span id="min_temp"></span></li>
                      <li>Max Temperature - <span id="max_temp"></span></li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary"></button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Humidity Info</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title"><span id="humidity2" ></span><small class="text-body-secondary fw-light">%</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Humidity - <span id="humidity" ></span></li>
                      <li>Cloud PCT - <span id="cloud_pct" ></span></li>
                      <li>Feels Like - <span id="feels_like" ></span></li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary"></button>
                  </div>
                </div>
              </div>
    
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Wind Info</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title"><span id="wind_speed2" ></span><small class="text-body-secondary fw-light">km/hr</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Wind speed - <span id="wind_speed" ></span></li>
                      <li>Sunrise Time - <span id="sunrise" ></span></li>
                      <li>Sunset Time - <span id="sunset" ></span></li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary"></button>
                  </div>
                </div>
              </div>
            </div>
            <h2 class="my-4 text-center">Weather of common places</h2>
            <div class="table-responsive">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th style="width: 0%;">Places</th>
                    <th style="width: 5%;">Cloud_pct </th>
                    <th style="width: 5%;">Feels_like </th>
                    <th style="width: 5%;">Humidity</th>
                    <th style="width: 5%;">Max_temp </th>
                    <th style="width: 5%;">Min_temp </th>
                    <th style="width: 5%;">Sunrise </th>
                    <th style="width: 5%;">Sunset </th>
                    <th style="width: 5%;">Temp </th>
                    <th style="width: 5%;">Wind_speed </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"class="text-start"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
        
                <tbody>
                  <tr>
                    <th scope="row" class="text-start"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main></div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script src="script.js"></script>
    </body>
    </html>
}
 
export default Signup;