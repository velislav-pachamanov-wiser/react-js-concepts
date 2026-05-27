import { Controller, useFormContext, type ControllerRenderProps, type FieldValues, type Path } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField, type TextFieldProps } from '@mui/material';
import type { ReactElement } from "react";


interface FormInputProps<T extends FieldValues> extends Omit<TextFieldProps, 'name' | 'value' | 'defaultValue' | 'onChange' | 'onBlur' | 'ref'> {
    name: Path<T>;
    validate?: (value: unknown) => string | true;
    renderInput?: (props: { field: ControllerRenderProps<T, Path<T>>; error?: string }) => ReactElement;
}

export default function FormInput<T extends FieldValues>({ name, validate, renderInput, label, ...props }: FormInputProps<T>) {
    const { control, formState: { errors } } = useFormContext<T>();
    const errorMessage = errors[name]?.message as string | undefined;

    return (
        <Controller
            control={control}
            name={name}
            rules={validate ? { validate } : undefined}
            render={({ field }) => {
                if (renderInput) {
                    return renderInput({ field, error: errorMessage });
                }

                const { ref, value, onChange, onBlur, name: fieldName } = field;

                if (typeof value === 'boolean') {
                    return (
                        <FormControlLabel
                            label={label}
                            control={
                                <Checkbox
                                    name={fieldName}
                                    checked={value}
                                    onChange={(_, checked) => onChange(checked)}
                                    onBlur={onBlur}
                                    slotProps={{ input: { ref, name: fieldName } }}
                                />
                            }
                        />
                    );
                }

                return (
                    <TextField
                        {...props}
                        name={fieldName}
                        label={label}
                        inputRef={ref}
                        value={value ?? ''}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        error={!!errors[name]}
                        helperText={errorMessage}
                    />
                );
            }}
        />
    );
}