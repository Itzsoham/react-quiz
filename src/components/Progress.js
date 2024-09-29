function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <b>{index + 1}</b> /{numQuestions}
      </p>
      <p>
        Question <b>{points}</b> /{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
