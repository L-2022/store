import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._baskets = [
            {id: 1, device_id: '1', basket_id: '1',},
            {id: 2, device_id: '2', basket_id: '2',},
            {id: 3, device_id: '1', basket_id: '1',},
            {id: 4, device_id: '2', basket_id: '2',},
        ]
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    setBasket(basket) {
        this._baskets = basket
    }

    get baskets() {
        return this._baskets
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }



}
