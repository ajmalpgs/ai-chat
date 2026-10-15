// JavaScript for AI Powered Chat functionality

const messagesContainer = document.getElementById('messages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');

// Add message to chat
function addMessage(content, isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = content;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Send message to backend
async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessage(userMessage); // Add user message
        chatInput.value = ''; // Clear input

        try {
            const response = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (response.ok) {
                const data = await response.json();
                addMessage(data.aiMessage, false); // Add AI message
            } else {
                addMessage('Error: Unable to get response from AI.', false);
            }
        } catch (error) {
            console.error('Error communicating with backend:', error);
            addMessage('Error: Unable to communicate with server.', false);
        }
    }
}

// Send message on button click
sendButton.addEventListener('click', sendMessage);

// Allow pressing "Enter" to send message
chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});