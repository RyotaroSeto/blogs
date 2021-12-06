export default function({store, redirect}) {
    console.log(store.getters.Authenticated)
    if (store.getters.Authenticated) {
        return redirect("/profile")
    }
}
