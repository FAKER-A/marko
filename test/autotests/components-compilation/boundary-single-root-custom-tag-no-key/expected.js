"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentBoundary = [],
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/boundary-single-root-custom-tag-no-key/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    my_component_template = marko_loadTemplate(require.resolve("./components/my-component")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    my_component_tag = marko_loadTag(my_component_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!--^" +
    __component.id +
    "-->");

  my_component_tag({}, out);

  out.w("<!--$" +
    __component.id +
    "-->");

  __component.___boundary = marko_componentBoundary;
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "./components/my-component"
    ]
  };
