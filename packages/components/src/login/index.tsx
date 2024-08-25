'use client'
import React from 'react'
import { ReloadIcon } from '@radix-ui/react-icons'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#ui/card'
import { Input } from '#ui/input'
import { Button } from '#ui/button'
import { useMutate } from '#hooks/use-mutate'
import { client } from '#lib/client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '#ui/form'

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
})

type Props = {
  onSuccess: () => void
}
export const Login = ({ onSuccess }: Props) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const { mutate: login, isLoading, error } = useMutate(client.collection('users'), 'authWithPassword')

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const autoData = await login(values.username, values.password, 'Failed to authenticate.')
    if (autoData) {
      onSuccess()
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <div className="w-full space-y-2">
              {error && <p className="text-xs text-destructive">{error}</p>}
              <div className="flex justify-end">
                <Button disabled={isLoading}>
                  {isLoading ? <ReloadIcon className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Login
                </Button>
              </div>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
