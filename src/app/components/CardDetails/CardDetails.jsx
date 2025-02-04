export default function CardDetails({ register }) {
    return (

        <div className="card">
            <div className="w-100 col-md-12">
                <div className="form-group">
                    <div className="header">
                        <h2 style={{ fontSize: "1.0625rem" }}><strong>Mercado inicial</strong></h2>
                    </div>
                    <div className="col-12">
                        <select
                            id="market"
                            className="form-control select_styled"
                            {...register("market")}
                            defaultValue="">
                            <option value="" disabled>Sua resposta</option>
                                <option value="Agricultura e Pecuária">Agricultura e Pecuária</option>
                                <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                                <option value="Automotivo e Mobilidade">Automotivo e Mobilidade</option>
                                <option value="Capital e Investimentos">Capital e Investimentos</option>
                                <option value="Comércio eletrônico">Comércio eletrônico</option>
                                <option value="Comunicação e Mídia">Comunicação e Mídia</option>
                                <option value="Construção e Imóveis">Construção e Imóveis</option>
                                <option value="Crédito e Finanças">Crédito e Finanças</option>
                                <option value="Educação">Educação</option>
                                <option value="Energia">Energia</option>
                                <option value="Esportes e Lazer">Esportes e Lazer</option>
                                <option value="Gestão e Consultoria">Gestão e Consultoria</option>
                                <option value="Governo e Poder Público">Governo e Poder Público</option>
                                <option value="Hotelaria e Turismo">Hotelaria e Turismo</option>
                                <option value="Indústria e Transformação">Indústria e Transformação</option>
                                <option value="Jogos e Entretenimento">Jogos e Entretenimento</option>
                                <option value="Logística e Transportes">Logística e Transportes</option>
                                <option value="Moda e Vestuário">Moda e Vestuário</option>
                                <option value="Motores e Equipamentos">Motores e Equipamentos</option>
                                <option value="Óleo e Gás">Óleo e Gás</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Bem Estar">Bem Estar</option>
                                <option value="Segurança e Defesa">Segurança e Defesa</option>
                                <option value="Seguros">Seguros</option>
                                <option value="Serviços profissionais">Serviços profissionais</option>
                                <option value="Meio ambiente">Meio ambiente</option>
                                <option value="Sustentabilidade">Sustentabilidade</option>
                                <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                                <option value="Telecomunicações">Telecomunicações</option>
                                <option value="Varejo e Atacado">Varejo e Atacado</option>
                                <option value="Outro">Outro</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="w-100 col-md-12">
                <div className="form-group">
                    <div className="header">
                        <h2 style={{ fontSize: "1.0625rem" }}><strong>Segmento inicial de atuação</strong></h2>
                    </div>
                    <div className="col-12">
                        <select id="segment"
                            className="form-control select_styled"
                            {...register("segment")}
                            defaultValue="">
                            <option value="" disabled>Sua resposta</option>
                            <option value="b2b">B2B (Business to Business)</option>
                            <option value="b2c">B2C (Business to Consumer)</option>
                            <option value="b2g">B2G (Business to Government)</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="w-100 col-md-12">
                <div className="form-group">
                    <div className="header">
                        <h2 style={{ fontSize: "1.0625rem" }}><strong>Tipo de cliente da solução</strong></h2>
                    </div>
                    <div className="col-12">
                        <select id="client_type"
                            className="form-control select_styled"
                            {...register("client_type")}
                            defaultValue="">
                            <option value="" disabled>Sua resposta</option>
                            <option value="nao_sei">Não sei</option>
                            <option value="b2c">B2C - business-to-consumer</option>
                            <option value="b2b">B2B - business-to-business</option>
                            <option value="b2g">B2G - business-to-government</option>
                            <option value="b2b2c">B2B2C - business-to-business-to-consumer</option>
                            <option value="b2c2b">B2C2B - business-to-consumer-to-business</option>
                            <option value="c2b">C2B - consumer-to-business</option>
                            <option value="c2c">C2C - consumer-to-consumer</option>
                            <option value="d2c">D2C - direct-to-consumer</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="w-100 col-md-12">
                <div className="form-group">
                    <div className="header">
                        <h2 style={{ fontSize: "1.0625rem" }} ><strong>Modelo de receita</strong></h2>
                    </div>
                    <div className="col-12">
                        <select id="revenue_model" {...register("revenue_model")} className="form-control select_styled" defaultValue="">
                            <option value="" disabled>Sua resposta</option>
                            <option value="nao_sei">Não sei</option>
                            <option value="afiliados">Afiliados</option>
                            <option value="anuncio">Anúncio</option>
                            <option value="assinatura">Assinatura</option>
                            <option value="freemium">Freemium</option>
                            <option value="licenciamento">Licenciamento</option>
                            <option value="intermediacao_negocios">Intermediação de Negócios</option>
                            <option value="pay_per_use">Pay per Use</option>
                            <option value="venda_hardware">Venda de Hardware ou produto físico</option>
                            <option value="venda_direta">Venda Direta</option>
                            <option value="transacional">Transacional</option>
                            <option value="outro">Outro</option>

                        </select>
                    </div>
                </div>
            </div>

            <div className="w-100 col-md-12">
                <div className="form-group">
                    <div className="header">
                        <h2 style={{ fontSize: "1.0625rem" }}><strong>Modelo de negócio</strong></h2>
                    </div>
                    <div className="col-12">
                        <select id="business_model" {...register("business_model")} className="form-control select_styled" defaultValue="">
                            <option value="" disabled>Sua resposta</option>
                            <option value="nao_sei">Não sei</option>
                            <option value="afiliados_marketing">Afiliados / Marketing de influência</option>
                            <option value="conteudo_premium">Conteúdo premium / Licenciamento de conteúdo / Educação on-line</option>
                            <option value="cooperativa">Cooperativa</option>
                            <option value="software_house">Software house</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="marketplace">Marketplace</option>
                            <option value="saas">SAAS - Software como serviço</option>
                            <option value="haas">HAAS - Hardware como serviço</option>
                            <option value="industria">Indústria: Fabricação e venda direta online ou offline</option>
                            <option value="educacao_online">Educação on-line</option>
                            <option value="comercio_offline">Comércio Offline</option>
                            <option value="servico_offline">Serviço Offline</option>
                            <option value="educacao_offline">Educação off-line</option>
                            <option value="intermediacao_negocios">Intermediação de negócios</option>
                            <option value="negocio_social">Negócio social</option>
                            <option value="publicidade">Publicidade</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
