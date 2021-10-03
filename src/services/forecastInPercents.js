const maxForecast = 15000

const ForecastInPercents = (value) => {
    return Math.round((value / maxForecast) * 100)
}

export default ForecastInPercents