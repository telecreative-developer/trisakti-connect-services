// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
	// eslint-disable-line no-unused-vars
	return function relationshipShop(hook) {
		// Hooks can either return nothing or a promise
		hook.params.sequelize = {
			raw: false,
			include: [hook.app.services.shopcategory.Model]
		}
		// that resolves with the `hook` object for asynchronous operations
		return Promise.resolve(hook)
	}
}
