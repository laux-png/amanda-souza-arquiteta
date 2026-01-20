import "./Apresentation.css";
import NefertariJoias from '../../../assets/NefertariJoias.png';

export default function Apresentation() {
    return (
        <section className="apresentation__page">
            <div className="apresentation__background-top" />
            <div className="apresentation__background-bottom" />

            <div className="apresentation__content">
                <div className="apresentation__image-container">
                    <img
                        src={NefertariJoias}
                        alt="Fachada da loja"
                        className="apresentation__content-image"
                    />
                </div>
                <div className="apresentation__info">
                    <div className="apresentation__info-container">
                        <h1>
                            Portifólio{" "}
                            <label
                                htmlFor=""
                                className="apresentation__normal-text"
                            >
                                Arquitetura e Interiores
                            </label>
                        </h1>
                        <div className="apresentation__autor">
                            <p>Amanda Souza</p>
                            <div className="apresentation__line" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
