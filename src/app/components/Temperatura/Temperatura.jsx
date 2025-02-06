import axios from "axios";
import { useEffect, useState } from "react";
import { summer } from "../../../assets/images";

export const Temperatura = () => {
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
    if (loading) return <div>Carregando clima...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className="card weather2">
            <div className="city-selected body l-parpl">
                <div className="row">
                    <div className="info col-7">
                        <div className="city"><span>City:</span> {city}</div>
                        <div className="night">Day - 12:07 PM</div>
                        <div className="temp"><h2>{parseInt(temperature).toFixed() + "°C"}</h2></div>

                    </div>
                    <div className="icon col-5">
                        <img src={summer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};