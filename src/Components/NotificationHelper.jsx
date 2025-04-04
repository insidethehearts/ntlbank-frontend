export function closeNotification(notification) {
    if (!notification) return;
    
    notification.classList.add('hide');
    
    // Удаляем элемент после завершения анимации
    notification.addEventListener('animationend', () => {
        notification.remove();
    });
}

export function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const text = document.createElement('span');
    text.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'notification-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => closeNotification(notification);
    
    notification.appendChild(text);
    notification.appendChild(closeBtn);
    
    const container = document.getElementById('notifications-container');
    container.hidden = false;
    container.appendChild(notification);
    
    if (duration) {
        setTimeout(() => closeNotification(notification), duration);
    }
    
    return notification;
}