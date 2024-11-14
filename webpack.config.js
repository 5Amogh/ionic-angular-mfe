const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  // Webpack output configuration
  output: {
    publicPath: 'auto',  // Automatically determine the publicPath based on script location
  },

  // Webpack plugins configuration
  plugins: [
    new ModuleFederationPlugin({
      name: 'AngularApp',  // Define the name of the host Angular application
      filename: 'remoteEntry.js',  // The name of the federated entry file

      // Define remotes (your remote React app in this case)
      remotes: {
        react: 'react@http://localhost:4201/remoteEntry.js',  // Update with the correct remote URL
      },

      // Explicit shared dependencies configuration
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        // Add other Angular modules that your application depends on
        'react': { singleton: true, strictVersion: true, requiredVersion: '18.3.1' },
        'react-dom': { singleton: true, strictVersion: true, requiredVersion: '18.3.1' },
        // Add any other shared dependencies (e.g., libraries used in both apps)
      },
    }),
  ],
};
