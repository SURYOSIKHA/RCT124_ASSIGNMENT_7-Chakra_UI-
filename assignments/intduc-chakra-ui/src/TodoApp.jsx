import React, { useState } from 'react';
import {
  Heading,
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  Stack,
  VStack,
} from '@chakra-ui/react';

function TodoApp() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <VStack p={4} spacing={4}>
      <Heading as="h1" size="xl">
        Todo App
      </Heading>
      <Card maxW="md" shadow="md">
        <CardHeader>
          <Heading as="h2" size="md">
            Add Todo
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter todo"
              />
              <Button type="submit" colorScheme="teal">
                Add
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
      <Card maxW="md" shadow="md">
        <CardHeader>
          <Heading as="h2" size="md">
            Todo List
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={2}>
            {todos.map((todo, index) => (
              <Heading as="h3" size="sm" key={index}>
                {todo}
              </Heading>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default TodoApp;
