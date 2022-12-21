export const getColor = (c: string) => {
    const name = c.toLowerCase()
    if (name === 'economic') {
        return '#09922F'
    } if (name === 'entertainment') {
        return '#B374D1'
    } if (name === 'sport') {
        return '#B1B50B'
    }
}