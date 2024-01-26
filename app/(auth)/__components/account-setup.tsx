"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  role: z.string(),
  school_id: z
    .string({
      required_error: "Please enter a valid id.",
    })
    .min(10)
    .max(50),
  course: z.string({
    required_error: "Please select a course.",
  }),
  id_image: z.string(),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createUser } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

export default function AccountSetup({
  id,
  name,
}: {
  id: string;
  name: string | null;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      school_id: "",
      course: "",
      id_image: "",
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await createUser(id, values);
    router.push("/");
  }
  return (
    <div className="w-[300px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Are you a ...</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="student" />
                      </FormControl>
                      <FormLabel className="font-normal">Student</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="instructor" />
                      </FormControl>
                      <FormLabel className="font-normal">Instructor</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="school_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School ID:</FormLabel>
                <FormControl>
                  <Input placeholder="School ID" {...field} />
                </FormControl>
                <FormDescription>
                  Enter a valid school ID e.g 2021-00122
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Courses</SelectLabel>
                      <SelectItem value="bsit">
                        Bachelor of Science in Information Technology (BSIT)
                      </SelectItem>
                      <SelectItem value="bscs">
                        Bachelor of Science in Computer Science (BSCS)
                      </SelectItem>
                      <SelectItem value="crim">Criminology</SelectItem>
                      <SelectItem value="educ">Education</SelectItem>
                      <SelectItem value="busses_ad">
                        Business Administration
                      </SelectItem>
                      <SelectItem value="eng">Engineering</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
