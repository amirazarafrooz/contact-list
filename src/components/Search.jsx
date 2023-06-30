import Button from "./Button"
import '../CSS/Search.css'


const Search = ({resetSearchHandler,nameSearchHandler,nameSearchTerm,phoneSearchHandler,phoneSearchTerm,emailSearchHandler,emailSearchTerm}) => {
    return (
        <div className='formContainerSearch'> 
           
           <label  className="search-label">
           <img src='./src/assets/images/search-icon.svg'></img>
           Search contacts</label> 
        
        <form className="form-search">
        <div className='inputgroupsearch-name'> 
           <input className="input-search" placeholder="search name" value={nameSearchTerm} onChange={nameSearchHandler} /> 
           </div>
           <div className='inputgroupsearch-phone'> 
           <input className="input-search" placeholder="search phone" value={phoneSearchTerm} onChange={phoneSearchHandler} /> 
           </div>
           <div className='inputgroupsearch-email'> 
           <input className="input-search" placeholder="search email" value={emailSearchTerm} onChange={emailSearchHandler} /> 
            </div>
           <Button className='reset' submitFormHandler={resetSearchHandler} buttonText='❌'></Button>

        </form>
        </div>
    )

}



export default Search 