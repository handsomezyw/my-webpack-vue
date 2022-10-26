module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  overrides: [
    {
      files: 'src/**/*.less',
      customSyntax: 'postcss-less',
    },
  ],
};
