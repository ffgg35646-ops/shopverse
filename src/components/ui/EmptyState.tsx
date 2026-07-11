import type { ReactNode } from "react";


interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}


const EmptyState = ({
  title,
  description,
  icon,
  action
}: EmptyStateProps) => {

  return (
    <div className="flex flex-col items-center justify-center text-center py-16">

      {icon && (
        <div className="mb-5 text-gray-400">
          {icon}
        </div>
      )}

      <h2 className="text-xl font-semibold mb-2">
        {title}
      </h2>

      {description && (
        <p className="text-gray-500 max-w-md mb-6">
          {description}
        </p>
      )}

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );

};


export default EmptyState;
