import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useQuestions from '../hooks/useQuestions';

const ProblemDetail = () => {
  const { id } = useParams();
  const { questions, loading, error } = useQuestions();

  if (loading) return <div className="loading">Loading problem details...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const problem = questions.find(q => q.ID === id);
  
  if (!problem) return <div className="error">Problem not found</div>;

  return (
    <div className="problem-container">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>
      
      <h1 className="problem-title">{problem.title}</h1>
      
      <div className="section">
        <h2 className="section-title">Description</h2>
        <p className="description">{problem.description}</p>
      </div>

      <div className="section">
        <h2 className="section-title">Test Cases</h2>
        {problem.test_cases.map((testCase, index) => (
          <div key={index} className="test-case">
            <h3 className="test-case-title">Test Case {index + 1}</h3>
            <div style={{ marginBottom: '15px' }}>
              <span className="input-output-label">Input:</span>
              <div className="code-block">
                {testCase}
              </div>
            </div>
            <div>
              <span className="input-output-label">Expected Output:</span>
              <div className="code-block">
                {problem.output[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemDetail;
