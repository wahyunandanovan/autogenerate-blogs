export const getColor = (id: string | any) => {
    if (id === '1') {
        return '#09922F'
    } else if (id === '2') {
        return '#B374D1'
    } else if (id === '3') {
        return '#B1B50B'
    } else if (id === '4') {
        return '#1BA3AC'
    } else if (id === '5') {
        return '#FB5E3C'
    } else if (id === '6') {
        return 'violet'
    } else if (id === '7') {
        return 'coral'
    } else if (id === '8') {
        return 'purple'
    } else if (id === '9') {
        return 'green'
    } else if (id === '10') {
        return 'yellowgreen'
    } else {
        return '#F20231'
    }
}
export const getCategoryName = (id: string | any) => {
    if (id === '1') {
        return 'ECONOMIc'
    } else if (id === '2') {
        return 'POLITIC'
    } else if (id === '3') {
        return 'SOCIAL'
    } else if (id === '4') {
        return 'CULTURE'
    } else if (id === '5') {
        return 'SPORT'
    } else if (id === '6') {
        return 'TECHNOLOGY'
    } else if (id === '7') {
        return 'ASTRONOMY'
    } else if (id === '8') {
        return 'SCIENCE'
    } else if (id === '9') {
        return 'ENTERTAINMENT'
    } else if (id === '10') {
        return 'MUSIC'
    } else {
        return 'CATEGORY'
    }
}