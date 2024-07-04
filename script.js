document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const totalQuestions = 3;

    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'd'
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            score++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = `You scored ${score} out of ${totalQuestions}.`;
});
