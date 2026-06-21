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
    let newData = [];
    let healthSort = [];
    for (let pers of data) {
        healthSort.push(pers.health);
        }
    healthSort.sort((a, b) => b - a);
    for (let i of healthSort) {
        newData.push(data.filter(pers => pers.health === i)[0])
    }
    return newData
}
