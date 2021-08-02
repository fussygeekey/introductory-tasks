const routes = [
    { from: 'F', to: 'G' },
    { from: 'C', to: 'D' },
    { from: 'D', to: 'E' },
    { from: 'E', to: 'F' },
    { from: 'H', to: 'I' },
    { from: 'A', to: 'B' },
    { from: 'I', to: 'J' },
    { from: 'B', to: 'C' },
    { from: 'G', to: 'H' },
];

const restoreRoutes = routes => {
    const result = [routes.find(item => !routes.map(element => element.to).includes(item.from))];

    for (let i in routes) {
        for (let j in routes) {
            if ((result[i].to == routes[j].from)) {
                result.push(routes[j])
            }
        }
    }

    return result;
};

console.log(restoreRoutes(routes));
