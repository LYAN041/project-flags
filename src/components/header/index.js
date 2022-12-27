import '../style.css'
import { useState } from 'react';

const Header = ({ onSearch, onSelect }) => {

    const [input, setInput] = useState("");

    const submitHandler = (e) => {
      e.preventDefault();
  
      onSearch(input);
    };

    const selectHandler = (continent) => {
        onSelect(continent);
    };

    return (
        <div className="container-sm-fluid mt-5 px-5">
            <div className="row">
                <div className='col-sm-4'>
                <form class="d-flex" role="search" onSubmit={submitHandler}>

                    <input class="form-control"
                     id='btn-search'
                     type="text"
                     placeholder="Pesquisar"
                     aria-label="default input example"
                     value={input}
                     onChange={(e) => setInput(e.target.value)}>
                     </input>
                </form>
                </div>
                <div className="col-sm d-flex justify-content-end">
                    <div class="dropdown">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" id='btn-header' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Região
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" id='ul-drop'>
                            <li><a class="dropdown-item active" onClick={() => selectHandler("Africa")} >Africa</a></li>
                            <li><a class="dropdown-item" onClick={() => selectHandler("America")} >America</a></li>
                            <li><a class="dropdown-item" onClick={() => selectHandler("Asia")} >Asia</a></li>
                            <li><a class="dropdown-item" onClick={() => selectHandler("Europe")} >Europa</a></li>
                            <li><a class="dropdown-item" onClick={() => selectHandler("Oceania")} >Oceania</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;