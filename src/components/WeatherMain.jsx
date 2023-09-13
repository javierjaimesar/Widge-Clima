import location from '../icon/location.svg';

function WeatherMain({ weather }) {
    return (
        <div>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <p className="text-7xl">{weather?.current.temp_c}º</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={`https:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} />
                    <p className="m-0">{weather?.current.condition.text}</p>
                </div>
            </div>
            <div className='flex py-5'>
                <p className="text-lg">{`${weather?.location.name} - ${weather?.location.country}`}</p>
                <img src={location} alt="location" width={'20px'} className='mx-1' />
            </div>
            <div className="max-w-xl">
                <iframe className='w-full'
                    title="mapa"
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56968.14056923625!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1694616441065!5m2!1ses-419!2sar`}
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default WeatherMain