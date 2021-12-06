export default function ({$axios, store}) {
    $axios.onError(error => {
        if (error.response.status === 422 || error.response.status === 401) {
            store.dispatch("vadlidation/setErrors", error.response.data.errors)
        }
        return Promise.reject(error)
    })

    $axios.onRequest(() => {
        store.dispatch("vadlidation/clearErrors")
    })
}
