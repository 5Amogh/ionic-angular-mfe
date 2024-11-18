const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    publicPath: 'auto',  
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'AngularApp',  
      filename: 'remoteEntry.js',  
      remotes: {
        react: 'react@http://localhost:4201/remoteEntry.js', 
      },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: '18.2.11' },
        'react': { singleton: true, strictVersion: true, requiredVersion: '18.3.1' },
        'react-dom': { singleton: true, strictVersion: true, requiredVersion: '18.3.1' },
      },
    }),
  ],
};
