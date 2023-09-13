function WeatherMain({ weather }) {
    return (
        <div>
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <img src={`https:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} />
                <div>
                    <p>{weather?.current.condition.text}</p>
                    <p>{weather?.current.temp_c}º</p>
                </div>
            </div>
            <iframe
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56968.14056923625!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1694616441065!5m2!1ses-419!2sar`} width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default WeatherMain