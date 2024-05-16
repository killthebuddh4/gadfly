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

const pointerFormSchema = z.object({
  uuid: z.string().uuid(),
  type: z.string({
    required_error: "Please select a pointer type.",
  }),
  value: z.string({ required_error: "Please enter a value." }),
});

type PointerFormValues = z.infer<typeof pointerFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<PointerFormValues> = {
  // uuid: "The UUID of the pointer.",
};

export function PointerForm() {
  const form = useForm<PointerFormValues>({
    resolver: zodResolver(pointerFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: PointerFormValues) {
    toast({
      title: "You submitted the following pointer:",
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
                <Input placeholder="The pointer's UUID." {...field} />
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
                    <SelectValue placeholder="Select a pointer type." />
                  </SelectTrigger>
                </FormControl>
                {/* <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent> */}
              </Select>
              <FormDescription>
                The pointer type determines the structural semantics of the
                pointer. It answers the question, "what kind of a pointer is
                this?".
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
                  placeholder="Describe the pointer."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                While the type of the pointer determines the structural
                semantics, the value of the pointer should be a clear
                description of the specific instance of the pointer. The value
                must conform to the type.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update pointer</Button>
      </form>
    </Form>
  );
}
