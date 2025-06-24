import React from 'react';
import { Link } from 'react-router-dom';
import useQuestions from '../hooks/useQuestions';

const Dashboard = () => {
  const { questions, loading, error } = useQuestions();

  if (loading) return <div className="loading">Loading questions...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Coding Questions Dashboard</h1>
      <div>
        {questions.map((question) => (
          <div key={question.ID} className="question-card">
            <Link 
              to={`/problem/${question.ID}`}
              className="question-link"
            >
              {question.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
