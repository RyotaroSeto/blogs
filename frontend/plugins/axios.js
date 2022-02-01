export default function({ $axios, store }) {
	// $axios.onError(error => {
	// 	if (error.response.status !== undefined && error.response.status === 422) {
	// 		store.dispatch("validation/setErrors", error.response.data.errors);
	// 		// return redirect("/login");
	// 	}
	// 	return Promise.reject(error);
	// });

	$axios.onRequest(() => {
		store.dispatch("validation/clearErrors");
	});
}
