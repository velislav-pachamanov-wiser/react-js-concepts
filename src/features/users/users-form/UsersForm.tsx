import { useState } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import type { UserFormConfig } from 'src/configs/user-form.config'
import { Form } from 'src/components/forms/form/Form'
import FormInput from 'src/components/forms/form-input/FormInput'
import { Button } from 'src/components/ui/Button'
import { Card } from 'src/components/ui/Card'
import { FormValidator } from 'src/utils/static/FormValidator'
import { USER_FORM } from 'src/configs/form-names.config'
import { useAppDispatch } from 'src/store/hooks'
import { createUser } from '../usersApi'
import styles from './UsersFormStyle.module.scss'

const defaultValues: UserFormConfig = {
    name: '',
    username: '',
    email: '',
}

export default function UsersForm() {
    const dispatch = useAppDispatch()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const handleSubmit = async (
        values: UserFormConfig,
        methods: UseFormReturn<UserFormConfig>,
    ) => {
        setIsSubmitting(true)
        setSubmitError(null)

        try {
            await dispatch(
                createUser({
                    name: values.name,
                    username: values.username,
                    email: values.email,
                }),
            ).unwrap()

            methods.reset(defaultValues)
        } catch (err) {
            const message =
                err && typeof err === 'object' && 'message' in err
                    ? String((err as { message: string }).message)
                    : 'Failed to create user'
            setSubmitError(message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card title="New user">
            <Form<UserFormConfig> onSubmit={handleSubmit} defaultValues={defaultValues} id={USER_FORM}>
                {() => (
                    <div className={styles['users-form']}>
                        <FormInput
                            name="name"
                            label="Name"
                            validate={(v) => FormValidator.isNotEmpty(v as string)}
                        />
                        <FormInput
                            name="username"
                            label="Username"
                            validate={(v) => FormValidator.isNotEmpty(v as string)}
                        />
                        <FormInput
                            name="email"
                            label="Email"
                            type="email"
                            validate={(v) => FormValidator.isEmail(v as string)}
                        />
                        <Button type="submit" form={USER_FORM} disabled={isSubmitting}>
                            {isSubmitting ? 'Creating...' : 'Create User'}
                        </Button>
                        {submitError && <div role="alert">Error: {submitError}</div>}
                    </div>
                )}
            </Form>
        </Card>
    )
}
