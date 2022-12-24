export const getColor = (c: string | any) => {
    const name = c.toLowerCase()
    if (name === 'economic') {
        return '#09922F'
    } else if (name === 'entertainment') {
        return '#B374D1'
    } else if (name === 'sport') {
        return '#B1B50B'
    } else if (name === 'music') {
        return '#1BA3AC'
    } else if (name === 'food') {
        return '#FB5E3C'
    }
}