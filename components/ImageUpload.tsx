"use client"

import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form';

const formSchema = z.object({
  file: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: 'Você deve selecionar um arquivo.',
    }),
});

interface FormData {
  file: File[];
}

const ImageUpload: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: [], // Inicializado como um array vazio
    },
  });

  const [imageUrl, setImageUrl] = useState<string>('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('upload_preset', 'docs_upload_example_us_preset');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro no upload');
      }

      const result = await response.json();
      setImageUrl(result.secure_url);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Escolha um arquivo</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        field.onChange(Array.from(e.target.files)); // Converte FileList para Array
                      }
                    }}
                    className="p-2 border rounded"
                  />
                </FormControl>
                <FormMessage>{methods.formState.errors.file?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Upload Files</Button>
        </form>
      </FormProvider>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Uploaded file" className="max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;