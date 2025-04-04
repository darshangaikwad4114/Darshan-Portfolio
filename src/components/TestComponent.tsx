import React from "react";

const TestComponent = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">
          Test Component Working
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          If you can see this, React is rendering correctly
        </p>
      </div>
    </div>
  );
};

export default TestComponent;
