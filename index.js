import Head from 'next/head';
import Script from 'next/script';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>ALPHA -WEB design</title>
            </Head>
            
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="#top">Alpha</a>
                </div>
                <ul className="menu">
                    <li><a href="#top" className="menu-btn">Home</a></li>
                    <li><a href="#services" className="menu-btn">Serviços</a></li>
                    <li><a href="#contact" className="menu-btn">Contato</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>

        <section className="top" id="top">
            <div className="max-width">
                <div className="top-content">
                    <div className="text-1">Quer montar a sua empresa</div>
                    <div className="text-2">mas não tem a sua marca registrada</div>
                    <div className="text-3">Podemos ajudar no visual do seu negócio!</div>
                    <a href="#">Entrar em Contato</a>
                </div>
            </div>
        </section>

        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">Serviços</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">
                                W
                            </div>
                            <p>O nosso WORKSPACE é projetado para atender com rapidez e qualidade a todos os clientes.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-laptop-code"></i>
                            <div className="text">
                               E
                            </div>
                            <p>Nossa EQUIPE é de total qualidade e fazemos atendimentos personalizados.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-mobile-alt"></i>
                            <div className="text">
                                B
                            </div>
                            <p>Trabalhamos com ótimos preços tudo para a segurança do seu BOLSO.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">
                        <p>Para obter mais informações sobre nossos atendimentos, entre em contato conosco.</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Empresa</div>
                                    <div className="sub-title">Alpha - WEB design</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Endereço</div>
                                    <div className="sub-title">Avenida Washinton Soares</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">E-mail</div>
                                    <div className="sub-title">alpha@web.com.br</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Mensagem de Contato</div>
                        <form>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Digite o nome" required/>
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Digite o e-mail" required/>
                                </div>
                            </div>

                            <div className="field">
                                <input type="text" placeholder="Digite o assunto" required/>
                            </div>

                            <div className="field textarea">
                                <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
                            </div>

                            <div className="button-area">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

           
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />

            <Script src="custom.js" strategy="afterInteractive" />
        </div>
    );
}

export default Home;