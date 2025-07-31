interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
}

const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`${className} transition-all duration-200 hover:shadow-lg`}>
      {children}
    </div>
  );
};

export default MotionCard;
