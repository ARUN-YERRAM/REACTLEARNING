<Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<PageNotFound/>} /> 
          <Route path='/house/:id' element={<House/>}/>
          <Route path="listahouse" element={<ListAHouse/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/searchhouse/:id' element={<SearchHouse/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/enquiries' element={<Enquiries/>}/>
          <Route path='/search' element={<SearchFilter/>}/> 
          <Route path='/searchresults/:locality/:bhk' element={<SearchResults/>}/>     
             
          
      </Routes>