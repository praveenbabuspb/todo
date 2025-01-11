import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTasks = () => {
  const [tasks, setTasks] = useState<{ id: string; name: string; completed: boolean }[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load tasks from AsyncStorage on app startup
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    };
    loadTasks();
  }, []);

  const saveTasks = async (newTasks: { id: string; name: string; completed: boolean }[]) => {
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const addTask = (name: string) => {
    const newTask = { id: Date.now().toString(), name, completed: false };
    saveTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const searchTasks = (query: string) => {
    return tasks.filter((task) => task.name.toLowerCase().includes(query.toLowerCase()));
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    completedTasks,
    searchTasks,
    setSearchQuery,
  };
};

export { useTasks };
