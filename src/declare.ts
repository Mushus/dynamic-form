export interface FormDefinition {
  text: string;
  obj: FormDefinitionObj;
}
export interface FormDefinitionObj {
  edit: FormProperty[];
}
export type AnyFormType =
  | FormTypeText
  | FormTypeTextarea
  | FormTypeNumber
  | FormTypeGroup
  | FormTypeDynamic;

export interface DynamicFormAsset {
  // アイコンとか
  property: FormProperty;
}

export interface FormProperty {
  label: string;
  name: string;
  form: AnyFormType;
}

export enum FormType {
  Text = 'text',
  Textarea = 'textarea',
  Number = 'number',
  Group = 'group',
  Dynamic = 'dynamic',
}
export interface FormTypeText {
  type: FormType.Text;
}
export interface FormTypeTextarea {
  type: FormType.Textarea;
}
export interface FormTypeGroup {
  type: FormType.Group;
  properties: FormProperty[];
}
export interface FormTypeNumber {
  type: FormType.Number;
}
export interface FormTypeDynamic {
  type: FormType.Dynamic;
  formAssets: DynamicFormAsset[];
}

export interface State {
  formDefinition: FormDefinition;
  formValue: any;
}

const initDefinitionObj: FormDefinitionObj = {
  edit: [
    {
      label: '一行',
      name: 'oneline',
      form: {
        type: FormType.Text,
      },
    },
    {
      label: '固定',
      name: 'fixed',
      form: {
        type: FormType.Group,
        properties: [
          {
            label: '説明',
            name: 'description',
            form: {
              type: FormType.Textarea,
            },
          },
          {
            label: '数字',
            name: 'number',
            form: {
              type: FormType.Number,
            },
          },
        ],
      },
    },
    {
      label: "動的",
      name: "dynamic",
      form: {
        type: FormType.Dynamic,
        formAssets: [
          {
            property: {
              label: "hoge",
              name: "hoge",
              form: {
                type: FormType.Text,
              },
            }
          },
        ]
      }
    }
  ],
};

export const initialState: State = {
  formDefinition: {
    text: JSON.stringify(initDefinitionObj, null, '\t'),
    obj: initDefinitionObj,
  },
  formValue: {},
};
