

export const preloadHomeData = (ctx, next) => {
    ctx.searchForVehicle = searchForVehicle
    next()
}

const searchForVehicle = (ctx, forCar, category) => {
    localStorage.setItem('searchVehicleData', JSON.stringify({forCar, category}))
    ctx.page.redirect('/catalog')
}