'use client'

import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Trash } from 'lucide-react'

type Activity = {
    id: string
    time: string
    task: string
    priority: 'Alta' | 'Media' | 'Baja'
}

export default function TimeboxingSchedule() {
    const [schedule, setSchedule] = useState<Activity[]>([
        { id: '1', time: "08:00 - 09:00", task: "Ejercicio matutino", priority: "Alta" },
        { id: '2', time: "09:00 - 10:30", task: "Trabajo en proyecto principal", priority: "Alta" },
        { id: '3', time: "10:30 - 10:45", task: "Descanso", priority: "Baja" },
        { id: '4', time: "10:45 - 12:15", task: "Reuniones y correos electrónicos", priority: "Media" },
        { id: '5', time: "12:15 - 13:00", task: "Almuerzo", priority: "Media" },
    ])

    const [newTime, setNewTime] = useState("")
    const [newTask, setNewTask] = useState("")
    const [newPriority, setNewPriority] = useState<Activity['priority']>("Media")

    const addActivity = () => {
        if (newTime && newTask) {
            const newActivity: Activity = {
                id: Date.now().toString(),
                time: newTime,
                task: newTask,
                priority: newPriority
            }
            setSchedule([...schedule, newActivity])
            setNewTime("")
            setNewTask("")
            setNewPriority("Media")
        }
    }

    const deleteActivity = (id: string) => {
        setSchedule(schedule.filter(activity => activity.id !== id))
    }

    const priorityColors = {
        Alta: "bg-danger text-white",
        Media: "bg-warning text-dark",
        Baja: "bg-success text-white"
    }

    return (
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
            <div className="card shadow-lg" style={{ maxWidth: '800px', width: '100%' }}>
                <div className="card-header bg-primary text-white">
                    <h2 className="card-title text-center mb-0">Horario de Timeboxing</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group mb-4">
                        {schedule.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <span className="fw-bold text-primary me-2">{item.time}</span>
                                <span className="flex-grow-1 mx-2">{item.task}</span>
                                <div className="d-flex align-items-center">
                  <span className={`badge ${priorityColors[item.priority]} rounded-pill me-2`}>
                    {item.priority}
                  </span>
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => deleteActivity(item.id)}
                                        aria-label={`Eliminar actividad: ${item.task}`}
                                    >
                                        <Trash size={16} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={(e) => { e.preventDefault(); addActivity(); }}>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label htmlFor="time" className="form-label">Hora</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="time"
                                    placeholder="ej. 14:00 - 15:00"
                                    value={newTime}
                                    onChange={(e) => setNewTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="task" className="form-label">Actividad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="task"
                                    placeholder="ej. Reunión de equipo"
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Prioridad</label>
                            <select
                                className="form-select"
                                id="priority"
                                value={newPriority}
                                onChange={(e) => setNewPriority(e.target.value as Activity['priority'])}
                            >
                                <option value="Alta">Alta</option>
                                <option value="Media">Media</option>
                                <option value="Baja">Baja</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Agregar Actividad
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}