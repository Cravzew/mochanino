export const state = () => ({
    users: []
})

export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}

export const actions = {
    fetchUsers({ commit }) {
        return fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
            .then(response => response.json())
            .then(data => {
                commit('setUsers', data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
}