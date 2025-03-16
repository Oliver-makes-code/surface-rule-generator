export type EnumObject<TValues extends string> = { readonly [k in TValues]: k };

export function EnumObject<TValues extends string>(
    ...values: TValues[]
): EnumObject<TValues> {
    //@ts-ignore h
    const output: EnumObject<TValues> = {};

    for (const value of values) {
        //@ts-ignore h
        output[value] = value;
    }

    return output;
}

export type EnumOf<TEnum extends { readonly [k in string]: k }> =
    & TEnum[keyof TEnum]
    & string;
