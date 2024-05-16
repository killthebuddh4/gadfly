"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form";
import { Input } from "@/registry/new-york/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select";
import { Textarea } from "@/registry/new-york/ui/textarea";
import { toast } from "@/registry/new-york/ui/use-toast";

const typeFormSchema = z.object({
  uuid: z.string().uuid(),
  url: z.string({
    required_error: "Please select a url for the type.",
  }),
  description: z.string({ required_error: "Please enter a value." }),
});

type TypeFormValues = z.infer<typeof typeFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<TypeFormValues> = {
  // uuid: "The UUID of the type.",
};

export function TypeForm() {
  const form = useForm<TypeFormValues>({
    resolver: zodResolver(typeFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: TypeFormValues) {
    toast({
      title: "You submitted the following type:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="uuid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UUID</FormLabel>
              <FormControl>
                <Input placeholder="The type's UUID." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="<graph|node|edge|pointer|value>/<name>"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {`The URL is a unique-but-descriptive identifier for the type. It should be like <graph|node|edge|pointer|value>/<name>`}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the type."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Think of a type like a set. The type's description describes the
                set. It answers the question "what are all members of this set
                like?".
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update type</Button>
      </form>
    </Form>
  );
}
