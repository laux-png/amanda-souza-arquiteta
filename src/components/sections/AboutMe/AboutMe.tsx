import './AboutMe.css'
export default function AboutMe() {


    return (
        <section className='about-me__section'>
            <div className="about-me__content">
                <div className="about-me__top-line" />
                <div className='about-me__container'>
                    <div className="about-me__info">
                        <h1 className='about-me__title'>Sobre mim</h1>

                        <p className='about-me__text'>Sou estudante de Arquitetura e Urbanismo (8º
                            semestre – CESUCA), com previsão de formatura para
                            dezembro de 2026.
                            Possuo mais de 3 anos de experiência comprovada
                            como projetista de móveis sob medida, atuando em
                            todas as etapas do desenvolvimento de ambientes
                            residenciais e corporativos.
                            Tenho amplo domínio dos softwares Promob,
                            SketchUp, AutoCAD e Revit, IA para Renderizações, com
                            foco em soluções criativas, funcionais e alinhadas às
                            necessidades do cliente.
                            Também possuo experiência em canteiro de obras,
                            com leitura e compatibilização de projetos,
                            detalhamento técnico e contato direto com
                            fornecedores e equipes de execução.</p>
                    </div>

                    <div className='about-me__contact'>
                        <div className="about-me__image-container">
                            <h1>IMAGEM</h1>
                        </div>
                        <h1 className='about-me__contact-title'>Entre em contato</h1>
                        <ul className='about-me__list'>
                            <li>(51) 99686-5946</li>
                            <li>souza-amanda501@outlook.com</li>
                            <li>Gravataí - RS</li>
                            <li>https://www.linkedin.com/in/amanda-souza041914196/</li>
                        </ul>
                    </div>
                </div>

              
            </div >
            <div className="about-me__bottom-line-container">
                <div className="about-me__bottom-line" />
            </div>
        </section>

    )
}