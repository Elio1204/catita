const monthElement = document.getElementById('month');
const eventListElement = document.getElementById('event-list');

function renderCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    monthElement.textContent = new Date(year, month).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
    
    const daysElement = document.querySelector('.calendar-days');
    daysElement.innerHTML = '';
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        daysElement.appendChild(dayElement);
    }
}

function addEvent() {
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    
    if (eventName && eventDate) {
        const eventItem = document.createElement('li');
        eventItem.textContent = `${eventDate}: ${eventName}`;
        eventListElement.appendChild(eventItem);
        
        document.getElementById('event-name').value = '';
        document.getElementById('event-date').value = '';
    } else {
        alert('Cata, amor.. tenes que poner el nombre y la fecha');
    }
}

renderCalendar();
