import './Contact.css'

const Contact = () => {
    return ( 
        <div className="container">
            <form onSubmit>
                <label> VOTRE NOM [REQUIS]
                    <input type="text" />
                </label>
                <label> VOTRE ADDRESSE EMAIL [REQUIS]        
                    <input type="text" />
                </label>
                <label> VOTRE NUMERO DE TELEPHONE EMAIL       
                    <input type="number"/>
                </label> 
                <label> VOTRE MESSAGE [REQUIS]
                    <textarea/>
                </label>
                <input type="submit" value="ENVOYER" />
            </form>
            <h2> NOTRE LOCALISATION</h2>
        </div> 
    );
}

export default Contact;