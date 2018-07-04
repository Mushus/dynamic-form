import { FormDefinitionObj, FormProperty, FormType } from '@/declare';

// フォームのキーを元に新しくフォームの値を作り直す
export const updateFormStructure = (
  formDefinitionObj: FormDefinitionObj,
  values: { [x: string]: any }
) => {
  const keys = generateFormKeys(formDefinitionObj.edit, values);
  return keys.reduce(
    (prev, key) => ({
      ...prev,
      [key]: values[key] != null ? values[key] : null,
    }),
    {}
  );
};

// フォームのキーを作る
export const generateFormKeys = (
  formProperties: FormProperty[],
  values: object
): string[] => {
  return formProperties.reduce((prev, val): string[] => {
    let next = [];
    if (val.form.type == FormType.Group) {
      next = generateFormKeys(val.form.properties, values).map(
        v => `${val.name}.${v}`
      );
    } else {
      next = [val.name];
    }
    return [...prev].concat(next);
  }, []);
};
