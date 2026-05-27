import type { TodoFormConfig } from 'src/configs/todo-form.config';
import { Card } from '../../../components/ui/Card'
import type { UseFormReturn } from 'react-hook-form';
import { createTodo } from '../todoApi';
import { Form } from 'src/components/forms/form/Form';
import FormInput from 'src/components/forms/form-input/FormInput';
import { Button } from 'src/components/ui/Button';
import { FormValidator } from 'src/utils/static/FormValidator';
import { TODO_FORM } from 'src/configs/form-names.config';
import styles from './TodoFormStyle.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const defaultValues: TodoFormConfig = {
  title: '',
  body: '',
  completed: false,
}

export default function TodoForm() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['todos'] });
    },
  });

  const handleSubmit = async (values: TodoFormConfig, methods: UseFormReturn<TodoFormConfig>) => {
    try {
      await createMutation.mutateAsync({
        userId: 1,
        title: values.title,
        body: values.body,
        completed: values.completed,
      });
      methods.reset(defaultValues);
    } catch {
      // Error state is shown via createMutation.isError
    }
  }

  const isSubmitting = createMutation.isPending;

  return (
    <Card title="New todo">
      <Form<TodoFormConfig> onSubmit={handleSubmit} defaultValues={defaultValues} id={TODO_FORM}>
        {() => (
          <div className={styles['todo-form']}>
            <FormInput name="title" label="Title" type="text" validate={v => FormValidator.isNotEmpty(v as string)} />
            <FormInput name="completed" label="Completed" type="checkbox" />
            <FormInput name="body" label="Body" type="text" validate={v => FormValidator.isNotEmpty(v as string)} />
            <Button type="submit" form={TODO_FORM} disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Todo'}
            </Button>
            {createMutation.isError && (
              <div role="alert">Error: {createMutation.error.message}</div>
            )}
          </div>
        )}
      </Form>
    </Card>
  )
}
