module.exports = function override(config, env) {
    // Add the 'os-browserify' polyfill for the 'os' module
    config.resolve.fallback = { "os": require.resolve("os-browserify/browser") };
    return config;
};
