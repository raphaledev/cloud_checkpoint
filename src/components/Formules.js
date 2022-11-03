import './Formules.css'

const Formules = () => {
    return (  
        <div className="formules">
            <div className='list'>
            <h1>Formules</h1>
            <p>Tous les packs Awa incluent un site web avec :</p>
            <ul>
                <li>un nom de domaine, un hébergement illimité, et des comptes emails illimités ;</li>
                <li>un design responsive (adapté pour les mobiles) ;</li>
                <li>une optimisation pour le référencement naturel ;</li>
                <li>la révision/réorganisation de vos textes pour le web ;</li>
                <li>une vectorisation ou modernisation de votre logo.</li>
            </ul>
            </div>
            <div className='packs'>
                <div className='pack'>
                    <h3>Pack STARTER</h3>
                    <h2>400 000 FCFA</h2>
                    <p>une grande page</p>
                    <p>1 séance photo pro</p>
                    <p>manuel d’utilisation des emails<br></br><br></br></p>
                    <p>garantie de stabilité <br></br>mises à jour de sécurité <br></br> rapports annuel<br></br><br></br></p>
                    <p>Livraison : 5 jours</p>
                    <p>Maintenance : 100 000 fcfa / an</p>
                </div>
                <div className='pack'>
                    <h3>Pack PRO</h3>
                    <h2>800 000 FCFA</h2>
                    <p>environ 5 pages</p>
                    <p>1 séance photo pro</p>
                    <p>manuel d’utilisation des emails+ 2h de formation à Facebook</p>
                    <p>garantie de stabilité <br></br>mises à jour de sécurité <br></br> rapports mensuels<br></br><br></br></p>
                    <p>Livraison : 10 jours</p>
                    <p>Maintenance : 200 000 fcfa / an</p>  
                </div>
                <div className='pack'>
                    <h3> Pack PREMIUM</h3>
                    <h2>1 200 000 FCFA</h2>
                    <p>environ 5-10 pages + blog</p>
                    <p>2 séance photo pro</p>
                    <p>2 x 2h de formation à Facebook, WordPress & Emails</p>
                    <p>garantie de stabilité <br></br>mises à jour de sécurité <br></br> rapports mensuels <br></br>veille de position Google</p>
                    <p>Livraison : 15 jours</p>
                    <p>Maintenance : 300 000 fcfa / an</p>  
                </div>
            </div>
        </div>
    );
}

export default Formules;

