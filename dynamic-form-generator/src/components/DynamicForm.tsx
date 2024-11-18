import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormSchema } from '../types/schema';

interface DynamicFormProps {
  schema: FormSchema;
}

export default function DynamicForm({ schema }: DynamicFormProps) {
  const formSchema = z.object(
    schema.fields.reduce((acc, field) => {
      acc[field.id] = field.required ? z.string().min(1, { message: `${field.label} is required` }) : z.string().optional();
      return acc;
    }, {} as Record<string, z.ZodType>)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold">{schema.formTitle}</h2>
      <p className="text-gray-600">{schema.formDescription}</p>
      {schema.fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          {field.type === 'text' || field.type === 'email' ? (
            <input
              type={field.type}
              id={field.id}
              {...register(field.id)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder={field.placeholder}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.id}
              {...register(field.id)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'radio' ? (
            <div className="mt-1 space-y-2">
              {field.options?.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    id={`${field.id}-${option.value}`}
                    value={option.value}
                    {...register(field.id)}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor={`${field.id}-${option.value}`} className="ml-3 block text-sm font-medium text-gray-700">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          ) : field.type === 'textarea' ? (
            <textarea
              id={field.id}
              {...register(field.id)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder={field.placeholder}
            />
          ) : null}
          {errors[field.id] && (
            <p className="mt-1 text-sm text-red-600">{errors[field.id]?.message as string}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}