// @ts-nocheck
import postHandler from './postHandler';
import getHandler from './getHandler';
import buildForms from './buildForms';
import { ISchema, IOptions } from './interfaces';
import { removeDefaultLabels } from './helpers';

export { default as govBuilder } from './gov';

export default function builder(
  schema: ISchema,
  baseUiSchema: object,
  getRoute: string,
  postRoute: string,
  options: IOptions
) {
  let uiSchema = { ...baseUiSchema };
  if (!options.defaultLabels) {
    uiSchema = removeDefaultLabels(schema, uiSchema);
  }
  const { Forms, schemasArray, fieldsArray } = buildForms(schema, uiSchema, getRoute, postRoute, options);
  const { validations } = options;
  const numForms: number = Forms.length;

  return {
    postHandler: postHandler.bind({}, getRoute, numForms, schema, schemasArray, fieldsArray, validations),
    getHandler: getHandler.bind({}, numForms),
    Forms,
  };
}
