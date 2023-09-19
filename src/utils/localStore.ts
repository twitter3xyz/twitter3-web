import {USER_INFO} from '@m/account/types'


export default {

    setItem() {

    },

    getItem() {
    },

    setUser(data: any) {
        if (typeof data == 'string') {
            // TODO check if JSON string?
            localStorage.setItem('user', data)

        } else {
            try {
                localStorage.setItem('user', JSON.stringify(data))
            } catch (e) {
                console.log('localStorage set user info error')
            }
        }
    },

    async getUser(): Promise<Partial<USER_INFO>> {
        const strUser = await localStorage.getItem('user')
        if (!strUser) return {}

        let user = {}
        try {
            user = JSON.parse(strUser)
        } catch (e) {
            localStorage.removeItem('user')
            console.log('localStorage user parse error')
        }
        return user
    },

    async getAccessToken(): Promise<string> {
        const user = await this.getUser()
        console.log('getAccessToken user',user, user.accessToken)
        return user.accessToken || ''
    }

}