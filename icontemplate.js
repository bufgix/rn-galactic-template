function propTypesTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  props[0].typeAnnotation.typeAnnotation.id.name = '_SVGProps';
  return typeScriptTpl.ast`${imports}
      ${interfaces}
      interface _SVGProps extends SvgProps {
        xmlns?: string;
      }
      
      function ${componentName}(${props}:_SVGProps) {
        return ${jsx};
      }
      ${exports}
        `;
}
module.exports = propTypesTemplate;
