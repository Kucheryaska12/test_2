export function healthCount(obj)  {
    if (obj.health > 50) {
        return 'healthy'
    } else if (obj.health >= 15) {
        return 'wounded'
    } else {
        return 'critical'
    }
}

export function heroesSort(data) {
    return data.sort((a, b) => b.health - a.health)
}
