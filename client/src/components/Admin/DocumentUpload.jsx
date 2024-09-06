

import React, { useState, useEffect } from 'react';

function DocumentUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    // Load uploaded files from localStorage on component mount
    const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    setUploadedFiles(storedFiles);
  }, []);

  useEffect(() => {
    // Save uploaded files to localStorage whenever they change
    localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    if (selectedFiles.length) {
      const fileObjects = selectedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        content: URL.createObjectURL(file), // Create object URL for file content
      }));
      setUploadedFiles((prevFiles) => [...prevFiles, ...fileObjects]);
      setSelectedFiles([]); // Clear the selected files
    }
  };

  const handleFileClick = (file) => {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension === 'pdf') {
      window.open(file.content, '_blank'); // Opens PDF files in a new tab
    } else {
      // For DOC and DOCX files, trigger a download
      const link = document.createElement('a');
      link.href = file.content;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderFileDetails = (file) => {
    const fileName = file.name;
    const fileSize = (file.size / (1024 * 1024)).toFixed(2) + ' MB'; // Convert size to MB
    const fileExtension = file.name.split('.').pop().toUpperCase();

    return (
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{fileName}</h3>
        <p className="text-sm text-gray-600">Size: {fileSize}</p>
        <p className="text-sm text-gray-600">Extension: {fileExtension}</p>
      </div>
    );
  };

  const getFileIcon = (file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 text-gray-500">
            <path d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
          </svg>
        );
      case 'doc':
      case 'docx':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12 text-gray-500">
            <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v9l5 5" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Upload Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl w-full mb-6 flex flex-col sm:flex-row items-center border border-gray-600">
        <input 
          type="file" 
          accept=".doc,.docx,.pdf" 
          multiple 
          onChange={handleFileChange} 
          className="block p-2 border border-gray-300 rounded mb-4 sm:mb-0 sm:flex-grow sm:mr-4 h-12"
        />
        <button 
          onClick={handleUpload} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 h-12"
        >
          Upload
        </button>
      </div>

      {/* Uploaded Documents Display */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl w-full border border-gray-600">
        {uploadedFiles.length > 0 && uploadedFiles.map((file, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300 border border-gray-600"
            onClick={() => handleFileClick(file)}
          >
            {/* File Icon */}
            <div className="w-full sm:w-1/3 h-32 flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 flex items-center justify-center">
              {getFileIcon(file)}
            </div>

            {/* File Details */}
            <div className="flex-1 flex flex-col">
              {renderFileDetails(file)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentUpload;






