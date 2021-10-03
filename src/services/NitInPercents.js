const maxNIT = 10000

const NitInPercents = (value) => {
    return Math.round((value / maxNIT) * 100)

}

export default NitInPercents