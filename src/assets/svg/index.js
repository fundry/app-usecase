const component = {};

const requireTemplate = require.context('.?vue-template', false, /\.svg$/);

context.keys().forEach((fileName) => {
  const name = 'Svg' + fileName.replace(/^\.\//, '').replace(/\.svg$/, '');

  const withRender = requireTemplate(fileName);
  component[name] = withRender({});
});

module.exports = component;
