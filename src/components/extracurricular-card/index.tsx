import React from 'react';
import { SanitizedExtracurricular } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  description,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  description?: React.ReactNode;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-neutral-400 rounded-full mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="font-normal">{company}</div>
    {description && (
      <p className="mt-4 text-sm text-opacity-60">{description}</p>
    )}
  </li>
);

const ExtraCurricularCard = ({
  loading,
  extracurriculars,
}: {
  loading: boolean;
  extracurriculars: SanitizedExtracurricular[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          description={skeleton({ widthCls: 'w-8/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="opacity-70">Extracurriculars</span>
            )}
          </h5>
        </div>
        <div className="text-opacity-60">
          <ol className="relative border-l border-neutral-400 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {extracurriculars.map((item, index) => (
                  <ListItem
                    key={index}
                    time={`${item.from} - ${item.to}`}
                    position={item.position}
                    company={item.company}
                    description={item.description}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricularCard;
