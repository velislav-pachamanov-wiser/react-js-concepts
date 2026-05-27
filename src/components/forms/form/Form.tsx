import type { ReactElement, ReactNode } from 'react';
import { FormProvider, useForm, type DefaultValues, type FieldValues, type Mode, type UseFormReturn } from 'react-hook-form';

export type FormSubmitHandler<T extends FieldValues> = (data: T, methods: UseFormReturn<T>) => void | Promise<void>;

interface FormProps<T extends FieldValues> {
    children: ReactElement | ((methods: UseFormReturn<T>) => ReactNode);
    onSubmit: FormSubmitHandler<T>;
    defaultValues?: DefaultValues<T>;
    mode?: Mode;
    id?: string;
}

export function Form<T extends FieldValues>({ children, onSubmit, defaultValues, mode = 'onBlur', id }: FormProps<T>) {
    const methods = useForm<T>({ mode, defaultValues });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(data => onSubmit(data, methods))} id={id} noValidate>
                {typeof children === 'function' ? children(methods) : children}
            </form>
        </FormProvider>
    )
}