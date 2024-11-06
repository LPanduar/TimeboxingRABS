import React from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';

const App: React.FC = () => {
    return (
        <div>
            <h1>Gestión de Tareas con Timeboxing</h1>
            <Login />
            <TaskList />
        </div>
    );
};

export default App;
