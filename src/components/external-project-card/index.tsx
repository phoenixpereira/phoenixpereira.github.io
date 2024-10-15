import { Fragment, useState } from 'react';
import LazyImage from '../lazy-image';
import { skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
import Modal from './Modal';
const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<SanitizedExternalProject | null>(null);

  const renderSkeleton = () => {
    const skeletons = Array.from(
      { length: externalProjects.length },
      (_, index) => (
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-full h-full mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    );

    return skeletons;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <div
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        onClick={() => {
          setSelectedProject(item); // Set selected project
          setModalOpen(true); // Open modal
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4 text-center">
                <h2 className="font-bold text-lg opacity-60 mb-2">
                  {item.title}
                </h2>
                <div className="mt-2 text-lg text-opacity-60 font-semibold">
                  {item.date}
                </div>
                {item.imageUrl && (
                  <div className="opacity-90 w-full h-auto my-4">
                    <LazyImage
                      src={item.imageUrl}
                      alt={'thumbnail'}
                      placeholder={skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-full',
                        shape: '',
                      })}
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className=" opacity-70">{header}</span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </Fragment>
  );
};

export default ExternalProjectCard;
