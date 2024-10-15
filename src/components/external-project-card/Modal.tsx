import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    link: string;
    techStack: string[];
    imageUrl?: string;
  } | null;
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  // Function to handle click events on the backdrop
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-all duration-300 ${
        visible
          ? 'bg-black bg-opacity-50 opacity-100'
          : 'bg-transparent opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`card shadow-lg bg-base-100 max-w-md w-full mx-4 transition-transform duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
        style={{
          transform: isOpen ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 300ms ease, opacity 300ms ease',
        }}
      >
        <div className="card-body p-6">
          <h2 className="text-xl font-bold text-center opacity-90">
            {project.title}
          </h2>
          {project.imageUrl && (
            <div className="flex justify-center mt-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="max-w-full max-h-64 h-auto object-contain"
              />
            </div>
          )}
          <p className="mt-2 text-opacity-60 text-sm">{project.description}</p>
          <div className="mt-2 flex flex-wrap justify-center">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
