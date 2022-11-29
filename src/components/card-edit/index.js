const CardInfo = (props) => {


    return (
        
        props.countrie.map((pais) => (
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header" id="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Países pelo mundo</h1>
                    </div>
                    <div class="modal-body" id="modal-body">
                    <img src={pais.flags.png}
                     class="rounded float-start"
                     id="img-countrie"
                     alt="..."
                     />
                     <div className="container ms-5 mb-5">
                     <h1 id="title-countrie">{pais.name.common}</h1>
                        <div className="row">
                            <div className="col-4">
                                <p><span id="strong">Official Name:</span> {pais.name.official}</p>
                            </div>
                            <div className="col-4">
                                <p><span id="strong">Population:</span> {new Intl.NumberFormat().format(pais.population)}</p>
                            </div>
                            <div className="col-4">
                                <p><span id="strong">Region: </span>{pais.region}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><span id="strong">Sub Region:</span> {pais.subregion}</p>
                            </div>
                            <div className="col">
                                <p><span id="strong">Capital:</span> {pais.capital}</p>
                            </div>
                            <div className="col">
                                <p><span id="strong">Top level Domain:</span> {pais.tld[0]}</p>
                            </div>
                        </div>

                     </div>

                    </div>
                    <div class="modal-footer" id="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        ))
        
    )
}

export default CardInfo