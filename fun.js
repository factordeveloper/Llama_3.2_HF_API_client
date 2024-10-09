document.getElementById('api-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const prompt = document.getElementById('prompt').value;
    const responseContainer = document.getElementById('response-container');
    
    responseContainer.innerHTML = 'Loading...';

    try {
        const response = await fetch('https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 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',  // Reemplaza con tu token
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'meta-llama/Llama-3.2-3B-Instruct',
                messages: [{role: 'user', content: prompt}],
                max_tokens: 500,
                stream: false
            })
        });

        const data = await response.json();
        responseContainer.innerHTML = `<strong>Response:</strong> ${data.choices[0].message.content}`;
    } catch (error) {
        responseContainer.innerHTML = 'An error occurred. Please try again later.';
    }
});
