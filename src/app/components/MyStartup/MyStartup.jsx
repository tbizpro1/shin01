import { StartupItem } from "../StartupItem/StartupItem"

export default function MyStartup({enterprise}) {
    return(
            <div class="card">
                <div class="header">
                    <h2><strong>Minhas</strong> Startups</h2>
                </div>
                <div class="body">
                    <div class="table-responsive social_media_table">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Startup</th>
                                    <th>Nome</th>
                                    <th>Mercado Inicial</th>
                                    <th style={{ width: "20%" }}>Equipe</th>
                                    <th style={{ width: "10%" }}>Fase de Aceleração</th>
                                    <th>Próxima Reunião</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    enterprise && Object.values(enterprise).map(enter => {
                                        console.log("aa",enter)
                                        return (
                                            <StartupItem enter={enter}/>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
};
