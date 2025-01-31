export default function CardDetails() {
    return (
        <div>
            <div className="card">
                <div className="w-100 col-md-12">
                    <div className="form-group">
                        <div className="header">
                            <h2 style={{fontSize: "1rem"}}><strong>Mercado inicial</strong></h2>
                        </div>
                        <div className="col-12">
                            <select id="market" className="form-control select_styled" defaultValue="">
                                <option value="" disabled>Sua resposta</option>
                                <option value="tecnologia">Tecnologia</option>
                                <option value="saude">Saúde</option>
                                <option value="educacao">Educação</option>
                                <option value="financas">Finanças</option>
                                <option value="varejo">Varejo</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-100 col-md-12">
                    <div className="form-group">
                        <div className="header">
                            <h2 style={{fontSize: "1rem"}}><strong>Segmento inicial de atuação</strong></h2>
                        </div>
                        <div className="col-12">
                            <select id="segment" className="form-control select_styled" defaultValue="">
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
                            <h2  style={{fontSize: "1rem"}}><strong>Tipo de cliente da solução</strong></h2>
                        </div>
                        <div className="col-12">
                            <select id="customer_type" className="form-control select_styled" defaultValue="">
                                <option value="" disabled>Sua resposta</option>
                                <option value="empresas_pequenas">Pequenas empresas</option>
                                <option value="empresas_grandes">Grandes empresas</option>
                                <option value="consumidor_final">Consumidor final</option>
                                <option value="governo">Governo</option>
                                <option value="startups">Startups</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-100 col-md-12">
                    <div className="form-group">
                        <div className="header">
                            <h2 style={{fontSize: "1rem"}} ><strong>Modelo de receita</strong></h2>
                        </div>
                        <div className="col-12">
                            <select id="revenue_model" className="form-control select_styled" defaultValue="">
                                <option value="" disabled>Sua resposta</option>
                                <option value="assinatura">Assinatura</option>
                                <option value="freemium">Freemium</option>
                                <option value="comissao">Comissão sobre vendas</option>
                                <option value="licenciamento">Licenciamento</option>
                                <option value="publicidade">Publicidade</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-100 col-md-12">
                    <div className="form-group">
                        <div className="header">
                            <h2  style={{fontSize: "1rem"}}><strong>Modelo de negócio</strong></h2>
                        </div>
                        <div className="col-12">
                            <select id="business_model" className="form-control select_styled" defaultValue="">
                                <option value="" disabled>Sua resposta</option>
                                <option value="marketplace">Marketplace</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="saas">SaaS (Software as a Service)</option>
                                <option value="plataforma">Plataforma</option>
                                <option value="consultoria">Consultoria</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
