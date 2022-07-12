import Container from "./container"

const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <Container>
               <input 
                value={props.searchTerm}
                placeholder="Search Pokemon..."
                onChange={props.handleInputChange} 
                type="text" 
                /> 
                {props.searchTerm ? (
                  <button type="button" onClick={props.reset}>Clear</button>  
                ) : (null)}
                
            </Container>
            
        </form>
    )
}

export default SearchForm