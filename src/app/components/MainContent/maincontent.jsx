import React, { useState, useEffect } from "react";
import { Mail, Phone, Instagram, Plus, Home, Camera, Linkedin } from 'lucide-react';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { summer, simao, luciana, heygler, jerdeson, logo, post1, post2, post3, post4, post6, post5, post7, post9, post8, perfilUnd } from "../../../assets/images";
import axios from "axios";

const MainContent = () => {
    const { user, token } = useContext(AuthContext)

    const InstagramPosts = () => {
        const instagramImages = [
            post1,
            post2,
            post3,
            post4,
            post5,
            post6,
            post7,
            post8,
            post9
        ];

        return (
            <div className="row">
                <div class="col-lg-12 col-md-12 right-box">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Instagram</strong> Post</h2>
                        </div>
                        <div className="body widget">
                            <ul className="list-unstyled instagram-plugin m-b-0">
                                {instagramImages.map((image, index) => (
                                    <li style={{ width: '30%' }} key={index}>
                                        <a href="https://www.instagram.com/startup_piaui/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <img src={image} alt={`Instagram post ${index + 1}`} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // const Temperatura = () => {
    //     const [location, setLocation] = useState(false)
    //     return (
    //         <div class="card weather2">
    //             <div class="city-selected body l-parpl">
    //                 <div class="row">
    //                     <div class="info col-7">
    //                         <div class="city"><span>City:</span> Teresina</div>
    //                         <div class="night">Day - 12:07 PM</div>
    //                         <div class="temp"><h2>34°</h2></div>
    //                     </div>
    //                     <div class="icon col-5">
    //                         <img src={summer} alt="" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    const Temperatura = () => {
        const [location, setLocation] = useState(null);
        const [city, setCity] = useState('Teresina');
        const [temperature, setTemperature] = useState('');
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');
        
        useEffect(() => {
            const fetchWeather = async (lat, lon) => {
                try {
                // API de Previsão do Tempo
                const weatherResponse = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
                );
                
                // API de Geocodificação Reversa (para obter nome da cidade)
                const geoResponse = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
                );
        
                setCity(geoResponse?.data.address.city || geoResponse?.data.address.town);
                setTemperature(`${weatherResponse?.data.current_weather.temperature}°C`);
                setLoading(false);
                } catch (err) {
                setError('Erro ao buscar dados do clima');
                setLoading(false);
                }
            };
        
            const getLocation = () => {
                if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    await fetchWeather(latitude, longitude);
                    },
                    async (error) => {
                    console.error('Erro na geolocalização', error);
                    // Fallback para coordenadas de Teresina
                    await fetchWeather(-5.0892, -42.8016);
                    setCity('Teresina');
                    }
                );
                }
            };
        
            getLocation();
        }, []);
        if (loading) return <div>Carregando...</div>;
        if (error) return <div>{error}</div>;
            return (
                <div className="card weather2">
                    <div className="city-selected body l-parpl">
                        <div className="row">
                            <div className="info col-7">
                                <div className="city"><span>City:</span> {city}</div>
                                <div className="night">Day - 12:07 PM</div>
                                <div className="temp"><h2>{parseInt(temperature).toFixed()+"°C"}</h2></div>
                            </div>
                            <div className="icon col-5">
                                <img src={summer} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

    return (
        <section className="content blog-page">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <small className="text-muted">Bem-vindo(a) a Shin.</small>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row clearfix">
                    {/* temperatura */}
                    <div class="col-lg-4">
                        <Temperatura />
                        <div className="card member-card">
                            <div className="header l-cyan">
                                <h4 className="m-t-10">{user?.username || 'Não encontrado'}</h4>
                            </div>
                            <div className="member-img">
                                <img src={user?.profile_picture || perfilUnd} className="rounded-circle" alt="profile-image" />
                            </div>
                            <div className="body">
                                <div>
                                    {/* <ul class="social-links list-unstyled">
                                        <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                        <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                        <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                                    </ul> */}
                                    <ul className="social-links list-unstyled align-items-center">
                                        <li className='mx-3'>
                                            <a href="" title="mail">
                                                <Mail size={28} />
                                            </a>
                                        </li>
                                        <li className='mx-3'>
                                            <a href="" title="phone">
                                                <Phone size={28} />
                                            </a>
                                        </li>
                                        <li className='mx-3'>
                                            <a href="" title="linkedin">
                                                <Linkedin size={28} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div style={{ padding: '4px' }}>
                                        <a href="/perfil" ><strong><span className="profileButton">Acessar meu perfil</span></strong></a>
                                        {/* <a href="/perfil"><span className="proButton">Acessar meu perfil</span></a> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* minhas startups */}
                    <div class="col-sm-8">
                        <div class="card">
                            <div class="header">
                                <h2><strong>Minhas</strong> Startups</h2>
                            </div>
                            <div class="body">
                                <div class="table-responsive social_media_table">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Logo</th>
                                                <th>Nome</th>
                                                <th>Mercado Inicial</th>
                                                <th style={{ width: "20%" }}>Time</th>
                                                <th style={{ width: "10%" }}>Fase de Aceleração</th>
                                                <th>Próxima Reunião</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <a href="/startup">
                                                        <img
                                                            className="rounded-circle"
                                                            src={logo}
                                                            width="58"
                                                            height="48" />
                                                    </a>
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Piauí, Brazil</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>
                                                    <ul class="list-unstyled team-info m-b-0">
                                                        <li><img src={simao} alt="Avatar" /></li>
                                                        <li><img src={luciana} alt="Avatar" /></li>
                                                        <li><img src={heygler} alt="Avatar" /></li>
                                                        <li><img src={jerdeson} alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge badge-info">Fase 3</span></td>
                                                <td>19 Mar 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <a href="/startup">
                                                        <img
                                                            className="rounded-circle"
                                                            src={logo}
                                                            width="58"
                                                            height="48" />
                                                    </a>
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Massachusetts, United States</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>
                                                    <ul class="list-unstyled team-info m-b-0">
                                                        <li><img src={simao} alt="Avatar" /></li>
                                                        <li><img src={luciana} alt="Avatar" /></li>
                                                        <li><img src={heygler} alt="Avatar" /></li>
                                                        <li><img src={jerdeson} alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge badge-success">Fase 2</span></td>
                                                <td>17 Jan 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <a href="/startup">
                                                        <img
                                                            className="rounded-circle"
                                                            src={logo}
                                                            width="58"
                                                            height="48" />
                                                    </a>
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">São Paulo, Brazil</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>
                                                    <ul class="list-unstyled team-info m-b-0">
                                                        <li><img src={simao} alt="Avatar" /></li>
                                                        <li><img src={luciana} alt="Avatar" /></li>
                                                        <li><img src={heygler} alt="Avatar" /></li>
                                                        <li><img src={jerdeson} alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge badge-info">Fase 3</span></td>
                                                <td>03 Mar 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <a href="/startup">
                                                        <img
                                                            className="rounded-circle"
                                                            src={logo}
                                                            width="58"
                                                            height="48" />
                                                    </a>
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Arizona, United States</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>
                                                    <ul class="list-unstyled team-info m-b-0">
                                                        <li><img src={simao} alt="Avatar" /></li>
                                                        <li><img src={luciana} alt="Avatar" /></li>
                                                        <li><img src={heygler} alt="Avatar" /></li>
                                                        <li><img src={jerdeson} alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge badge-warning">Fase 1</span></td>
                                                <td>20 Fev 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <img
                                                        className="rounded-circle"
                                                        src={logo}
                                                        width="58"
                                                        height="48" />
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Lisboa, Portugal</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>
                                                    <ul class="list-unstyled team-info m-b-0">
                                                        <li><img src={simao} alt="Avatar" /></li>
                                                        <li><img src={luciana} alt="Avatar" /></li>
                                                        <li><img src={heygler} alt="Avatar" /></li>
                                                        <li><img src={jerdeson} alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge badge-warning">Fase 1</span></td>
                                                <td>25 Jan 2025</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* calendario */}
                    <div className="col-lg-4">
                        <div className="card w_calender">
                            <div className="date l-slategray">
                                <span>Sunday, December 28</span>
                                <span>2017</span>
                            </div>
                            <div className="body days">
                                <ul className="m-t-10">
                                    <li>MON</li>
                                    <li>TUE</li>
                                    <li>WED</li>
                                    <li>THU</li>
                                    <li>FRI</li>
                                    <li>SAT</li>
                                    <li>SUN</li>
                                </ul>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                </ul>
                                <ul>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>11</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                </ul>
                                <ul>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>19</li>
                                    <li>20</li>
                                    <li>21</li>
                                </ul>
                                <ul>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li><em>28</em></li>
                                </ul>
                                <ul>
                                    <li>29</li>
                                    <li>30</li>
                                    <li>31</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </div>
                        </div>
                        <InstagramPosts />
                    </div>
                    {/* timeline */}
                    <div role="tabpanel" className="col-md-12 col-lg-8">
                        <ul className="cbp_tmtimeline">
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-04T18:30"><span className="hidden">25/12/2017</span> <span className="large">Now</span></time>
                                <div className="cbp_tmicon"><i className="zmdi zmdi-account"></i></div>
                                <div className="cbp_tmlabel empty"> <span>No Activity</span> </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-04T03:45"><span>03:45 AM</span> <span>Today</span></time>
                                <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-label"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Art Ramadani</a> <span>posted a status update</span></h2>
                                    <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-03T13:22"><span>01:22 PM</span> <span>Yesterday</span></time>
                                <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Job Meeting</a></h2>
                                    <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                                <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Arlind Nushi</a> <span>checked in at</span> <a href="javascript:void(0);">New York</a></h2>
                                    <blockquote>
                                        <p className="blockquote blockquote-primary">
                                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                            <br />
                                            <small>
                                                - Isabella
                                            </small>
                                        </p>
                                    </blockquote>
                                    <div className="row clearfix">
                                        <div className="col-lg-12">
                                            <div className="map m-t-10">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477011208!2d-74.11976308802028!3d40.69740344230033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1508039335245" frameborder="0" style={{ border: 0, width: '100%' }} allowfullscreen=""></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                                <div className="cbp_tmicon bg-orange"><i className="zmdi zmdi-camera"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Eroll Maxhuni</a> <span>uploaded</span> 4 <span>new photos to album</span> <a href="javascript:void(0);">Summer Trip</a></h2>
                                    <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image1.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image2.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image3.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image4.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-03T13:22"><span>01:22 PM</span> <span>Two weeks ago</span></time>
                                <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Job Meeting</a></h2>
                                    <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-10-22T12:13"><span>12:13 PM</span> <span>Month ago</span></time>
                                <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Arlind Nushi</a> <span>checked in at</span> <a href="javascript:void(0);">Laborator</a></h2>
                                    <blockquote>Great place, feeling like in home.</blockquote>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )}


export default MainContent