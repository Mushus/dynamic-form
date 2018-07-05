import { FormProperty, FormType, FormValues } from '@/declare';

export const updateFormStructure = (
  formproperties: FormProperty[],
  values: FormValues
): any =>
  formproperties.reduce((prev, val) => {
    if (val.form.type == FormType.Group) {
      return {
        ...prev,
        [val.name]: updateFormStructure(
          val.form.properties,
          values[val.name] ? values[val.name] : []
        ),
      };
    }
    if (val.form.type == FormType.Dynamic) {
      const assets = val.form.formAssets;
      let newValues = [];
      if (Array.isArray(values[val.name])) {
        newValues = values[val.name];
      }
      return {
        ...prev,
        [val.name]: newValues.map((v: any) => {
          let count = 0; // TODO:
          const name = assets[count].property.name;
          return updateFormStructure([assets[count].property], v[name]);
        }),
      };
    }
    return {
      ...prev,
      [val.name]: values[val.name] != null ? values[val.name] : '',
    };
  }, {});

export const updateValue = (
  values: FormValues,
  keys: (string | number)[],
  value: any
): any => {
  if (keys.length == 0) return value;
  const key = keys.shift();
  if (typeof key === 'number') {
    let ary = [...(values as any[])];
    ary[key] = updateValue(values[key] as any, keys, value);
    return ary;
  }
  if (typeof key === 'string') {
    return {
      ...(values as object),
      [key]: updateValue(values[key], keys, value),
    };
  }
};
