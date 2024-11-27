class Tarea {
  constructor(descripcion, prioridad) {
      this.descripcion = descripcion;
      this.prioridad = prioridad;
  }
}

const tareas = [];

function agregarTarea() {
  const descripcion = prompt("Ingrese la descripción de la tarea:");
  const prioridad = prompt("Ingrese la prioridad de la tarea (Alta, Media, Baja):");
  
  const nuevaTarea = new Tarea(descripcion, prioridad);
  tareas.push(nuevaTarea);
  
  alert("Tarea agregada con éxito.");
}

function mostrarTareas() {
  if (tareas.length === 0) {
      alert("No hay tareas para mostrar.");
      return;
  }

  let listaTareas = "Lista de tareas:\n\n";
  tareas.forEach((tarea, index) => {
      listaTareas += `${index + 1}. ${tarea.descripcion} - Prioridad: ${tarea.prioridad}\n`;
  });
  
  alert(listaTareas);
}

function filtrarTareasPorPrioridad() {
  const prioridad = prompt("Ingrese la prioridad para filtrar (Alta, Media, Baja):");
  const tareasFiltradas = tareas.filter(tarea => tarea.prioridad.toLowerCase() === prioridad.toLowerCase());
  
  if (tareasFiltradas.length === 0) {
      alert(`No se encontraron tareas con prioridad ${prioridad}.`);
      return;
  }

  let listaTareasFiltradas = `Tareas con prioridad ${prioridad}:\n\n`;
  tareasFiltradas.forEach((tarea, index) => {
      listaTareasFiltradas += `${index + 1}. ${tarea.descripcion}\n`;
  });
  
  alert(listaTareasFiltradas);
}