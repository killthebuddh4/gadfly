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

const valueFormSchema = z.object({
  uuid: z.string().uuid(),
  type: z.string({
    required_error: "Please select a value type.",
  }),
  value: z.string({ required_error: "Please enter a value." }),
});

type ValueFormValues = z.infer<typeof valueFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ValueFormValues> = {
  // uuid: "The UUID of the value.",
};

export function ValueForm() {
  const form = useForm<ValueFormValues>({
    resolver: zodResolver(valueFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ValueFormValues) {
    toast({
      title: "You submitted the following value:",
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
                <Input placeholder="The value's UUID." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a value type." />
                  </SelectTrigger>
                </FormControl>
                {/* <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent> */}
              </Select>
              <FormDescription>
                The value's type determines the format of the value. Some
                examples are text, JSON, Markdown, and TypeScript.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the value."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The value is the actual content of the value. It must conform
                not only to the value's type but also to the type of the element
                that the value is attached to.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update value</Button>
      </form>
    </Form>
  );
}
