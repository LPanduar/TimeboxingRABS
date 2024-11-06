import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Task {
    id: number;
    title: string;
    duration: number;
    completed: boolean;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        // Cargar tareas cuando el componente se monta
        const fetchTasks = async () => {
            try {
                const response = await api.get('/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error al cargar las tareas', error);
            }
        };
        fetchTasks();
    }, []);

    const handleAddTask = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/tasks', { title, duration });
            setTasks([...tasks, response.data]);
            setTitle('');
            setDuration(0);
        } catch (error) {
            console.error('Error al agregar la tarea', error);
        }
    };

    return (
        <div>
            <h2>Mis Tareas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.duration} minutos
                    </li>
                ))}
            </ul>

            <h3>Agregar Nueva Tarea</h3>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Título de la tarea"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Duración (minutos)"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    required
                />
                <button type="submit">Agregar Tarea</button>
            </form>
        </div>
    );
};

export default TaskList;
