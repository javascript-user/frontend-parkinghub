import React from "react";
import { MdError } from "react-icons/md";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-color-light p-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
            <MdError className="text-red-500 text-6xl mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-color-dark mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry! An error occurred while loading the map. Please try
              again or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === "development" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <p className="text-sm text-red-700 font-mono break-words">
                  {this.state.error?.message || "Unknown error"}
                </p>
              </div>
            )}
            <button
              onClick={this.resetError}
              className="w-full bg-color-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition mb-3"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full border-2 border-color-primary text-color-primary py-3 rounded-lg font-semibold hover:bg-color-light transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
